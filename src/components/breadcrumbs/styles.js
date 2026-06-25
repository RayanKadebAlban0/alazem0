import styled from 'styled-components';
export const Styles = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  direction: rtl; /* للتناسب مع لغة الموقع */
  font-size: 14px;
  color: #666;

  a {
    text-decoration: none;
    color: #555;
    &:hover { color: #000; }
  }

  span.separator {
    color: #999;
    font-weight: bold;
  }

  span.current {
    color: #000;
    font-weight: 600;
  }
`;