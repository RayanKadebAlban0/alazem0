import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const EmptyCard = styled.div`
  border: 2px dashed #d0d0d0;
  border-radius: 12px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #666;

  .plus {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2px solid #bbb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-bottom: 8px;
  }
`;

export default Grid;
