import { Layout, Col, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { FaLaptopCode } from "react-icons/fa";
import imgSignIn from "../../assets/img/signIn.jpg";

import { signIn } from "../../store/Sign/sign.action";
import { useState } from "react";
const { Content } = Layout;
const SignIn = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    password: "123456",
    email: "fox@gmail.com",
  });

  const handleChange = (props) => {
    const { value, name } = props.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = () => {
    dispatch(signIn(form));
    console.log(process.env.REACT_APP_API);
    return;
  };
  return (
    <Layout className="layout">
      <Main>
        <SliceBg span={16}>
          <div>
            <FaLaptopCode /> DEV CONNECTOR
          </div>
          <span>Conectando Desenvolvedores</span>
          <BgImg />
        </SliceBg>
        <SliceForm span={8}>
          <FormLogin>
            <Form initialValues={{ ...form }}>
              <Form.Item name="email">
                <Input
                  name="email"
                  value={form.email || ""}
                  onChange={handleChange}
                  placeholder="Entre com seu e-mail"
                />
              </Form.Item>

              <Form.Item name="password">
                <Input.Password
                  value={form.password || ""}
                  name="password"
                  onChange={handleChange}
                  placeholder="Entre com sua senha"
                />
              </Form.Item>

              <Form.Item>
                <Button onClick={submitForm} type="primary" htmlType="submit">
                  Enviar
                </Button>
              </Form.Item>
            </Form>
          </FormLogin>
        </SliceForm>
      </Main>
    </Layout>
  );
};

export default SignIn;

const Main = styled(Content)`
  display: flex;
  height: 100vh;
`;
// background

const SliceBg = styled(Col)`
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 700;
  font-family: "Goldman", cursive;
  color: #061b35;
  text-shadow: 4px 4px 2px #43949e;
  line-height: 1;
  span {
    font-family: "Goldman", cursive;

    font-size: 20pt;
    font-weight: 400;
    text-shadow: none;
  }
  svg {
    position: relative;
    margin-bottom: -15px;
    color: #061b35;
    text-shadow: 4px 4px 2px #43949e;
  }
`;

const BgImg = styled.div`
  position: absolute;
  display: block;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  background-image: url(${imgSignIn});
  background-size: auto 100%;
  background-position: center;
  opacity: 0.4;
`;

// form
const SliceForm = styled(Col)`
  height: 100vh;
  display: flex;
  background-image: linear-gradient(180deg, #1c516a, #061b35);
  padding: 20px;
`;
const FormLogin = styled.div`
  padding: 20px;
  width: 100%;
  align-self: center;
`;
