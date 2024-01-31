import Model from './route';
import { RouteObject } from 'react-router-dom';
//解决需要在路径上传递参数
//
export const get_params = (data: string[] | string): string => {
  if (typeof data === 'string') {
    return data;
  } else if (data && Array.isArray(data)) {
    return '/' + data.join('/');
  } else {
    return '';
  }
};
export const get_routers = (data: global_menu[]) => {
  const buildRouteObject = (menu: global_menu): RouteObject => {
    const { meta, name, key } = menu;
    const params = get_params(meta?.params || '');
    const path = params ? name + params : name;
    const children = data.filter(
      (child) => child.parent_id === menu.id && child.name !== 'open',
    );

    // 构建当前路由对象
    const routeObject: RouteObject = {
      path,
      element: Model({ router_link: key }),
      // 如果有子路由，递归调用 buildRouteObject 来构建它们
      ...(children.length > 0 && { children: children.map(buildRouteObject) }),
    };

    return routeObject;
  };

  // 从顶级路由开始构建路由树
  return data
    .filter((menu) => menu.parent_id === '0' && menu.name !== 'open')
    .map(buildRouteObject);
};
