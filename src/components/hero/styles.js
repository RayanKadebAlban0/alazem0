import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .logo-photo {
    width: 100%; /* حجم الصورة بالنسبة للحاوية */
    max-width: 600px; /* لا تكبر أكثر من هيك */
    height: auto;
    object-fit: contain; /* تحافظ على أبعادها بدون قص */
    border-radius: 20px;
    /* إضافة ظل خفيف ليعطي عمق */
    box-shadow: 0 50px 0px rgba(0,0,0,0.1); 
  }
`;