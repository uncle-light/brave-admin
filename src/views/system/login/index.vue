<template>
  <div class="flex flex-col items-center w-screen h-screen pt-20">
    <div class="absolute top-3 right-10 space-x-4">
      <AppLocales></AppLocales>
      <AppTheme></AppTheme>
    </div>
    <div class="flex flex-col items-center justify-center w-full p-10">
      <div class="inline-flex items-center">
        <h1 class="text-3xl font-bold">{{ appName }}</h1>
      </div>
      <p>{{ t("views.login.tips") }}</p>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-80 sm:w-96 border-amber-100">
        <n-form
          ref="formRef"
          :rules="rules"
          :model="formValue"
          size="large"
          :show-label="false"
        >
          <n-form-item first path="userName">
            <n-input
              v-model:value="formValue.userName"
              :placeholder="t('views.login.email')"
            >
              <template #prefix>
                <n-icon :component="MailOutline" />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item first path="passWord">
            <n-input
              v-model:value="formValue.passWord"
              type="password"
              show-password-on="click"
              :placeholder="t('views.login.password')"
            >
              <template #prefix>
                <n-icon :component="LockClosedOutline" />
              </template>
            </n-input>
          </n-form-item>
          <n-form-item>
            <n-space justify="end" :inline="true" size="large" class="w-full">
              <n-button
                text
                attr-type="button"
                type="primary"
                @click="message.info('暂不支持')"
              >
                {{ t("views.login.retrievePassword") }}
              </n-button>
            </n-space>
          </n-form-item>
          <n-form-item>
            <n-button
              :block="true"
              type="primary"
              attr-type="button"
              :disabled="!formValue.userName || !formValue.passWord"
              @click="handleValidateClick"
            >
              {{ t("views.login.login") }}
            </n-button>
          </n-form-item>
        </n-form>
      </div>
    </div>
    <footer>©️2022 {{ appName }}</footer>
  </div>
</template>
<script setup lang="ts">
import { LockClosedOutline, MailOutline } from "@vicons/ionicons5";
import isEmail from "validator/es/lib/isEmail";
import { FormRules, FormInst, useMessage } from "naive-ui";
import { useI18n } from "@/hooks/web/useI18n";
import { AppLocales, AppTheme } from "@/components";
import { useAppInfo } from "@/store/modules/appInfo";
import { asyncRoutes } from "@/router/routes";
import { useUserInfoStore } from "@/store/modules/userInfo";
const { appName } = useAppInfo();
const { t } = useI18n();
const userInfo = useUserInfoStore();
const formRef = ref<FormInst | null>(null);
const message = useMessage();
const router = useRouter();
const formValue = reactive({
  userName: "xxxx@gamil.com",
  passWord: "xxxxxx",
});
const rules: FormRules = {
  userName: [
    { required: true, message: "请输入邮箱", trigger: ["input", "blur"] },
    {
      validator: (rule: any, value: string) => {
        return isEmail(value ?? "");
      },
      message: "请输入正确的邮箱",
      trigger: ["blur"],
    },
  ],
  passWord: [
    { required: true, message: "请输入密码", trigger: ["input", "blur"] },
    { min: 6, message: "密码长度不能小于6位", trigger: ["input", "blur"] },
  ],
};

const handleValidateClick = () => {
  formRef.value
    ?.validate(async (errors) => {
      if (errors) {
        message.error(errors[0][0].message as string);
        return;
      }
      userInfo.email = formValue.userName;
      userInfo.token = getUuid();
      await router.push({ name: "home_index" });
    })
    .catch((e) => {
      console.log(e);
    });
  function getUuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
};
</script>
<style lang="scss" scoped>
.login-bg {
  background: #f1f2f5;
}
</style>
