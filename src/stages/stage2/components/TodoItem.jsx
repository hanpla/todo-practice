import styled from "styled-components";

// TODO: useState를 import 하세요
import { useState } from "react";

const PRIORITY_LABELS = {
  high: "높음",
  medium: "보통",
  low: "낮음",
};

export default function TodoItem({ todo, onToggle, onDelete, onRename }) {
  // TODO: 수정 모드 상태(isEditing)와 수정 텍스트(editValue) state를 선언하세요
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  // TODO: 더블클릭 시 수정 모드로 전환하는 함수를 만드세요
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // TODO: 키보드 이벤트 핸들러를 만드세요 (Enter: 확정, Escape: 취소)
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

  // TODO: blur 이벤트 핸들러를 만드세요
  const handleEditBlur = () => {
    onRename(todo.id, editValue);
    setIsEditing(false);
  };

  return (
    <Container>
      {/* TODO: 체크박스를 렌더링하세요 */}
      <Checkbox
        type="checkbox"
        onChange={() => onToggle(todo.id)}
        checked={todo.completed}
      />

      {/* TODO: 우선순위 배지를 렌더링하세요 */}
      {/* HINT: PriorityBadge 컴포넌트에 $priority prop을 전달하세요 */}
      <PriorityBadge $priority={todo.priority}>
        {PRIORITY_LABELS[todo.priority]}
      </PriorityBadge>

      {/* TODO: 수정 모드에 따라 EditInput 또는 Title을 렌더링하세요 */}
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

const PriorityBadge = styled.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #ffffff;
  background: ${({ $priority, theme }) => theme.priority[$priority]};
  white-space: nowrap;
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
