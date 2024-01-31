import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/redux/hook';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import _ from 'lodash';
import IconFont from '@/components/icon';
const { Sider } = Layout;
interface route extends global_route {
  path?: string;
  element?: any;
  children?: route[];
}

const get_menu = (data: global_route[]) => {
  // 定义一个递归函数来为每个路由项设置 children 属性
  const setChildrenData = (menuItems: route[]): route[] => {
    return menuItems.map((item) => {
      const children = data.filter((u) => u.parent_id === item.id);
      // 如果有子项，递归调用 setChildrenData 来设置子项的 children
      if (children.length > 0) {
        return {
          ...item,
          icon: <IconFont icon_link={item.icon as string} />,
          children: setChildrenData(children), // 递归设置子项
        };
      }
      // 如果没有子项，直接返回当前项（添加 icon）
      return {
        ...item,
        icon: <IconFont icon_link={item.icon as string} />,
      };
    });
  };

  // 从顶级路由开始构建菜单
  const topLevelRoutes = data.filter((u) => u.parent_id === '0');
  return setChildrenData(topLevelRoutes); // 使用递归函数构建完整的菜单结构
};

const getOpenKeys = () => {
  const paths = location.pathname.split('/').filter((u) => u);
  //大于2 表示需要打开SubMenu
  if (paths.length >= 2) {
    return paths;
  } else {
    return [];
  }
};
const MenuCom = () => {
  // const {
  //     token: { colorBgContainer },
  // } = theme.useToken();
  const inlineCollapsed: boolean = useAppSelector(
    (state) => state.menuSlice.inlineCollapsed,
  );
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState(location.pathname);
  const [openKeys, setOpenKeys] = useState(getOpenKeys());
  const menu: global_route[] = useAppSelector(
    (state) => state.menuSlice.menu_list,
  );
  const items: MenuProps['items'] = get_menu(_.cloneDeep(menu));
  const menuClick: MenuProps['onClick'] = ({ key }) => {
    const data = menu.find((u) => u.key === key);

    if (data && data.name === 'open') {
      window.open(key);
    } else {
      navigate(key);
    }
  };
  const openChange = (openKeys: string[]) => {
    setOpenKeys(openKeys);
  };

  useEffect(() => {
    setOpenKeys(getOpenKeys());
    setSelectedKeys(location.pathname.substring(1));
  }, [location]);
  return (
    <Sider trigger={null} collapsed={inlineCollapsed}>
      {/*<aside className={styles.App_aside}>*/}
      <Menu
        style={{ borderColor: 'transparent' }}
        // key={selectedKeys}
        // inlineCollapsed={inlineCollapsed}
        theme='dark'
        onClick={menuClick}
        onOpenChange={openChange}
        // style={{width: inlineCollapsed ? 90 : 260}}
        openKeys={openKeys}
        selectedKeys={[selectedKeys]}
        mode='inline'
        items={items}
      />
      {/*</aside>*/}
    </Sider>
  );
};
export default MenuCom;
