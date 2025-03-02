import cu1 from "../../assets/images/Contact Us Icons/CU1.png"
import cu2 from "../../assets/images/Contact Us Icons/CU2.png"
import cu3 from "../../assets/images/Contact Us Icons/CU3.png"

import "./contact.css"

const Contact = () => {
    return <section style={{ paddingTop: "200px" }}>
        <div className="content-header-wrapper">
            <div className="content-header">Contact Us</div>
        </div>

        <div className="contact-details-cards">

            <div className="contact-item">
                <div className="contact-image-wrapper">
                    <img src={cu1} alt="Phone" className="icon" width={60} height={60} />
                </div>
                <div className="contact-content-wrapper">
                    <p>
                        White Architectures <br />
                        2787 Street, Fremont <br />
                        California <br />
                        94538
                    </p>
                </div>
            </div>

            <div className="contact-item">

                <div className="contact-image-wrapper">
                    <img src={cu2} alt="Email" className="icon" width={60} height={60} />
                </div>

                <div className="contact-content-wrapper">

                    <p>wagetintouch@whitearch.com</p>
                </div>
            </div>

            <div className="contact-item">

                <div className="contact-image-wrapper">
                    <img src={cu3} alt="Phone" className="icon" width={60} height={60} />
                </div>

                <div className="contact-content-wrapper">

                    <p>510-979-9360</p>
                </div>
            </div>
        </div>
    </section>
}

export default Contact;
