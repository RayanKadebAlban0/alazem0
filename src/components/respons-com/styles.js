import styled from "styled-components";

export const Styles = styled.div`
padding: 15px;
 width: 100%;

  .card {
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 15px;
    padding: 12px;
    margin-bottom: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 8px;
    flex-direction: row;
  }

    .profile {
    display: flex;
    align-items: center;
    gap: 10px; 
    display: flex;
    /* flex-direction:column; */
  }

  /* تنسيق شكل وحجم الصورة الدائرية */
  .user-avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%; /* لجعلها دائرية تماماً */
    object-fit: cover;
    border: 1px solid #e2e8f0;
  }

  .username {
    font-weight: bold;
    color: #1e293b;
    font-size: 0.95rem;
  }

  .time {
    font-size: 0.8rem;
    color: #94a3b8;
  }

  .body {
    font-size: 0.9rem;
    color: #475569;
    margin-bottom: 10px;
  }

  .actions {
    display: flex;
    gap: 10px;
      justify-content: flex-end;

    button {
     display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      border: none;
      transition: background 0.2s;

      .icon {
        font-size: 0.8rem;
      }
    }

    .approvebtn {
    background-color: #e6f4ea;
      color: #137333;
      border: 1px solid #137333;
      &:hover { background-color: #d2e3d6; }
    }

    .rejectbtn {
    background-color: #fce8e6;
      color: #c5221f;
      border: 1px solid #c5221f;
      &:hover { background-color: #fad2cf; }
    }
    }
  }
`;
