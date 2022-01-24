import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

const Contact = () => {
  const WEBSITE_URL = 'https://businesso.vigilant-burnell.147-182-171-252.plesk.page';
  const FORM_ID = '3200'; //Form id that provides Contact Form 7

  const [token, setToken] = useState('') // store token
  const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
  const [messageSent, setMessageSent] = useState(false) // manage sent message state

  // this effect function authenticates our subcriber user to get a token
  useEffect(() => {
    axios({
      method: 'post',
      url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
      data: {
        username: 'Admin', // provide a user credential with subscriber role
        password: 'EDkS&sI$Rx!p&1o@bU$Q4IHY'
      },
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      setToken(response.data.token)
    }).catch(error => console.error( 'Error', error ))
  }, [])

  // use useFormik hook using object destructuring assignment to extract helpful methods
  const {
    handleChange,
    isSubmitting,
    values,
    handleSubmit,
  } = useFormik({
    initialValues: {
      CompanyName: '',
      FullName:'',
      EmailAdress: '',
      PhoneNumber:'',
      Query: '',
    },
    onSubmit: ({
      CompanyName,
      FullName,
      EmailAdress,
      PhoneNumber,
      Query
    }, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      // here we created a FormData field for each form field
      const bodyFormData = new FormData();
      bodyFormData.set('CompanyName', CompanyName);
      bodyFormData.set('FullName', FullName);
      bodyFormData.set('EmailAdress', EmailAdress);
      bodyFormData.set('PhoneNumber', PhoneNumber);
      bodyFormData.set('Query', Query);

      console.log(CompanyName)
      // here we sent
      axios({
        method: 'post',
        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
        data: bodyFormData,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      }).then(response => {
        // actions taken when submission goes OK
        resetForm()
        setSubmitting(false)
        setMessageSent(true)
        setIsSuccessMessage(true)
      }).catch(error => {
        // actions taken when submission goes wrong
      
        console.error('Error:', error);

      })
    },
  })

  useEffect(() => {
    // set timeout 3 seconds to remove error/success message.
    setTimeout(() => {
      // this will reset messageSent and isSuccessMessage state
      setMessageSent(false)
      setIsSuccessMessage(false)
    }, 6000);
    // this effect function will be dispatched when isSuccessMessage or messageSent changes its state
  }, [isSuccessMessage, messageSent])

  return (
    
       <div className="contact-form">
    <form onSubmit={handleSubmit}>
          <div className="row">
   
      <div className="col-lg-6 col-md-6">
      <div className="form-group">
          <label htmlFor="CompanyName">Company Name*</label>
          <input
            id="CompanyName"
            name="CompanyName"
            type="text"
            className="form-control" 
            onChange={handleChange}
            value={values.CompanyName}
            required
          />
        </div>
        </div>
        <div className="col-lg-6 col-md-6">
        <div className="form-group">
          <label htmlFor="FullName">Full Name*</label>
          <input
            id="FullName"
            name="FullName"
            type="text"
            className="form-control" 
            onChange={handleChange}
            value={values.FullName}
            required
          />
        </div>
        </div>
        <div className="col-lg-6 col-md-6">
        <div className="form-group">
          <label htmlFor="EmailAdress">Email Address*</label>
          <input
            id="EmailAdress"
            name="EmailAdress"
            type="email"
            className="form-control" 
            onChange={handleChange}
            value={values.EmailAdress}
            required
          />
        </div>
        </div>
        <div className="col-lg-6 col-md-6">
        <div className="form-group">
          <label htmlFor="PhoneNumber">Phone Number*</label>
         
          <input
            id="PhoneNumber"
            name="PhoneNumber"
            type="phone"
            className="form-control" 
            onChange={handleChange}
            value={values.PhoneNumber}
            required
          />
        </div>
        </div>
        <div className="col-lg-12 col-md-12">
        <div className="form-group">
          <label htmlFor="Query">Query*</label>
          <textarea
            id="Query"
            name="Query"
            type="text"
            className="form-control" 
            onChange={handleChange}
            value={values.Query}
            required
            rows="6"
          />
        </div>
        </div>
   <br></br>
  
        <div className="col-lg-12 col-md-12 ">
  <br></br>
        <button
          type="submit" className="default-btn"
          value="Send"
          disabled={isSubmitting}
        >
            <i className='bx bxs-paper-plane'></i> 
  {isSubmitting ? "Sending..." : "  Send Message"}
  
</button>
      </div>
      </div>
    </form>
    </div>
  )
}

export default Contact
