import React from "react";
import styled from "styled-components";

import { ITodo } from "../types";
import { useTodoActions } from "../hooks";
import Button from "../../ui/controls/Button";

const Container = styled.div`
  padding: 12px;
  border: 3px solid var(--foreground);
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Todo = ({ id, text, status }: ITodo) => {
  const [draftText, setDraftText] = React.useState<ITodo["text"]>(text);
  const [draftStatus, setDraftStatus] = React.useState<ITodo["status"]>(status);
  const [mode, setMode] = React.useState<"view" | "edit">("view");
  const { remove, update } = useTodoActions();

  function handleUpdate() {
    update({ id, text: draftText, status: draftStatus });

    setMode("view");
  }

  return (
    <Container>
      {mode === "view" && (
        <>
          <span onClick={() => setMode("edit")}>
            {text} ({status})
          </span>
          <Button onClick={() => remove(id)}>
            <span aria-label="remove todo" role="img">
              ❎
            </span>
          </Button>
        </>
      )}
      {mode === "edit" && (
        <>
          <input type="text" value={draftText} onChange={e => setDraftText(e.target.value)} />
          <select value={draftStatus} onChange={e => setDraftStatus(e.target.value as ITodo["status"])}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <Button onClick={handleUpdate}>
            <span aria-label="remove todo" role="img">
              ✅
            </span>
          </Button>
        </>
      )}
    </Container>
  );
};

export default Todo;
