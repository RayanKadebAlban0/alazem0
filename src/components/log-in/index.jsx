import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom'
import { Styles } from './styles';
const LogIn = () => {
  return (
    <Styles>
      <div className='login'>

        <div className='form'>
          <h1> أهلا بكم!</h1>

          <h1>Sign Up</h1>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
            }}
          // onSubmit={async (values) => {
          //   await new Promise((r) => setTimeout(r, 500));
          //   alert(JSON.stringify(values, null, 2));
          // }}
          >
            <Form >

              <div className='email'>
                <div><label htmlFor="email" >   البريدالالكتروني   </label></div>

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
                  <Link to="/Home"> Submit </Link>
                </button>
              </div>

            </Form>
          </Formik>
        </div>

      </div>
    </Styles>
  )
}

export default LogIn
