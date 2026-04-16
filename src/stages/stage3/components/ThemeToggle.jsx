import styled from "styled-components";

// TODO: useThemeContext를 import 하세요
import { useThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  // TODO: useThemeContext에서 isDark, toggleTheme을 가져오세요
  const { isDark, toggleTheme } = useThemeContext();

  // TODO: 버튼 클릭 시 toggleTheme을 호출하세요
  // TODO: isDark 상태에 따라 버튼 텍스트를 변경하세요
  // HINT: 다크모드일 때 '☀️ 라이트 모드', 라이트모드일 때 '🌙 다크 모드'

  return (
    <ToggleButton onClick={toggleTheme}>
      {isDark ? "☀️ 라이트 모드" : "🌙 다크 모드"}
    </ToggleButton>
  );
}

// ===== 아래는 스타일 코드입니다. 수정하지 않아도 됩니다. =====
const ToggleButton = styled.button`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  border: 1px solid ${({ theme }) => theme.border};
  font-size: 0.85rem;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.bg.hover};
  }
`;
