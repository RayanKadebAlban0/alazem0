import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Styles } from "./styles"
import { routs } from '../../router';

const Breadcrumbs = () => {
  const location = useLocation();
  
  // البحث عن المسار الحالي داخل مصفوفة routs لجلب العنوان
  const currentRoute = routs.find(route => route.path === location.pathname);

  // إذا كنا في الصفحة الرئيسية تماماً قد لا نحتاج لإظهار المسار، أو نظهره حسب الرغبة
  // if (location.pathname === '/Home' || location.pathname === '/') {
  //     return null; 
  // }

  return (
    <Styles>
    <div aria-label="breadcrumb">
      <Link to="/Home">الرئيسية</Link>
      
      {currentRoute && (
        <>
          <span className="separator"> > </span>
          <span className="current">{currentRoute.title}</span>
        </>
      )}
      </div>
      </Styles>
  );
};

export default Breadcrumbs;