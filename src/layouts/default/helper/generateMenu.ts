// export  const generateRouter = (routes: any[]) => {})
import { omitBy, isUndefined } from "lodash-es";

export const generateMenu = (routes: any[]) => {
  const menu: any[] = [];
  routes
    .filter((item) => !item.meta.hideMenu)
    .forEach((route: any) => {
      if (route.meta && route.meta.title) {
        const { icon, title: label } = route.meta;
        const { name: key, children, path } = route;
        menu.push(
          omitBy(
            {
              key,
              label,
              icon,
              path,
              children: children ? generateMenu(children) : undefined,
            },
            isUndefined
          )
        );
      }
    });
  return menu;
};
