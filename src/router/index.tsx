import App from '@/App';
import Login from '@/views/login';
import Empty from '@/views/empty';
import {
  Navigate,
  useRoutes,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { setMenu, removeTab, getMenuList } from '@/redux/menu';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { get_routers } from '@/router/utils';
import _ from 'lodash';

// interface route {
//   label?: string;
//   key?: string;
//   path?: string;
//   element?: React.ReactNode;
//   children?: route[];
//   errorElement?: React.ReactNode;
//   meta?: meta;
// }

const RouterView = () => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.menuSlice.menu_list);

  const location = useLocation();
  //修改网站title
  useEffect(() => {
    const route: global_menu | undefined = menu.find(
      (u) => '/' + u.key === location.pathname,
    );
    if (route) {
      const { meta: meta } = route;
      if (meta?.title) {
        document.title = meta?.title;
      } else {
        document.title = 'admin';
      }
    } else {
      if (location.pathname === '/login') {
        document.title = '登陆';
      }
    }
  }, [location.pathname, menu]);

  const routers = useRoutes([
    {
      path: '/',
      element: <Navigate to={'/welcome'} />,
    },
    {
      path: '/',
      element: <App />,
      children: [...get_routers(_.cloneDeep(menu))],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <Empty title={404} />,
    },
  ]);
  //判断是否登陆
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname.indexOf('login') > -1) {
      dispatch(removeTab([]));
      dispatch(setMenu([]));
    }

    // if (location.pathname.indexOf('login') === -1) {
    //   const local_user = sessionStorage.getItem('userInfo') || 0;
    //   if (!local_user) {
    //     message.success('登录失效，请重新登录');
    //     navigate('/login');
    //   }
    // }
  }, [location.pathname, dispatch, navigate]);
  //判断是否已经有了导航数据
  useEffect(() => {
    if (menu.length === 0 && location.pathname != '/login') {
      dispatch(getMenuList());
    }
  }, [menu, location.pathname, dispatch]);

  return (
    <>{menu.length === 0 && location.pathname != '/login' ? '' : routers}</>
    // <>
    //     {
    // menu.length === 0 && location.pathname != '/login' ? '' : <ConfigProvider
    //     theme={{
    //         token: {
    //             colorPrimary: colorPrimary,
    //         }, algorithm: theme[global_color ? 'defaultAlgorithm' : 'darkAlgorithm']
    //     }}>{routers}</ConfigProvider>

    //     }
    // </>
  );
};
export default RouterView;
