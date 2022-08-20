import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";




const Footer = () => {

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for subscribing!')
    }
    

    return (
        <div className="footer__wrapper">

            <div className="footer__inner_wrapper">
            
                <h1>Thang University</h1>

                <div className="footer__links1">

                    <section className="footer__links1_left">
                        <h2>Careers</h2>
                        <h2>Student Center</h2>
                        <h2>Financial Aid Office</h2>
                        <h2>Diversity Programs</h2>
                        <h2>Academic Research</h2>
                        <h2>Student Housing Programs</h2>
                    </section>
                    
                    <section className="footer__links1_right">
                    <form id='email-sub-form' method="post" onSubmit={handleEmailSubmit}>

                        <label htmlFor="email-sub">Subscribe to the Thang University news</label>
                        <div>
                        <input type='email' name="email-sub" size={30} required />
                        <button type="submit" form="email-sub-form">Subscribe</button>
                        </div>

                        <div className="flex items-center gap-2">
                        <input type='checkbox' className="email-sub-agm" id='email-sub-agm' required />
                        <label htmlFor="email-sub-agm">By checking this box, you agree to subscribe to our newsletter.</label>
                        </div>

                        </form>
                    </section>


                </div>


                    <div className="footer__socials">
                        <FaFacebookSquare />
                        <FaInstagram />
                        <FaTwitter />
                        <FaPinterest />
                        <FaYoutube />
                    </div>


                <hr />

                <div className="footer__links3">

                    <section>
                        <h2>Terms of Service</h2> | 
                        <h2>Privacy Policy</h2> | 
                        <h2>Accessibility Statement</h2>
                    </section>

                    <h3>&copy; 2022 Thang University. All Rights Reserved.</h3>

                </div>


            </div>

            


        </div>
    )};

export default Footer;