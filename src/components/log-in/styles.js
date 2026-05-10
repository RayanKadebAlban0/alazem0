import styled from "styled-components";

export const Styles = styled.div`
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    direction: rtl;
    height: 100%;
    max-width: 500px;
    padding: 20px;
    margin: 0 ;
  }
  h1 {
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5rem;
  }
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10 px;
    margin-top: 30px;
  }
  .email,
  .pass,
  .btn {
    text-align: right;
    margin: 20px;
    font-size: 1.1rem;
    width: 100%;

    label {
      font-weight: bold;
      color: #555;
      display: block;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      padding: 15px;
      border: 2px solid #e0e0e0;
      border-radius: 10px;
      box-sizing: border-box;
      outline: none;
      transition: all 0.3s ease;
      font-size: 1.1rem;

      &:focus {
        border-color: rgb(39, 100, 172); /* لون أزرق عند الضغط */
        box-shadow: 0 0 8px rgb(0, 123, 255, 0.2);
        outline: none;
      }
    }
  }
.forget{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
  .btn button {
    width: 100%;
    padding: 15px;
    background: rgb(39, 100, 172);
    font-size: 1.2rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
    

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
