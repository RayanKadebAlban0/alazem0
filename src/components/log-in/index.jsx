import React from 'react'
import { Formik, Field, Form } from 'formik';
import Home from "../../pages/home/index"
import { Link } from 'react-router-dom'
const LogIn = () => {
  return (
    <div className='login'>
      <h1> أهلا بكم!</h1>
      <div className='log'>


        <div>
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
            <Form className='form'>
              {/* <div>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Jane" />
              </div> */}

              {/* <div>
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Doe" />
              </div> */}

              <div>
                <label htmlFor="email">البريدالالكتروني</label>

                <Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                />
              </div>

              <div>
                <label htmlFor="password">كلمة المرور</label>

                <Field
                  id="password"
                  name="password"
                  placeholder="********"
                  type="password"
                />
              </div>

              <div>
                <button type="submit" className='btn' >
                  <Link to ="/Home"> Submit </Link>
                </button>
              </div>
            </Form>
          </Formik>
        </div>

      </div>
    </div>
  )
}

export default LogIn
