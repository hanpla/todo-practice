import styled from "styled-components";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, onRename }) {
  // TODO: todos 배열이 비어있을 때 안내 메시지를 보여주세요
  if (todos.length === 0) {
    return (
      <EmptyMessage>
        할 일이 없습니다. 새로운 할 일을 추가해보세요!
      </EmptyMessage>
    );
  }

  // TODO: todos 배열을 순회하며 TodoItem 컴포넌트를 렌더링하세요
  // HINT: map 함수를 사용하세요
  // HINT: 각 TodoItem에 key prop과 필요한 핸들러 props를 전달하세요

  return (
    <List>
      {/* 여기에 TodoItem 목록을 렌더링하세요 */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onRename={onRename}
        />
      ))}
    </List>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.95rem;
  padding: 40px 0;
`;
