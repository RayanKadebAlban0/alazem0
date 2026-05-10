import React from 'react'
import { Styled } from './styles'
import AppTamplate from '../../components/app-tamplate/index';
import StatCard from "../../components/stat-card/index"
import Table from '../../components/table-test';


const Dashboard = () => {

  const stats = [
    { id: 1, title: "إجمالي المستخدمين", value: "60", unit: "مستخدم", trend: "+20 مستخدم", type: "increase" },
    { id: 2, title: "المبادرات النشطة", value: "10", unit: "مبادرات", trend: "-2 مبادرة", type: "decrease" },
    { id: 3, title: "النقاط الممنوحة", value: "50", unit: "نقطة", trend: "+30 نقطة", type: "increase" },
    { id: 4, title: "طلبات معلقة", value: "5", unit: "طلبات", trend: "+3 طلبات", type: "increase" },
  ];

  return (

    <AppTamplate isHaveFooter={false} pageTitle={"لوحة التحكم"}>
      <Styled>
        {/* شبكة البطاقات (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item) => (
            <StatCard key={item.id}>
              <StatCard.Title>{item.title}</StatCard.Title>
              <StatCard.Value value={item.value} unit={item.unit} />
              <StatCard.Trend value={item.trend} type={item.type} />
            </StatCard>
          ))}
        </div>

        {/* باقي محتوى الصفحة (الجدول والطلبات) سنضيفه لاحقاً */}
        <div className='table'>
          <Table />
          
        </div>
      </Styled>

    </AppTamplate>

  )
}

export default Dashboard
