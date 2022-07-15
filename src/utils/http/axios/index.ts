import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosStatic,
  type Canceler,
} from "axios";
import { useMessage } from "naive-ui";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CancelToken = axios.CancelToken;

type Job = {
  url: string;
  retryNum: number;
  isCancel: true;
  cancel: Canceler;
};

export type IResponse<T = any> = {
  data: T;
  code: number;
  errorMessage?: string;
};

class Whitelisting {
  // 白名单
  static Whitelist: string[] = ["post->/spm"];
  static hasWhite(url: string) {
    return Whitelisting.Whitelist.includes(url);
  }
}

class RequestQueue extends Whitelisting {
  constructor() {
    super();
  }
  static Queue = new Map<string, Job>();
  static hasJob(url: string) {
    if (this.Queue.has(url)) {
      console.log("取消" + url);
      this.cancelJob(url);
    }
  }
  static addJob(job: Job) {
    this.Queue.set(job.url, job);
  }
  static cancelJob(url: string) {
    this.Queue.get(url)?.cancel();
    this.Queue.delete(url);
  }
  static removeJob(url: string) {
    this.Queue.delete(url);
  }
  static clearJob() {
    this.Queue.forEach((item) => {
      item.cancel();
    });
    this.reset();
  }
  static reset(): void {
    this.Queue = new Map<string, Job>();
  }
}
/**
 * 请求基类
 */
class Request extends RequestQueue {
  public readonly axios: AxiosInstance;
  constructor(axios: AxiosStatic, baseURL: string) {
    super();
    this.axios = axios.create({
      baseURL,
      timeout: 30000,
      // withCredentials: true,
      // paramsSerializer: function (params) {
      //   // return stringify(params, { arrayFormat: 'brackets' });
      // },
    });
    this.setupInterceptors();
  }
  setupInterceptors() {
    this.RequestInterceptors();
    this.ResponseInterceptors();
  }
  // 请求拦截
  private RequestInterceptors() {
    this.axios.interceptors.request.use(
      (config) => {
        config.headers = Object.assign(config.headers as object, {
          Authorization: "",
          // Authorization: useUserInfoStore().token,
        });
        const url = `${config.method}->${config.url}`;
        if (!Request.hasWhite(url)) {
          Request.hasJob(url);
          const source = CancelToken.source();
          config.cancelToken = source.token;
          Request.addJob({
            url,
            retryNum: 0,
            cancel: source.cancel,
            isCancel: true,
          });
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  // 响应拦截
  private ResponseInterceptors() {
    this.axios.interceptors.response.use(
      (response: AxiosResponse<IResponse>) => {
        const { data, status } = response;
        const url = `${response.config.method}->${response.config.url}`;
        Request.removeJob(url);
        if (status >= 200 && status < 300) {
          if (data.code !== 200) {
            useMessage().error(response.data.errorMessage as string);
            return Promise.reject(response.data);
          }
          return Promise.resolve(response.data);
        }
        return Promise.reject(response);
      },
      (error) => {
        if (axios.isCancel(error)) {
          console.log("取消请求");
          return Promise.reject(error);
        }
        const url = `${error.config.method} ${error.config.url}`;
        Request.removeJob(url);
        useMessage().error("服务异常，请稍后再试");
        return Promise.reject(error);
      }
    );
  }

  get<T = any>(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<IResponse<T>> {
    return this.axios.get(url, config);
  }

  post<T = any>(
    url: string,
    data?: any | undefined,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<IResponse<T>> {
    return this.axios.post(url, data, config);
  }
}
export default new Request(axios, BASE_URL);
