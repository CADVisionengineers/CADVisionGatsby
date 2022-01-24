import React from 'react'
import mail from "../../src/assets/images/mail-icon-n.png"

export default function FloatingContact() {
    return (
        <>
<div className="contact-cus-btn">
  <div className="zoho-form-button">
    <span>
      <img src={mail} width="40px" height="40px" alt="Contactus" />Contact Us</span>
  </div>
 
<div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm" style={{backgroundColor: 'white', color: 'black', maxWidth: 400}}>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
  
  
  
<iframe src='https://businesso.vigilant-burnell.147-182-171-252.plesk.page/contactus' frameBorder='0'  width='100%' height='650' allowtransparency='true'/>
</div>

 </div>
      </>           
 );
}
