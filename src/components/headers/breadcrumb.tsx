import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hook';
import styles from './index.module.less';

const BreadcrumbCom = () => {
  const location = useLocation();
  const [bread, set_bread] = useState<string[]>([]);
  const routes = useAppSelector((state) => state.menuSlice.menu_list);
  useEffect(() => {
    const paths = location.pathname.split('/').filter((u: string) => u);
    const path = paths.join('/');
    const items: string[] = [];
    paths.forEach((u) => {
      const item: global_menu | undefined = routes.find(
        (j) => j.key === u || j.key === path,
      );
      if (item !== undefined) {
        items.push(item?.label);
      }
    });
    set_bread(items);
  }, [location.pathname, routes]);
  return (
    <Breadcrumb
      className={styles.breadcrumb}
      items={[...bread.map((u: string) => ({ title: u }))]}
    >
      {/*{*/}
      {/*    bread.map(u=>{*/}
      {/*        return <Breadcrumb.Item key={u}>{u}</Breadcrumb.Item>*/}
      {/*    })*/}
      {/*}*/}
    </Breadcrumb>
  );
};
export default BreadcrumbCom;
