import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Manage_article = () => {
  const navigate = useNavigate();
  const click_to = (link: string) => {
    navigate(link);
  };
  return (
    <div>
      <Button
        type='primary'
        onClick={() => click_to('/article/edit_article')}
        icon={<SearchOutlined />}
      >
        Search
      </Button>
    </div>
  );
};

export default Manage_article;
