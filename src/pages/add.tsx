import React from "react";
import styled from "styled-components";
import { navigate, Link } from "gatsby";

import Layout from "../ui/structure/Layout";
import SEO from "../ui/meta/Seo";
import Button from "../ui/controls/Button";
import { useTodoActions } from "../todo";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.footer`
  text-align: center;
`;

const AddPage = () => {
  const { add } = useTodoActions();

  function handleAdd() {
    add("Something new to do");
    navigate("/");
  }

  return (
    <Layout>
      <SEO title="Add" />
      <Container>
        <Title>Add a todo</Title>
        <Content>
          <Button onClick={handleAdd}>Add</Button>
        </Content>
        <Footer>
          <Link to="/">Go back</Link>
        </Footer>
      </Container>
    </Layout>
  );
};

export default AddPage;
