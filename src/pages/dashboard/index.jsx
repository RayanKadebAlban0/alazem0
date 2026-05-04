import React from 'react'
import { Styled } from './styles'
import AppTamplate from '../../components/app-tamplate/index'
import Form from '../../components/form-com'
const Dashboard = () => {
  return (
    <Styled>
      <AppTamplate isHaveFooter={false} pageTitle={"DashBoard"}>
        <Form/>
      </AppTamplate>
    </Styled>
  )
}

export default Dashboard
