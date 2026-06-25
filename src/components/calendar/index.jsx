import React, { useState } from 'react'
import { Styles } from './styles';
const Calender = () => {
   
    const [myFilters, setMyFilters] = useState({
        date: "هذا الشهر",
        activity: "الكل",
        status: "مكتمل"
    });

    return (
        <Styles>
            <div >

                <select className='list1'
                    value={myFilters.date}
                    onChange={(e) => setMyFilters({ ...myFilters, date: e.target.value })}
                >
                    <option value="this_month">هذا الشهر</option>
                    <option value="last_month">الشهر الماضي</option>
                </select>
            </div>
        </Styles>
    )
}

export default Calender
