import React from 'react'
import { Card, CardImage, CardBody, CardTitle, CardDesc, CardFooter, Tag, Actions } from './styles'

const ActivityCard = ({ item }) => {
    return (
        <Card>
            <CardImage aria-hidden='true' src={item.image} />
            <CardBody>
                <Tag>{item.status}</Tag>
                <CardTitle>{item.title}</CardTitle>
                <CardDesc>{item.short}</CardDesc>
                <CardFooter>
                    <div>{item.date}</div>
                    <Actions>
                        <button>عرض التفاصيل</button>
                        <button>تعديل</button>
                    </Actions>
                </CardFooter>
            </CardBody>
        </Card>
    )
}

export default ActivityCard

