import LayoutBase from "../components/layout";
import { Collapse } from 'antd';
import styled from "styled-components";
import Card from '../components/networking/card.js'
const { Panel } = Collapse;
const BreadCrumb = ["Home", "Minha Rede"];
const Networking = () => {
  const Actions = "";

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Minha Rede" actions={Actions}>
      <Collapse defaultActiveKey={['1']} ghost>
        <PanelStyled header="Amigos" key="1">
          <Cards>
            {[...Array(39).keys()].map((v, i) => (
              <Card key={i} />
            ))}
          </Cards>
        </PanelStyled>
        <PanelStyled header="Sugestão de amizade" key="2">
          <Cards>
            {[...Array(39).keys()].map((v, i) => (
              <Card key={i} />
            ))}
          </Cards>
        </PanelStyled>
      </Collapse>
    </LayoutBase>
  );
};

export default Networking;


const PanelStyled = styled(Panel)`
  .ant-collapse-header{
    background-color: #001529;
    color: #fff !important;
    margin: 10px auto;
  }
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 290px));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  max-height: 700px;
  overflow-y: auto;
  
`
