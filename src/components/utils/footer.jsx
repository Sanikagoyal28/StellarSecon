import logo from "../../assets/logo.svg"
import fb from "../../assets/fb.svg"
import insta from "../../assets/insta.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import arrow from "../../assets/arrow.svg"

function Footer() {
    return <>
        <div className="container-fluid bg-dark text-white pt-5 px-5 px-sm-3 px-md-4 footer" >
            <div className="row pb-5 ms-4">
                <div className="col-lg-3 col-md-3 mx-4 ms-md-0 me-md-2 mx-sm-0 mb-sm-4 mx-xs-0">
                    <img src={logo} className="my-3" />
                    <p>SECON is a Glass Reinforced Polyester product manufacturing Company established in 2013.</p>
                </div>
                <div className="col-lg-2 col-md-3 mb-sm-4 mx-lg-3" role="button">
                    <h5 className="mb-3 mb-sm-2">Quick Links</h5>
                    <p className="mb-2">About Us</p>
                    <p className="mb-2">Contact Us</p>
                    <p className="mb-2">Projects</p>
                    <p className="mb-2">Testimonials</p>
                    <p className="mb-2">Terms and Conditions</p>
                    <p className="mb-2">Privacy Policy</p>
                </div>
                <div className="col-lg-2.6 col-md-2 mb-sm-4 mx-lg-3" role="button">
                    <h5 className="mb-3 mb-sm-2">Products</h5>
                    <p className="mb-2">Battery Box</p>
                    <p className="mb-2">Cabinet</p>
                    <p className="mb-2">Sealing Plate</p>
                    <p className="mb-2">Skylight</p>
                    <p className="mb-2">Planters</p>
                </div>
                <div className="col-lg-3 col-md-3 mb-sm-4 mx-lg-3">
                    <h5 className="mb-3 mb-sm-2">News Letter</h5>
                    <p>Sign Up for Industry alerts, our latest news, insights and thoughts from Secon.</p>
                    <form className="my-3 me-5" onSubmit={(e) => { e.preventDefault(); console.log("abcde") }}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control bg-transparent text-white" aria-describedby="basic-addon2" placeholder="Email Address" required />
                            <span className="input-group-text bg-transparent px-0 py-0" id="basic-addon2" type="submit"><img src={arrow} height="36px" className="my-0" /></span>
                        </div>
                    </form>
                    <div className="d-flex mt-0">
                        <img className="footImg mx-2" role="button" src={insta} />
                        <img className="footImg mx-2" role="button" src={twitter} />
                        <img className="footImg mx-2" role="button" src={fb} />
                        <img className="footImg mx-2" role="button" src={linkedin} />
                    </div>
                </div>
            </div>
            <p className="text-center my-0 mb-1 fw-light" style={{ opacity: 0.8 }}>@ Powered by Stellar Innovations</p>
        </div>
    </>
}

export default Footer