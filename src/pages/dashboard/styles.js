import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 20px;
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 أعمدة للشاشات الكبيرة */
    gap: 20px;
    width: 100%;
  }
  .grid {
    display: contents;
  }

  .section2 {
    display: flex;
    flex-direction: row;
    gap: 100px;
    .Respons {
    padding: 10px;
      border: 1px solid #19191a;
      max-width: 400px;
      width: 100%;
      border-radius: 10px;
      height: 350px;
      gap: 20px;
      width: 100%;
      flex-direction: column;
        overflow-y: auto; 
        overflow-x: hidden; 
        
    }
    .table {
      width: 100%;
      max-width: 600px;
      border-radius: 10px;
      overflow-x: auto;
    }
  }


 .Respons{ &::-webkit-scrollbar {
    width: 8px; /* شريط نحيف */
  }

  /* 2. خلفية المجرى الخاص بالشريط */
  &::-webkit-scrollbar-track {
    background: #f1f5f9; 
    border-radius: 10px;
  }

  /* 3. الجزء المتحرك (المقبض) باللون الأزرق المتناسق مع الهوية */
  &::-webkit-scrollbar-thumb {
    background: #1e40af; /* درجة زرقاء متناسقة مع القائمة الجانبية */
    border-radius: 10px;
  }

  /* 4. تغيير لون المقبض عند مرور الماوس فوقه */
  &::-webkit-scrollbar-thumb:hover {
    background: #1d4ed8; 
  }
 }
  @media (max-width: 1024px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 700px) {
    padding: 0;
    .stats-grid {
      gap: 15px;
      grid-template-columns: 1fr;
    }
    .table {
      min-width: 400px;
    }
  }
`;
