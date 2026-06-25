import React from 'react'
import { Styles } from "./styles";
import { useState, useEffect } from 'react';
import { mockSidebarData } from "../../mocks/mockSidebarData";
import RequestsSidebar from '../../components/requests-sidebar';

import AddIcon from '@mui/icons-material/Add';
import Calendar from '../../components/calendar';
import ActivityType from '../../components/activity-type';
import ActivityGrid from '../../components/activity-grid';
import { activities } from '../../mocks/activities';


const ActivityManag = () => {
    
    // const [activeView, setActiveView] = useState('add_activity'); 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [apiData, setApiData] = useState(null);
    useEffect(() => {
        // fetch('/api/initiative/requests')
        //   .then(res => res.json())
        //   .then(data => setApiData(data));


        setApiData(mockSidebarData);
    }, []);
    return (
        <Styles>
            <div className='div0'>
                <div className='SecondaryButton'>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded font-medium text-sm transition"
                    >
                        طلبات بانتظار الموافقة
                    </button>
                    {apiData && (
                        <RequestsSidebar
                            isOpen={isSidebarOpen}
                            onClose={() => setIsSidebarOpen(false)}
                            data={apiData}
                            setData={setApiData}
                        />
                    )}
                </div>
                <div className='SecondaryButton'> تسجيل حضور</div>
                <div className='MainButton'> إضافة نشاط جديد
                    <AddIcon />
                </div>
            </div>
            <div className='section2'>
                <div>
                    <h5>التاريخ</h5>
                    <Calendar />
                </div>
                <div>
                    <h5>نوع النشاط</h5>
                    <ActivityType />
                </div>
                <div>
                    <h5>الحالة</h5>

                </div>
            </div>
            <ActivityGrid items={activities} />
        </Styles>
    )
}

export default ActivityManag
