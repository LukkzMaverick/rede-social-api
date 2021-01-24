import LayoutBase from "../../components/layout";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const BreadCrumb = ["Home", "Painel"];

const Error404 = () => {
  const Actions = "";

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Painel" actions={Actions}>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página que você visitou não existe. Voltar para Pagina Postagens        "
        extra={
          <Button type="primary">
            <Link to="/">Ir para Postagens</Link>
          </Button>
        }
      />
    </LayoutBase>
  );
};

export default Error404;
