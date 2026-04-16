import { useState } from "react";
import styled from "styled-components";

// TODO: useState를 import 하세요

export default function TodoForm({ onAdd }) {
  // TODO: 입력값을 관리할 state를 선언하세요
  const [inputText, setInputText] = useState("");

  // TODO: 폼 제출 핸들러를 만드세요
  // HINT: 빈 문자열은 추가하지 않도록 처리하세요
  // HINT: 추가 후 입력창을 비워주세요
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onAdd(inputText);
    setInputText("");
  };

  return (
    <Form onSubmit={handleTodoSubmit}>
      {/* TODO: onSubmit 이벤트를 연결하세요 */}
      <Input
        type="text"
        placeholder="할 일을 입력하세요"
        // TODO: value와 onChange를 연결하세요
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <AddButton type="submit">추가</AddButton>
    </Form>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
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
