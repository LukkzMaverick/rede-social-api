import { useState } from "react";
import { Form, Button, Input, Row, Col, Select } from "antd";
import { createPost } from "../../store/Post/post.action";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const { Option } = Select;
const FormPost = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [form, setform] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSelect = (value) => {
    setform({
      ...form,
      gender: value,
    });
  };

  const submitPost = (e) => {
    e.preventDefault();
    dispatch(createPost(form));
    props.closeModal();
  };

  return (
    <>
      {!Object.keys(profile).length > 0 ? (
        ""
      ) : (
          <ContainerForm>
            <Col span={12}>
              <Form
                name="basic"
                initialValues={profile}
                onFinish={() => { }}
                onFinishFailed={() => { }}
              >
                <Form.Item name="name">
                  <Input
                    placeholder="Insira um Nome"
                    name="name"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item name="username">
                  <Input
                    placeholder="Insira um Username"
                    name="username"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item name="email">
                  <Input
                    placeholder="Insira um Email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item name="gender">
                  <Select
                    style={{ width: 120 }}
                    name="gender"
                    onChange={handleSelect}
                    placeholder="Sexo"
                  >
                    <Option value="masculino">Masculino</Option>
                    <Option value="feminino">Feminino</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="place">
                  <Input
                    placeholder="Insira um Local"
                    name="place"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item name="password">
                  <Input
                    placeholder="Insira uma senha"
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item name="password">
                  <Input type="file" name="picture" />
                </Form.Item>

                <br />
                <Form.Item>
                  <Button type="primary" htmlType="submit" onClick={submitPost}>
                    Publicar
                </Button>
                </Form.Item>
              </Form>
            </Col>
          </ContainerForm>
        )}
    </>
  );
};

export default FormPost;

const ContainerForm = styled(Row)`
  margin-top: 20px;
`;
