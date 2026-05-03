import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-photo {
    background-color: #f8fafc;
    width: clamp(68px, 3.5vw, 160px);
    height: auto;
    display: block;
    object-fit: contain;
    border-radius: 10px;
  }
`;
