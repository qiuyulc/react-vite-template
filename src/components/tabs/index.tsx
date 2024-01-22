import styles from './index.module.less';
import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { setTabs, removeTab } from '@/redux/menu';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
// import {deepClone} from "@/util/functions";

const TabsCom = () => {
  const tabs_list = useAppSelector((state) => state.menuSlice.tabs_list);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('');
  useEffect(() => {
    if (location.pathname) {
      dispatch(setTabs(location.pathname));
      setActiveKey(location.pathname.substring(1));
    }
  }, [dispatch, navigate]);
  const onChange = (key: string) => {
    navigate(key);
  };
  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
  ) => {
    const tabIndex = tabs_list.findIndex((u: tabs_type) => u.key === targetKey);
    const tabs = _.cloneDeep(tabs_list);
    if (tabs.length === 1 && tabs[tabIndex].key === 'welcome') {
      //什么都不做
    } else {
      tabs.splice(tabIndex, 1);
    }

    if (tabs.length === 0) {
      navigate('/welcome');
    } else {
      if (location.pathname === `/${targetKey as string}`) {
        navigate('/' + tabs[tabs.length - 1].key);
      }
    }
    dispatch(removeTab(tabs));
  };
  return (
    <div className={styles.tabs}>
      {tabs_list.length === 0 ? (
        ''
      ) : (
        <Tabs
          type='editable-card'
          // key={activeKey}
          hideAdd
          size={'small'}
          key={activeKey}
          // type="card"
          activeKey={activeKey}
          // defaultActiveKey={activeKey}
          onChange={onChange}
          onEdit={onEdit}
          items={[
            ...tabs_list.map((u) => {
              return {
                label: u.label,
                key: u.key,
                children: '',
              };
            }),
          ]}
        />
      )}
    </div>
  );
};

export default TabsCom;
