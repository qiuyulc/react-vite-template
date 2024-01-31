import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;
// import { useSearchParams, useParams } from 'react-router-dom';
const Edit_article = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  // let [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  // let params = useParams();
  // console.log(params, 'params');

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name='basic'
      style={{ width: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='文章名称'
        name='article_name'
        rules={[{ required: true, message: '请输入文章名称' }]}
      >
        <Input placeholder={'请输入文章名称'} />
      </Form.Item>
      <Form.Item
        name='select'
        label='文章分类'
        hasFeedback
        rules={[{ required: true, message: '请选择文章分类' }]}
      >
        <Select placeholder={'请选择文章分类'}>
          <Option value='china'>前端</Option>
          <Option value='usa'>后端</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label='文章内容'
        name='article_value'
        rules={[{ required: true, message: '请输入文章内容' }]}
      >
        <Input.TextArea
          style={{ height: 160 }}
          placeholder={'请输入文章内容'}
          showCount
          maxLength={100}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Edit_article;
