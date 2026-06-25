import React, { useState } from 'react'
import { Styles } from './styles';

const ActivityType = () => {
const [myFilters, setMyFilters] = useState({
  date: "",
  activity: "",
  status: ""
});

    return (
      <Styles>
 <select 
      value={myFilters.activity} 
      onChange={(e) => setMyFilters({...myFilters, activity: e.target.value})}
    >
      <option value="all">مكتمل</option>
      <option value="login">غير مكتمل</option>
            </select>
            </Styles>
  )
}

export default ActivityType
