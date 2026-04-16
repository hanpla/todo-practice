import styled from "styled-components";

// TODO: useState를 import 하세요
import { useState } from "react";

export default function TodoForm({ onAdd }) {
  // TODO: 입력값(title)을 관리할 state를 선언하세요
  const [inputText, setInputText] = useState("");

  // TODO: 우선순위(priority)를 관리할 state를 선언하세요 (기본값: 'medium')
  const [priority, setPriority] = useState("medium");

  // TODO: 폼 제출 핸들러를 만드세요
  // HINT: onAdd 호출 시 title과 priority를 함께 전달하세요
  // HINT: 제출 후 입력값과 우선순위를 초기화하세요
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onAdd(inputText, priority);
    setInputText("");
  };

  return (
    <Form onSubmit={handleTodoSubmit}>
      {/* TODO: onSubmit 이벤트를 연결하세요 */}
      <InputRow>
        <Input
          type="text"
          placeholder="할 일을 입력하세요"
          // TODO: value와 onChange를 연결하세요
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <PrioritySelect
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">높음</option>
          <option value="medium">보통</option>
          <option value="low">낮음</option>
        </PrioritySelect>
        <AddButton type="submit">추가</AddButton>
      </InputRow>
    </Form>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Form = styled.form`
  margin-bottom: 20px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.bg.input};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.95rem;
  transition: border-color ${({ theme }) => theme.transition};

  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent.primary};
  }
`;

const PrioritySelect = styled.select`
  padding: 12px 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.bg.input};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.85rem;
  cursor: pointer;
`;

const AddButton = styled.button`
  padding: 12px 24px;
  background: ${({ theme }) => theme.accent.primary};
  color: #ffffff;
  border-radius: ${({ theme }) => theme.radius};
  font-size: 0.95rem;
  font-weight: 600;
  transition: background ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.accent.primaryHover};
  }
`;
