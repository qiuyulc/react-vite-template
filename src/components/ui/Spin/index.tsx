import { Spin, SpinProps } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
interface SpinComTypes {
  spin?: SpinProps;
}

const SpinCom = (props: SpinComTypes) => {
  const { spin = {} } = props;

  return (
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 24,
          }}
          spin
        />
      }
      {...spin}
    />
  );
};
export default SpinCom;
