import styled from "styled-components";

// HINT: 정렬 옵션 배열을 만들어 활용하면 편리합니다
// 예) [{ value: 'createdAt', label: '생성일자순' }, ...]
const SORTBY_OPTION = [
  { value: "createdAt", label: "생성일자순" },
  { value: "priority", label: "우선순위순" },
  { value: "title", label: "가나다순" },
];

export default function SortDropdown({ sortBy, onSortChange }) {
  // TODO: select 요소의 value와 onChange를 연결하세요
  // TODO: 정렬 옵션들을 option 태그로 렌더링하세요

  return (
    <Select value={sortBy} onChange={onSortChange}>
      {SORTBY_OPTION.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.bg.input};
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.85rem;
  cursor: pointer;
  transition: border-color ${({ theme }) => theme.transition};

  &:focus {
    border-color: ${({ theme }) => theme.accent.primary};
  }
`;
