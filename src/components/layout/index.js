import { Layout, Menu, Breadcrumb } from "antd";
import { FaLaptopCode } from "react-icons/fa";
import { FiPower } from "react-icons/fi";
import { IoIosGitNetwork } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { GoChevronRight } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import history from "../../config/history";
import { removeToken } from "../../config/auth";
const { Header, Content, Footer } = Layout;

const MenuList = [
  { order: "1", link: "/", title: "Postagens", icon: <BiComment /> },
  {
    order: "2",
    link: "/minharede",
    title: "Minha Rede",
    icon: <IoIosGitNetwork />,
  },
  { order: "3", link: "/painel", title: "Painel", icon: <RiProfileLine /> },
  { order: "4", link: "/perfil", title: "Perfil", icon: <CgProfile /> },
];
const LayoutBase = ({ children, breadcrumb, title, actions = null }) => {
  const getCurrent = MenuList.filter(
    (item) => item.link === history.location.pathname
  )[0];


  const HandleLogout = () => {
    console.log('remover token')
    removeToken();
    history.push('/signin')
  }

  return (
    <Layout className="layout">
      <HeaderStyled>
        <Logo>
          <FaLaptopCode /> Dev Connector{" "}
        </Logo>
        <MenuStyled
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          selectedKeys={[getCurrent?.order || ""]}
        >
          {MenuList.map((m) => (
            <Menu.Item key={m.order}>
              <Link to={m.link}>
                {m.icon} {m.title}
              </Link>
            </Menu.Item>
          ))}
          <Menu.Item key={10} onClick={HandleLogout}>
            <FiPower /> Sair
          </Menu.Item>
        </MenuStyled>
      </HeaderStyled>
      <ContentStyled>
        <Breadcrumb style={{ margin: "16px 0" }}>
          {breadcrumb.map((b, i) => (
            <Breadcrumb.Item key={i}>{b}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div className="site-layout-content">
          <TopBar>
            <Title>
              <GoChevronRight /> {title}
            </Title>
            <Actions>{actions}</Actions>
          </TopBar>
          {children}
        </div>
      </ContentStyled>
      <Footer style={{ textAlign: "center" }}>
        Todos os Direitos Reservados Dev Connector | 2020
      </Footer>
    </Layout>
  );
};

export default LayoutBase;

const HeaderStyled = styled(Header)`
  display: flex;
`;
const ContentStyled = styled(Content)`
  margin: auto 20px;
  .site-layout-content {
    background: #fff;
    padding: 5px;
    min-height: 80vh;
  }
`;
const Logo = styled.div`
  height: 31px;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  font-family: "Goldman", cursive;
  flex: 1;
  svg {
    position: relative;
    margin-bottom: -5px;
  }
`;
const TopBar = styled.div`
  display: flex;
  background: #eee5;
  padding: 10px;
`;

const Title = styled.div`
  color: #43949e;
  font-size: 28px;
  font-weight: 500;
  border-bottom: thin solid #eee2;
  flex: 1;
  svg {
    position: relative;
    margin-bottom: -5px;
  }
`;
const Actions = styled.div`
  justify-self: flex-end;
`;

const MenuStyled = styled(Menu)`
  display: flex;
  justify-content: flex-end;
  svg {
    position: relative;
    margin-bottom: -2px;
  }
`;
