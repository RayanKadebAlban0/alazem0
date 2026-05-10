import styled from "styled-components";

export const Styles = styled.div`
padding: 30px;

.photo { 

    }

.table {
 /* background-color: white; */
  }

  /* هذا الكود يضمن اختفاء أي خطوط افتراضية قد تفرضها المكتبة */
  .rdt_TableRow {
    border-bottom: none !important;
  }

  /* تخصيص Checkbox  */
     input[type="checkbox"] {
    transform: scale(1.2);
    accent-color: #4318ff; /* لون البراند الخاص بك */
  }
`;
