import { useState } from "react";
import { Form, Button, Input } from "antd";
import { createPost } from "../../store/Post/post.action";
import { useDispatch } from "react-redux";
const { TextArea } = Input;
const FormPost = (props) => {
  const dispatch = useDispatch();
  const [form, setform] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const submitPost = (e) => {
    e.preventDefault();
    dispatch(createPost(form));
    props.closeModal();
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={() => {}}
      onFinishFailed={() => {}}
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: "Favor insira um titulo" }]}
      >
        <Input
          placeholder="Titulo da postagem"
          name="title"
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item
        name="description"
        rules={[{ required: true, message: "Insira uma descriçao..." }]}
      >
        <TextArea
          showCount
          maxLength={50}
          name="description"
          onChange={handleChange}
        />
      </Form.Item>
      <br />
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={submitPost}>
          Publicar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormPost;
