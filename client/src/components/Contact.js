import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendMail = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm('service_vwvy6rx', 'template_ufcimis', e.target, 'user_GV6Gj19hil0Fd7h57Cgt8');
            window.alert('Message has been sent. Thank you!! \nFor forward information please check your email once.'); 
        } catch (error) {
            window.alert(error);
            console.log(error);
        }
    } 

    return (
        <>
            <div className="contact-main">
                <div className="container">
                    <div className="contactUs">Contact us</div><br />
                    <form onSubmit={sendMail}>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <input
                                    className="contact-data-div"
                                    type="name"
                                    name="name"
                                    // value={udta.name}
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <input
                                    className="contact-data-div"
                                    type="email"
                                    name="user_email"
                                    // value={udta.email}
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <input
                                    className="contact-data-div"
                                    type="phone"
                                    name="phone"
                                    // value={udta.phone}
                                    placeholder="Your mobile number"
                                />
                            </div>
                        </div><br /><br /><br />
                        <textarea
                            className="contact-message"
                            type="text"
                            name="message"
                            placeholder="Message"
                        ></textarea><br /><br />
                        <input type="submit" value="Send Message" style={{ marginLeft: "10%" }} className="btn btn-outline-primary" />
                    </form>
                </div>
            </div>
            <br /><br />
        </>
    )
}

export default Contact
