import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  padding: 20px;

  .div0 {
    display: flex;
    align-items: end;
    justify-content: end;
    display: flex;
    gap: 15px;
  }

  .section2{
display: flex;
flex-direction: row;
justify-content: space-between;
  }


  .MainButton {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: white;
    border: 1.5px solid #000000;
    box-shadow: 0 2px 4px rgba(15, 14, 14, 0.2); /* ظل خفيف */
    border-radius: 15px;
    padding: 10px 20px;
    color: #333;
     font-weight: 500;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .SecondaryButton {
    background-color: white;
    border: 1.5px solid #000000; /* حدود رمادية خفيفة */
    border-radius: 15px;
    padding: 10px 25px;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(15, 14, 14, 0.2); /* ظل خفيف */

    &:hover {
      border-color: #000;
    }
  }
`;
