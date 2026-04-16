import styled from "styled-components";

export default function SearchBar({ searchTerm, onSearchChange }) {
  // TODO: Input의 value와 onChange를 연결하세요
  // HINT: onChange에서 e.target.value를 onSearchChange에 전달하세요

  return (
    <Input
      type="text"
      placeholder="할 일 검색..."
      // TODO: value와 onChange를 연결하세요
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Input = styled.input`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.bg.input};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.9rem;
  margin-bottom: 16px;
  transition: border-color ${({ theme }) => theme.transition};

  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent.primary};
  }
`;
