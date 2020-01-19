import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../ui/structure/Layout";
import SEO from "../ui/meta/Seo";
import { useTodos, Todo, ITodo } from "../todo";

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
  margin: 32px 0;
`;

const Empty = styled.p`
  text-align: center;
`;

const Todos = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Footer = styled.footer`
  text-align: center;
`;

const IndexPage = () => {
  const todos = useTodos();

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>This are some things you had to do and you didn't</Title>
        <Content>
          {todos.length ? (
            <Todos>
              {todos.map(({ id, text, status }: ITodo) => (
                <Todo key={id} id={id} status={status} text={text} />
              ))}
            </Todos>
          ) : (
            <Empty>Congrats! You have nothing to do (or you missed it)</Empty>
          )}
        </Content>
        <Footer>
          <Link to="/add">Add something else</Link>
        </Footer>
      </Container>
    </Layout>
  );
};

export default IndexPage;
