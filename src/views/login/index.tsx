import styles from './index.module.less';
import { useState } from 'react';
import Login_com from './login_com';
import Register from './register';

export default function Login() {
  const [head, setHead] = useState<boolean>(true);
  //切换登录注册
  const tabClick = () => {
    setHead(!head);
  };
  return (
    <div className={styles.login_box}>
      <div className={styles.login}>
        <div className={styles.login_left}>
          <div className={styles.bg_1}></div>
          <div className={styles.bg_2}></div>
        </div>
        <div className={styles.login_right}>
          <h3 style={{ margin: head ? '40px 0 60px 0' : '20px 0' }}>
            {head ? 'XXX登录' : 'XXX注册'}
          </h3>
          {head ? (
            <Login_com onChange={() => tabClick()}></Login_com>
          ) : (
            <Register onChange={() => tabClick()}></Register>
          )}
        </div>
      </div>
    </div>
  );
}
