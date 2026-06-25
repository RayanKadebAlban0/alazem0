import React from "react";
import DataTable from "react-data-table-component";
import { Styles } from "./styles";
const columns = [
  {
    name: "المستخدم",
       // sortable: true,  من أجل سهم التكملة
  // selector: (row) => row.name,
    cell: (row) => (
    
      <div style={{ display: 'flex', alignItems: 'center', gap: '0px', flexDirection: 'row', justifyContent:'space-between'}}>
               <span style={{ fontWeight: '500', color: '#333', }}>{row.name}</span>
        <img 
          src={row.image || 'https://via.placeholder.com/35'} 
          alt="avatar" 
          style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} 
        />
      
      </div>
      
    ),
  
     },

{
  name: "النشاط",
    selector: (row) => row.activation,
    grow: 2,
  },
{
  name: "التاريخ",
    selector: (row) => row.date,
  },

{
  name: "الحالة",
    selector: (row) => row.state,
      cell: (row) => (
        <span style={{
          backgroundColor: row.state === 'نشط' ? '#e1fef0' : '#fff5f5',
          color: row.state === 'نشط' ? '#27ae60' : '#1b35ca',
          padding: '5px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {row.state || 'مكتمل'}
        </span>

      ),
  },
];
const data = [
  {
    id: 1,
    name: "rayan",
    activation: "22",
    date: "منذ ساعتين",
    state: "مكتمل",
  },
  {
    id: 2,
    name: "joury",
    activation: "22",
    date: "منذ 5 ساعات",
    state: "نشط",
  },
  {
    id: 1,
    name: "rayan",
    activation: "22",
    date: "يوم أمس",
  },
  {
    id: 2,
    name: "joury",
    activation: "22",
    date: "يوم أمس",

  },
  {
    id: 1,
    name: "rayan",
    activation: "22",
    date: "يوم أمس",
    state: "نشط",


  },
  {
    id: 2,
    name: "joury",
    activation: "22",
    date: "يوم أمس",

  },
  {
    id: 1,
    name: "rayan",
    activation: "22",
    date: "يوم أمس",

  },
  {
    id: 2,
    name: "joury",
    activation: "22",
    date: "يوم أمس",

  },
  {
    id: 1,
    name: "rayan",
    activation: "22",
    date: "يوم أمس",

  },
  {
    id: 2,
    name: "joury",
    activation: "22",
    date: "يوم أمس",

  },
  {
    id: 1,
    name: "rayan",
    activation: "22",
    date: "يوم أمس",

  },
  {
    id: 2,
    name: "joury",
    activation: "22",
    date: "يوم أمس",

  },
];

// custom style  للجدول
const customStyles = {
  table: {
    style: {
      border: '1px solid #0a0a0a', // هذا هو الإطار الخارجي للجدول
      borderRadius: '12px',       // لجعل زوايا الإطار دائرية مثل الصورة
      overflow: 'hidden',
      
    },
  },
  header: {
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
      paddingRight: '20px', // لأن الواجهة عربية
    },
  },
  headRow: {
    style: {
      backgroundColor: '#f8f9fa', // لون خلفية الهيدر
      borderBottom: '0 solid #e0e0e0',
    },
  },
  headCells: {
    style: {
      fontSize: '15px',
      fontWeight: 'bold',
      color: '#2d3436',
      justifyContent: 'right', // محاذاة النص لليمين (RTL)
    },
  },
  rows: {
    style: {
          fontSize: '14px',
      fontWeight: 400,
      minHeight: '50px',
      color: '#636e72',
      borderBottomStyle: 'none !important',
      borderBottomWidth: '0px !important',
      '&:not(:last-of-type)': {
        borderBottom: 'none', // التأكيد على إزالة الخطوط
      },
      '&:hover': {
        backgroundColor: '#f1f2f6', // تأثير عند تمرير الماوس
        cursor: 'pointer',
        transition: '0.3s',
      },
    },
  },
  cells: {
    style: {
      whiteSpace: 'nowrap',
      minWidth: '200px',
      justifyContent: 'right', // محاذاة محتوى الخلايا لليمين
    },
  },
  pagination: {
    style: {
      borderTopColor: '#eee',
      borderTopWidth: '1px',
    },
  },
};


const Table = () => {
  return (
    <Styles>
      <div className="table">
        <DataTable
          // title="عرض السجل كامل"
          columns={columns}
          data={data}
          pagination
          selectableRows
          customStyles={customStyles} // ربط الستايلات
          direction="rtl"            // دعم العربية بشكل صحيح
          paginationComponentOptions={{
            rowsPerPageText: 'صفوف في الصفحة:',
            rangeSeparatorText: 'من',
            selectAllRowsItem: true,
            selectAllRowsItemText: 'الكل',
          }}
        />
      </div>
    </Styles>
  );
};

export default Table;
