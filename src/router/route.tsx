import React, { useEffect } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
const modules = import.meta.glob('@/views/**');

const Model = (props: { router_link: string; is_token?: boolean }) => {
  const { router_link, is_token = false } = props;
  const navigate = useNavigate();
  const local_user = sessionStorage.getItem('userInfo') || 0;

  //监听保存的数据失效
  useEffect(() => {
    if (is_token && !local_user) {
      message.success('登录失效，请重新登录');
      navigate('/login', { replace: true });
    }
  }, [local_user, navigate, is_token]);

  let Com = null;
  if (router_link && local_user) {
    const URL = '/src/views/' + router_link + '/index.tsx';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    Com = React.lazy(modules[URL] as any);
    return <>{Com ? <Com /> : ''}</>;
  } else {
    return <></>;
  }
};
export default Model;
