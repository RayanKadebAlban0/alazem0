import styled from "styled-components";

export const Styles = styled.div`
  .layout-container {
    display: flex;
    flex-direction: row-reverse; /* ليدعم التصميم العربي RTL */
    min-height: 100vh;
    width: 100%;
    position: relative;
    padding-top: 85px; /* مسافة للـ Navbar العلوي */
  }

  
  .content-wrapper {
    flex: 1;
    padding: 25px;
    background-color: #faf8f8;
  }

`;