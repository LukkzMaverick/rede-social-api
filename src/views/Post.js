import React, { useEffect, useState } from "react";
import LayoutBase from "../components/layout";
import PostItem from "../components/post/item";
import Loading from "../components/loading/index";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPostAll } from "../store/Post/post.action";
import { Button, Modal } from "antd";
import Form from "../components/post/form.js";
const BreadCrumb = ["Home", "Post"];

const PostView = () => {
  // const [page, setPage] = useState(1);
  const [modal, showModal] = useState(false);

  // Estado do redux -----------------------------------
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.post.loading);
  const postAll = useSelector((state) => state.post.all);

  // -----------------------------------
  useEffect(() => {
    dispatch(getPostAll());
  }, [dispatch]);

  // const isFinalPage = () => {
  //   const totalPage = Math.ceil(total / limitPerPage);
  //   return page === totalPage;
  // };
  const Actions = <Button onClick={() => showModal(true)}> Novo </Button>;

  const handleCancel = () => {
    showModal(false);
  };

  const handleSubmit = (form, e) => {
    e.preventDefault();
    dispatch(createPost(form));
    handleCancel();
  };
  const mountPosts = () => {
    if (postAll) {
      return postAll.map((post, i) => (
        <PostItem
          key={i}
          author={post.author}
          title={post.title}
          description={post.description}
          created_at={post.created_at}
        />
      ));
    }
    return;
  };

  // const changePage = (page) => (page >= 1 ? setPage(page) : false);
  // const Paginator = () => {
  //   return !loading && total > limitPerPage ? (
  //     <PaginatorStyled>
  //       <Button
  //         onClick={() => changePage(page - 1)}
  //         disabled={page === 1}
  //         type="primary"
  //       >
  //         Anterior
  //       </Button>
  //       <Button
  //         disabled={isFinalPage()}
  //         onClick={() => changePage(page + 1)}
  //         type="primary"
  //       >
  //         Próximo
  //       </Button>
  //     </PaginatorStyled>
  //   ) : (
  //     ""
  //   );
  // };
  const ModalForm = () => (
    <Modal
      title="Nova Postagem"
      visible={modal}
      footer={false}
      onCancel={handleCancel}
    >
      <Form submit={handleSubmit} closeModal={handleCancel} />
    </Modal>
  );

  return (
    <LayoutBase breadcrumb={BreadCrumb} title="Postagens" actions={Actions}>
      <ModalForm />
      {loading ? <Loading /> : mountPosts()}
    </LayoutBase>
  );
};

export default PostView;

// const PaginatorStyled = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
//   padding: 10px;
//   button {
//     margin: 5px;
//   }
// `;
