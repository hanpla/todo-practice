# Stage 2 힌트 — 정렬 & 필터

> 코드 내 `TODO` 주석을 먼저 확인하세요. 아래 힌트는 주석만으로 해결이 어려울 때 참고하세요.

---

## 1. 우선순위 선택 (TodoForm.jsx)
- `<select>`와 `<option>`을 사용하여 드롭다운을 만들 수 있습니다.
- 선택된 값을 별도의 state로 관리하세요.
- 폼 제출 시 title과 함께 priority도 부모 컴포넌트에 전달하세요.

## 2. 필터링 (FilterBar.jsx → Stage2.jsx)
- 현재 필터 상태를 state로 관리하세요 (예: `'all'`, `'active'`, `'completed'`).
- 배열 메서드 중 조건에 맞는 항목만 남기는 메서드를 활용하세요.
- `todo.completed`가 `true`면 완료, `false`면 미완료입니다.
- 활성 버튼 스타일은 styled-components의 `$active` prop으로 적용됩니다.

## 3. 정렬 (SortDropdown.jsx → Stage2.jsx)
- 정렬 기준을 state로 관리하세요.
- 배열의 `sort()` 메서드를 사용합니다. 단, 원본 배열을 직접 수정하면 안 됩니다!
  - 먼저 `[...배열]`로 복사 후 정렬하세요.
- 날짜 비교: `new Date(a) - new Date(b)`
- 우선순위 비교: 숫자 매핑 객체를 만들어 비교하세요 (예: high=0, medium=1, low=2)
- 한글 정렬: `a.localeCompare(b, 'ko')`

## 4. 성능 최적화
- 필터링과 정렬은 `todos`, `filter`, `sortBy` 중 하나라도 바뀔 때만 다시 계산하면 됩니다.
- 이런 경우에 사용하는 React Hook이 있습니다. 의존성 배열을 활용하는 Hook을 찾아보세요.

## 5. 우선순위 배지 (TodoItem.jsx)
- 우선순위 값(`'high'`, `'medium'`, `'low'`)을 한글 레이블로 변환하여 표시하세요.
- styled-components에서 `$priority` prop을 통해 색상이 자동으로 적용됩니다.

---

> 💡 검색 키워드: `React useMemo`, `Array sort`, `localeCompare`, `조건부 필터링`
