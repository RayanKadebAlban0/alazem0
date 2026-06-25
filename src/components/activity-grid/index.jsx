import React from 'react'
import ActivityCard from '../activity-card'
import { Grid, EmptyCard } from './styles'

const ActivityGrid = ({ items = [] }) => {
    return (
        <Grid>
            {items.map(item => (
                <ActivityCard key={item.id} item={item} />
            ))}
            <EmptyCard>
                <div className='plus'>+</div>
                <div>إضافة نشاط جديد</div>
            </EmptyCard>
        </Grid>
    )
}

export default ActivityGrid
