import React from 'react'
import { Styled } from './styles'
import AppTamplate from '../../components/app-tamplate/index';
import StatCard from "../../components/stat-card/index"
import Table from '../../components/table-test';
import Respons from '../../components/respons-com';
// import { useLocation } from 'react-router-dom';
// import { routs } from '../../router';


import face from "../../assets/images/face.jpg";


const Dashboard = () => {
  //  const location = useLocation();
  // const currentRoute = routs.find(route => route.path === location.pathname);
  // للجدول يلي ع اليمين
  const stats = [
    { id: 1, title: "إجمالي المستخدمين", value: "60", unit: "مستخدم", trend: "+20 مستخدم", type: "increase" },
    { id: 2, title: "المبادرات النشطة", value: "10", unit: "مبادرات", trend: "-2 مبادرة", type: "decrease" },
    { id: 3, title: "النقاط الممنوحة", value: "50", unit: "نقطة", trend: "+30 نقطة", type: "increase" },
    { id: 4, title: "طلبات معلقة", value: "5", unit: "طلبات", trend: "+3 طلبات", type: "increase" },
  ];
  // لجدول الطلبات
  const pendingRequests = [
    { id: 1, userName: "محمد أحمد", userImage: face, time: "25 كانون التاني", details: "ساعات مقدمة:5ساعات" },
    { id: 2, userName: "سارة ", userImage: face, time: "25كانون التاني", details: "طلب تدريب: مهارات القيادة" },
    { id: 3, userName: "خالد العلي", userImage: face, time: "يوم أمس", details: "طلب صلاحية مسؤول نظام إضافي" },
  ];

  return (

    <AppTamplate isHaveFooter={false} pageTitle={"لوحة التحكم"}>
      <Styled>
        {/* <h1>{currentRoute.title}</h1> */}
        <div className='stats-grid'>
          <div className="grid">
            {stats.map((item) => (
              <StatCard key={item.id}>
                <StatCard.Title>{item.title}</StatCard.Title>
                <StatCard.Value value={item.value} unit={item.unit} />
                <StatCard.Trend value={item.trend} type={item.type} />
              </StatCard>
            ))}
          </div>
        </div>
        {/* باقي محتوى الصفحة (الجدول والطلبات) سنضيفه لاحقاً */}
        <h2>آخر تحديثات المستخدمين:</h2>
        <div className='section2'>
          <div className='table'>
            <Table />
          </div>
          <div className='Respons'>

            <h3>طلبات معلقة:</h3>
            <div> إجمالي الطلبات المعلقة:</div>
            {pendingRequests.map((req) => (
              <Respons key={req.id} request={req} />

            ))}
          </div>
        </div>
      </Styled>

    </AppTamplate>

  )
}

export default Dashboard
