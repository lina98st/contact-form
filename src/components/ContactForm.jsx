import React, { useState } from 'react';

function ContactForm() {
    return (
<form>
    <h2>Contact Us</h2>

    <div>
    <span className="form-row">
        <label htmlFor="firstName">First Name <span>*</span></label>
        <label htmlFor="lastName">Last Name <span>*</span></label>
    </span>
    <span className="form-row">
        <input type="text" id="firstName" name="firstName" autoComplete="given-name"  required />
        <input type="text" id="lastName" name="lastName" autoComplete="family-name" required />
    </span>
</div>

    <label htmlFor="email" className="formMail">Email Address <span>*</span></label>
    <div className="mailField">
        <input type="email" id="email" name="email" autoComplete="email" required />
    </div>


    <label className="queryArea">Query Type <span>*</span></label> 
    <div className="RadioStyle">
        <div className="radio-container">
            <input type="radio" id="generalEnquiry" name="queryType" value="General Enquiry" required />
            <label htmlFor="generalEnquiry">General Enquiry</label>
        </div>
        <div className="radio-container">
            <input type="radio" id="supportRequest" name="queryType" value="Support Request" required />
            <label htmlFor="supportRequest">Support Request</label>
        </div>
</div>


    <div>
        <label className="messageArea">Message <span>*</span></label>
        <div className="message-container">
            <label htmlFor="message" className="messageField"></label>
            <textarea id="message" name="message" autoComplete="on" required></textarea>
        </div>
    </div>

    <div>
        <input type="checkbox" id="consent" name="consent" required />
        <label htmlFor="consent">I consent to being contacted by the team <span>*</span></label>
    </div>

    <div className="button-container">
    <button type="submit">Submit</button>
</div>

</form>

    );
}

export default ContactForm; 