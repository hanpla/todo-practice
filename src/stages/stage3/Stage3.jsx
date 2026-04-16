import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SortDropdown from "./components/SortDropdown";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";

// TODO: useState, useMemo를 import 하세요
import { useState, useMemo } from "react";

// TODO: ThemeProvider를 styled-components에서 import 하세요
// TODO: lightTheme, darkTheme를 import 하세요
// TODO: GlobalStyles를 import 하세요
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";

// TODO: useLocalStorage 커스텀 훅을 import 하세요
// TODO: ThemeContextProvider, useThemeContext를 import 하세요
import useLocalStorage from "./hooks/useLocalStorage";
import { ThemeContextProvider, useThemeContext } from "./context/ThemeContext";

// TODO: todo.json 데이터를 import 하세요
import initialData from "../../data/todo.json";

// HINT: Stage 3는 두 개의 컴포넌트로 구성됩니다
// 1. Stage3 (외부) — ThemeContextProvider로 감싸는 역할
// 2. Stage3Inner (내부) — 실제 로직과 UI를 담당

const PRIORITY_MAP = {
  high: 0,
  medium: 1,
  low: 2,
};

function Stage3Inner() {
  // TODO: useThemeContext에서 isDark 값을 가져오세요
  const { isDark } = useThemeContext();

  // TODO: useLocalStorage 훅으로 todos 상태를 관리하세요
  // HINT: key는 'todo-list', 초기값은 todo.json 데이터
  const [todos, setTodos] = useLocalStorage("todo-list", initialData);

  // TODO: sortBy, filter, searchTerm 상태를 선언하세요
  const [sortBy, setSortBy] = useState("createdAt");
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // TODO: 할 일 추가 함수를 만드세요 (priority 포함)
  const addNewTodo = (title, priority) => {
    const createdAt = new Date().toISOString();

    const newTodo = {
      id: createdAt,
      title,
      completed: false,
      priority: priority,
      createdAt,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // TODO: 할 일 토글, 삭제, 이름 변경 함수를 만드세요
  const toggleTodoComplete = (targetId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== targetId) return todo;

        return { ...todo, completed: !todo.completed };
      }),
    );
  };

  const deleteTodo = (targetId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
  };

  // TODO: 검색 + 필터 + 정렬된 목록을 계산하세요
  // HINT: useMemo를 사용하세요
  // HINT: 검색 → 필터 → 정렬 순서로 적용하세요
  const searchFilteredSortedList = useMemo(() => {
    return todos
      .filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "priority") {
          return PRIORITY_MAP[a.priority] - PRIORITY_MAP[b.priority];
        }
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  }, [todos, sortBy, filter, searchTerm]);

  const changeTodoTitle = (targetId, newTitle) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId ? { ...todo, title: newTitle } : todo,
      ),
    );
  };

  return (
    // TODO: ThemeProvider로 감싸고 isDark에 따라 theme을 전환하세요
    // TODO: GlobalStyles를 포함하세요
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Container>
        <TopBar>
          <Description>
            영속성 + 다크모드 + 검색 — localStorage, 테마 전환, 실시간 검색
          </Description>
          {/* TODO: ThemeToggle을 렌더링하세요 */}
          <ThemeToggle />
        </TopBar>
        {/* TODO: TodoForm에 onAdd를 전달하세요 */}
        {/* TODO: SearchBar에 searchTerm과 onSearchChange를 전달하세요 */}
        <TodoForm onAdd={addNewTodo} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <Toolbar>
          {/* TODO: FilterBar와 SortDropdown에 필요한 props를 전달하세요 */}
          <FilterBar filter={filter} onFilterChange={setFilter} />
          <SortDropdown
            sortBy={sortBy}
            onSortChange={(e) => setSortBy(e.target.value)}
          />
        </Toolbar>
        {/* TODO: TodoList에 필터링+정렬된 목록과 핸들러들을 전달하세요 */}
        <TodoList
          todos={searchFilteredSortedList}
          onToggle={toggleTodoComplete}
          onDelete={deleteTodo}
          onRename={changeTodoTitle}
        />
      </Container>
    </ThemeProvider>
  );
}

export default function Stage3() {
  // TODO: ThemeContextProvider로 Stage3Inner를 감싸서 반환하세요
  return (
    <ThemeContextProvider>
      <Stage3Inner />
    </ThemeContextProvider>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Container = styled.section``;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.85rem;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
`;
