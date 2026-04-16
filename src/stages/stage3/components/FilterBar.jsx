import styled from "styled-components";

// HINT: 필터 옵션 배열을 만들어 활용하면 편리합니다
// 예) [{ value: 'all', label: '전체' }, ...]
const FILTER_OPTIONS = [
  { value: "all", label: "전체" },
  { value: "active", label: "미완료" },
  { value: "completed", label: "완료" },
];

export default function FilterBar({ filter, onFilterChange }) {
  // TODO: 필터 옵션들을 버튼으로 렌더링하세요
  // HINT: 현재 선택된 필터와 비교하여 활성 상태를 표시하세요
  // HINT: FilterButton의 $active prop으로 활성 스타일을 적용할 수 있습니다

  return (
    <Container>
      {/* 여기에 필터 버튼들을 렌더링하세요 */}
      {FILTER_OPTIONS.map((option) => (
        <FilterButton
          key={option.value}
          $active={filter === option.value}
          onClick={() => onFilterChange(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </Container>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Container = styled.div`
  display: flex;
  gap: 4px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radius};
  font-size: 0.85rem;
  font-weight: 500;
  background: ${({ $active, theme }) =>
    $active ? theme.accent.primary : theme.bg.secondary};
  color: ${({ $active, theme }) =>
    $active ? "#ffffff" : theme.text.secondary};
  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.accent.primary : theme.border)};
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.accent.primaryHover : theme.bg.hover};
  }
`;
