import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SortDropdown from "./components/SortDropdown";
import FilterBar from "./components/FilterBar";

// TODO: todo.json 데이터를 import 하세요
import initialData from "../../data/todo.json";

// TODO: useState, useMemo를 import 하세요
import { useMemo, useState } from "react";

// HINT: 우선순위 정렬을 위한 순서 매핑이 필요합니다
// 예) { high: 0, medium: 1, low: 2 }
const PRIORITY_MAP = {
  high: 0,
  medium: 1,
  low: 2,
};

export default function Stage2() {
  // TODO: todos 상태를 선언하세요
  const [todos, setTodos] = useState(initialData);

  // TODO: 정렬 기준(sortBy) 상태를 선언하세요 (기본값: 'createdAt')
  const [sortBy, setSortBy] = useState("createdAt");

  // TODO: 필터(filter) 상태를 선언하세요 (기본값: 'all')
  const [filter, setFilter] = useState("all");

  // TODO: 할 일 추가 함수를 만드세요 (Stage 1과 유사하지만 priority 파라미터 추가)
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

  // TODO: 할 일 완료/미완료 토글 함수를 만드세요
  const toggleTodoComplete = (targetId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== targetId) return todo;

        return { ...todo, completed: !todo.completed };
      }),
    );
  };

  // TODO: 할 일 삭제 함수를 만드세요
  const deleteTodo = (targetId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
  };

  // TODO: 할 일 이름 변경 함수를 만드세요
  const changeTodoTitle = (targetId, newTitle) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === targetId ? { ...todo, title: newTitle } : todo,
      ),
    );
  };

  // TODO: 필터링 + 정렬된 목록을 계산하세요
  // HINT: useMemo를 활용하면 성능 최적화에 도움이 됩니다
  // HINT: 필터 → 'all'이면 전체, 'active'이면 미완료, 'completed'이면 완료
  // HINT: 정렬 → 'createdAt'이면 날짜순, 'priority'이면 우선순위순, 'title'이면 가나다순
  // HINT: 한글 정렬에는 localeCompare를 활용하세요
  const filterdAndSortedList = useMemo(() => {
    const filterdTodos = todos.filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });

    return filterdTodos.sort((a, b) => {
      if (sortBy === "priority") {
        return PRIORITY_MAP[a.priority] - PRIORITY_MAP[b.priority];
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "createdAt") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
  }, [todos, sortBy, filter]);

  return (
    <Container>
      <Description>
        정렬 & 필터 — 우선순위 선택, 정렬 기준 변경, 상태별 필터
      </Description>
      {/* TODO: TodoForm에 onAdd를 전달하세요 */}
      <TodoForm onAdd={addNewTodo} />
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
        todos={filterdAndSortedList}
        onToggle={toggleTodoComplete}
        onDelete={deleteTodo}
        onRename={changeTodoTitle}
      />
    </Container>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const Container = styled.section``;

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.85rem;
  margin-bottom: 20px;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
`;
