import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom'
import { Styles } from './styles';

const LogIn = () => {
  const handleSubmit = (values) => {
    // Handle form submission, e.g., send data to the server
    console.log(values);
  }
  return (
    <Styles>
      <div className='login'>

        <div className='form'>
          <h1> مؤسسة العزم</h1>

          <h3>مرحباً بعودتك!</h3>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
            }}
            onSubmit={handleSubmit}
          >
            <Form >

              <div className='email'>
                <div><label htmlFor="email" >   اسم المستخدم   </label></div>

                <div><Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                /></div>
              </div>

              <div className='pass'>
                <div><label htmlFor="password">كلمة المرور</label></div>
                <div>
                  <Field
                    id="password"
                    name="password"
                    placeholder="********"
                    type="password"
                  />
                </div></div>
              <div className='btn'>
                <button type="submit" >
                  <Link to="/Home"> تسجيل الدخول </Link>
                </button>
              </div>
                            <div className='forget'>نسيت كلمة المرور؟</div>


            </Form>
          </Formik>
        </div>

      </div>
    </Styles>
  )
}

export default LogIn
