import styled from "styled-components";

export const Styles = styled.div`
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout-body {
  display: flex;
  flex: 1;
  direction: rtl; 
  /* min-height: 100vh; */
    padding-top: 80px;
}

.main-content{
  display: flex;
    flex-direction: column;
  flex: 1;
  overflow-y: auto;
  background-color: #ebeef1;
  min-height: 100vh;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* margin-right: ${(props) => (props.isExpanded ? "250px" : "80px")} */
};


.out-let{
  flex: 1;
  padding: 20px;
    /* height: 100%; */
}
`;
