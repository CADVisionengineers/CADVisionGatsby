import React from 'react';
import * as  Yup from 'yup';
import axios from 'axios';
import { Formik } from 'formik';

const URL = 'http://67.207.81.18';
const USER = 'Admin';
const PASSWORD = 'Vinay#215';
const TOKEN = typeof window !== 'undefined' && window.btoa(`${USER}:${PASSWORD}`); // Convert Base64
const CF7_ID = '3200';

const formSchema = Yup.object().shape({
  formName: Yup.string().required('Required'),
  formEmail: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

function convertJsontoUrlencoded(obj: any) {
  let str = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }
  return str.join('&');
}

const contact7Form = () => {
  const [state, setState] = React.useState(null || '');

  return (
    <>
      <Formik
        initialValues={{
          formSubject: '',
          formName: '',
          formEmail: '',
          formMessage: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting }) => {
          const submitData = async () => {
            try {
              const result = await axios({
                url: `${URL}/contact-form-7/v1/contact-forms/${CF7_ID}/feedback`,
                headers: {
                  Authorization: `Basic ${TOKEN}`,
                  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                },
                method: 'POST',
                data: convertJsontoUrlencoded(values),
              });
              setState(result.data.message);
              setSubmitting(false);
            } catch (error) {
              setState('Error');
            }
          };
          submitData();
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">
                Subject
                <input
                  type="text"
                  name="formSubject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.formSubject}
                />
                {errors.formSubject && touched.formSubject ? <div>{errors.formSubject}</div> : null}
              </label>
            </div>
            <div>
              <label htmlFor="">
                Name *
                <input
                  type="text"
                  name="formName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.formName}
                />
                {errors.formName && touched.formName ? <div>{errors.formName}</div> : null}
              </label>
            </div>
            <div>
              <label htmlFor="">
                Email *
                <input
                  type="email"
                  name="formEmail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.formEmail}
                />
                {errors.formEmail && touched.formEmail ? <div>{errors.formEmail}</div> : null}
              </label>
            </div>
            <div>
              <label htmlFor="">
                Message
                <input
                  type="text"
                  name="formMessage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.formMessage}
                />
                {errors.formMessage && touched.formMessage ? <div>{errors.formMessage}</div> : null}
              </label>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>

      {state ? <p>{state}</p> : null}
    </>
  );
};

export default contact7Form;