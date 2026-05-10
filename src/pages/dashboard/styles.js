import styled from "styled-components";

export const Styled = styled.div`



.stats-grid {
    display: flex;
    grid-template-columns: repeat(4, 1fr); /* 4 أعمدة متساوية */
    gap: 20px; /* مسافة بين البطاقات */
    padding: 20px;
    direction: rtl; /* لضمان الترتيب من اليمين لليسار */
}
.table{
    width: 500px;
    border-color: black;
    border-radius: 10px;
    
}

/* للموبايل: نجعلها عمود واحد */
@media (max-width: 1024px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 600px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
}


`;