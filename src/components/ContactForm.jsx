import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false,
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'This field is required';
        if (!formData.lastName) newErrors.lastName = 'This field is required';
        if (!formData.email) newErrors.email = 'Please enter a valid email address';
        if (!formData.queryType) newErrors.queryType = 'Please select a query type';
        if (!formData.message) newErrors.message = 'This field is required';
        if (!formData.consent) newErrors.consent = 'To submit this form, please consent to being contacted';

        console.log("Validation Errors:", newErrors); // Debugging
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            alert(
                'Message Sent!\n\nThanks for completing the form. We\'ll be in touch soon!'
            );

            // Form reset
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                queryType: '',
                message: '',
                consent: false,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>

            <div>
    <div className="form-row">
        <div className="form-group">
            <label htmlFor="firstName">First Name <span>*</span></label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleInputChange}
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name <span>*</span></label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleInputChange}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
    </div>
</div>
            <label htmlFor="email" className="formMail">Email Address <span>*</span></label>
            <div className="mailField">
                <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            {errors.email && <div className="error">{errors.email}</div>}
            <label className="queryArea">Query Type <span>*</span></label>
            <div className="RadioStyle">
                <div className="radio-container">
                    <input
                        type="radio"
                        id="generalEnquiry"
                        name="queryType"
                        value="General Enquiry"
                        checked={formData.queryType === 'General Enquiry'}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="generalEnquiry">General Enquiry</label>
                </div>
                <div className="radio-container">
                    <input
                        type="radio"
                        id="supportRequest"
                        name="queryType"
                        value="Support Request"
                        checked={formData.queryType === 'Support Request'}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="supportRequest">Support Request</label>
                </div>
            </div>
            {errors.queryType && <div className="error">{errors.queryType}</div>}

            <div>
                <label className="messageArea">Message <span>*</span></label>
                <div className="message-container">
                    <textarea
                        id="message"
                        name="message"
                        autoComplete="on"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                     {errors.message && <div className="error">{errors.message}</div>}
                </div>
               
            </div>

            <div>
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                />
                <label htmlFor="consent">I consent to being contacted by the team <span>*</span></label>
            </div>
            {errors.consent && <div className="error">{errors.consent}</div>}

            <div className="button-container">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default ContactForm;
