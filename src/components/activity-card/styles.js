import styled from "styled-components";

export const Card = styled.div`
  width: 320px;
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  height: 200px;
  background: ${(props) =>
    props.src
      ? `url(${props.src}) center/cover no-repeat`
      : "linear-gradient(135deg,#f3f7fb,#f3f7fb)"};
`;

export const CardBody = styled.div`
  padding: 14px;
  direction: rtl;
`;

export const Tag = styled.span`
  display: inline-block;
  background: #fff;
  border: 1px solid #000;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-bottom: 8px;
`;

export const CardTitle = styled.h4`
  margin: 6px 0;
  font-size: 18px;
`;

export const CardDesc = styled.p`
  font-size: 13px;
  color: #555;
  min-height: 36px;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;

  button {
    background: transparent;
    border: 1px solid #000;
    padding: 6px 10px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default Card;
