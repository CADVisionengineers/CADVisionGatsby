import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"
export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: {} }
  }

  _handleSubmit = async e => {
    console.log("handle sub")
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    console.log("result", result)
    this.setState({ result: result.result })
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }
  render() {
    return this.state.result == "success" ? (
      <div><h2>Subscription Confirmed</h2>
      Your subscription to our list has been confirmed.
      
      Thank you for subscribing!</div>
    ) : this.state.result == "error" ? (
      <div>already subscribed to list CADVision Engineers.</div>
    ) : (
<>

<div className="single-footer-widget">

     <h3>Subscribe To Our NewsLetter</h3>

   
      <form 
       onSubmit={this._handleSubmit}>
           <div className="info1">
           <input type="email"
           id="outlined-email-input"
          name="EMAIL"
          placeholder="Your Email"
         

          
     
          onChange={this.handleChange}
        />
      


       <input type="submit" value="Submit"/>
       </div>
      </form>
      </div>
 </>
    
 
    )
  }
}