import styled from "styled-components";

// TODO: useState를 import 하세요
import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete, onRename }) {
  // TODO: 수정 모드 상태(isEditing)를 관리할 state를 선언하세요
  const [isEditing, setIsEditing] = useState(false);

  // TODO: 수정 중인 텍스트(editValue)를 관리할 state를 선언하세요
  const [editValue, setEditValue] = useState(todo.title);

  // TODO: 더블클릭 시 수정 모드로 전환하는 함수를 만드세요
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // TODO: 키보드 이벤트 핸들러를 만드세요
  // HINT: Enter 키 → 수정 확정, Escape 키 → 수정 취소
  const handleEditKeydown = (e) => {
    if (e.key === "Enter") {
      onRename(todo.id, editValue);
      setIsEditing(false);
    }

    if (e.key === "Escape") {
      setEditValue(todo.title);
      setIsEditing(false);
    }
  };

  // TODO: 포커스를 잃었을 때(blur) 수정을 확정하는 함수를 만드세요
  const handleEditBlur = () => {
    onRename(todo.id, editValue);
    setIsEditing(false);
  };

  return (
    <Container>
      {/* TODO: 체크박스를 렌더링하세요 (완료 토글) */}
      <Checkbox
        type="checkbox"
        onChange={() => onToggle(todo.id)}
        checked={todo.completed}
      />

      {/* TODO: 수정 모드일 때는 입력창, 아닐 때는 텍스트를 보여주세요 */}
      {/* HINT: 조건부 렌더링을 사용하세요 */}
      {/* HINT: 텍스트에 더블클릭 이벤트를 연결하세요 */}
      {isEditing ? (
        <EditInput
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleEditKeydown}
          onBlur={handleEditBlur}
        />
      ) : (
        <Title onDoubleClick={handleDoubleClick} $completed={todo.completed}>
          {todo.title}
        </Title>
      )}

      {/* TODO: 삭제 버튼을 렌더링하세요 */}
      <DeleteButton onClick={() => onDelete(todo.id)}>삭제</DeleteButton>
    </Container>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.accent.primary};
`;

const Title = styled.span`
  flex: 1;
  font-size: 0.95rem;
  color: ${({ $completed, theme }) =>
    $completed ? theme.text.completed : theme.text.primary};
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  cursor: default;
  user-select: none;
`;

const EditInput = styled.input`
  flex: 1;
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.accent.primary};
  border-radius: 4px;
  background: ${({ theme }) => theme.bg.input};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.95rem;
`;

const DeleteButton = styled.button`
  padding: 6px 12px;
  background: ${({ theme }) => theme.accent.danger};
  color: #ffffff;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: background ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.accent.dangerHover};
  }
`;
