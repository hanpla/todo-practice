import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// TODO: todo.json 데이터를 import 하세요
import initialData from "../../data/todo.json";

// TODO: useState를 import 하세요
import { useState } from "react";

export default function Stage1() {
  // TODO: todos 상태를 선언하세요 (초기값: todo.json에서 불러온 데이터)
  const [todos, setTodos] = useState(initialData);

  // TODO: 할 일 추가 함수를 만드세요
  // HINT: 새 todo 객체에는 id, title, completed, priority, createdAt 필드가 필요합니다
  const addNewTodo = (title) => {
    const createdAt = new Date().toISOString();

    const newTodo = {
      id: createdAt,
      title,
      completed: false,
      priority: "low",
      createdAt,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // TODO: 할 일 완료/미완료 토글 함수를 만드세요
  const toggleTodoComplete = (targetId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== targetId) return todo;

        return { ...todo, completed: !todo.completed };
      }),
    );
  };

  // TODO: 할 일 삭제 함수를 만드세요
  const deleteTodo = (targetId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
  };

  // TODO: 할 일 이름 변경 함수를 만드세요
  const changeTodoTitle = (targetId, newTitle) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId ? { ...todo, title: newTitle } : todo,
      ),
    );
  };

  return (
    <Container>
      <Description>
        기본 CRUD — 할 일 추가, 삭제, 완료 토글, 이름 변경
      </Description>
      {/* TODO: TodoForm과 TodoList 컴포넌트에 필요한 props를 전달하세요 */}
      <TodoForm onAdd={addNewTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodoComplete}
        onDelete={deleteTodo}
        onRename={changeTodoTitle}
      />
    </Container>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Container = styled.section``;

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.85rem;
  margin-bottom: 20px;
`;
