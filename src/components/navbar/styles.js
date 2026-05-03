import styled from "styled-components";

export const Styles = styled.div`


   .nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0px;
  height: 80px;
  background: rgb(39,100,172);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
  z-index: 1000;
  direction: rtl;
}

.brand-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
}
/* .LogoPhoto{
    border: 2px solid red;
} */
.logo {
  /* font-size: 24px; */
  font-weight: bold;
  color: white;
    font-size: clamp(18px, 2vw, 28px);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
   margin-right: 0;

}

.search-box {
  display: flex;
  align-items: center;
  /* gap: 10px; */
  background: white;
  padding: 8px 14px;
  border-radius: 10px;
}

.search-box input {
  border: none;
  outline: none;
  background: transparent;
}

.icon-btn {
  cursor: pointer;

}

.user-section {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
 
}
`;
