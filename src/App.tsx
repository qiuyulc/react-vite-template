import { Suspense } from 'react';
import styles from './index.module.less';
import { useLocation, useOutlet } from 'react-router-dom';
import MenuCom from '@/components/menu';
import Header from '@/components/headers';
import TabsCom from '@/components/tabs';
import Loading from '@/components/loading';
import WaterMarkBox from '@/components/watermark/index';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useAppSelector } from '@/redux/hook';
import _ from 'lodash';
import { Layout } from 'antd';

const { Content } = Layout;

function App() {
  const location = useLocation();
  const routes = _.cloneDeep(
    useAppSelector((state) => state.menuSlice.menu_list),
  );
  const { layout } =
    routes.find(
      (route: global_menu) => '/' + route.key === location.pathname,
    ) ?? {};
  const currentOutlet = useOutlet();
  const create_layout = (type: string | undefined) => {
    if (type === 'App' || !type) {
      return (
        <>
          <Header />
          <Layout className={styles.App_bom}>
            <MenuCom />
            <Layout className={styles.App_main}>
              <nav className={styles.App_nav}>
                <TabsCom />
              </nav>
              <Content className={styles.App_outlet}>
                <WaterMarkBox content={''}>{children()}</WaterMarkBox>
              </Content>
            </Layout>
          </Layout>
        </>
      );
    } else if (type !== undefined) {
      return (
        <Content className={styles.App_outlet}>
          <WaterMarkBox content={''}>{children()}</WaterMarkBox>
        </Content>
      );
    }
  };

  const children = () => {
    return (
      <Suspense fallback={<Loading />}>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            timeout={360}
            // nodeRef={nodeRef}
            classNames={'page'}
            unmountOnExit>
            {() => {
              return (
                <div
                  // style={{color: colorTextBase}}
                  // ref={nodeRef}
                  className={'page'}>
                  {currentOutlet}
                </div>
              );
            }}
          </CSSTransition>
        </SwitchTransition>
      </Suspense>
    );
  };

  return <Layout className={styles.App}>{create_layout(layout)}</Layout>;
}

export default App;
