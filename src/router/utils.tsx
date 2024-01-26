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
  const set_children_data = (datas: RouteObject[] = []) => {
    for (let i = 0; i < datas.length; i++) {
      const children = data.filter(
        (u: global_menu) => u.parent_id === datas[i].id && u.name !== 'open',
      );
      if (children.length > 0) {
        datas[i]['children'] = children.map((u: global_menu) => {
          const { meta = { is_token: false, params: '' } } = u;
          const { is_token = false } = meta;
          let path = u.name;
          const params = get_params(meta?.params || '');
          if (params) {
            path = path + params;
          }
          return {
            path: path,
            element: <Model is_token={is_token} router_link={u.key} />,
          };
        });
        set_children_data(datas[i]['children']);
      } else {
        return;
      }
    }
  };
  const links = data
    .filter((u: global_menu) => u.parent_id === '0' && u.name !== 'open')
    .map((u) => {
      const { meta = { is_token: false, params: '' }, name, id, key } = u;
      const { is_token = false } = meta;
      const params = get_params(meta?.params || '');
      const obj: RouteObject = { id };
      if (params) {
        obj.path = name + params;
      } else {
        obj.path = name;
      }

      obj.element = <Model is_token={is_token} router_link={key} />;
      set_children_data([obj]);
      return obj;
    });

  return [...links];
};
