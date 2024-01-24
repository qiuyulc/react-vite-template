/// <reference types="vite/client" />

interface meta {
  title: string;
  is_token?: boolean;
  params?: string[] | string;
}

interface tabs_type {
  key: string;
  label: React.ReactNode;
}

// id: '1',
//         parent_id: '0',
//         icon: 'HomeOutlined',
//         layout: 'App',
//         label: '首页',
//         name: 'welcome',
//         key: 'welcome',
//         meta: {
//           title: '首页',
//         },

interface global_menu {
  id: string;
  parent_id: string;
  icon: string | React.ReactElement;
  label: string;
  layout: string;
  name: string;
  key: string;
  meta: meta;
}
interface global_route {
  id: string;
  parent_id: string;
  icon: string | React.ReactElement;
  label: string;
  layout: string;
  name: string;
  key: string;
  meta: meta;
  // nodeRef?: React.RefObject;
  // [key:string]:string
}

interface request<T> {
  code: number;
  msg: string;
  result: T;
}

interface useInfoType {
  token: string;
  userName: string;
  password: string;
}
