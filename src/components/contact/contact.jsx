import img1 from "../../assets/image.jpg"
import Footer from "../utils/footer"
import Navbar from "../utils/navbar"

function Contact() {
    return <>
        <div className="bodyWrapper">
            <Navbar />
            <div style={{ flexGrow: 1 }}>
                <div className="container-fluid mx-0 px-0" style={{ marginTop: "70px" }}>
                    <img src={img1} width="100%" height="500px" />
                </div>
                <div className="container-lg my-5">
                    <div className="row mb-5 mt-3 d-sm-flex flex-md-row flex-lg-row flex-xl-row flex-sm-column justify-content-center align-items-center">
                        <div className="col-md-4 col-sm-8 my-3">
                            <div className="card px-3 py-5 shadow-sm d-flex flex-column justify-content-center align-items-center" style={{ height: "220px" }}>
                                <img />
                                <h5>Contact Us</h5>
                                <h5>1234567890</h5>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-8 my-3">
                            <div className="card px-3 py-5 shadow-sm d-flex flex-column justify-content-center align-items-center" style={{ height: "220px" }}>
                                <img />
                                <h5>Email Us</h5>
                                <h5>abcd123@gmail.com</h5>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-8 my-3">
                            <div className="card px-3 py-5 shadow-sm d-flex flex-column justify-content-center align-items-center" style={{ height: "220px" }}>
                                <img />
                                <h5>Reach to Us</h5>
                                <h5>Abcd, Qatar</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-sm-4 mb-md-0 mb-lg-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846227.2407396692!2d49.898084217533636!3d25.34071436565366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sQatar!5e0!3m2!1sen!2sin!4v1687451404232!5m2!1sen!2sin" width="100%" height="480" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className="col-md-5">
                            <form>
                                <div class="mb-3 shadow-none">
                                    <label for="exampleInputText1" class="form-label mb-0">Name</label>
                                    <input type="text" class="form-control shadow-none" id="exampleInputText1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label mb-0">Email address</label>
                                    <input type="email" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label mb-0">Password</label>
                                    <input type="password" class="form-control shadow-none" id="exampleInputPassword1" />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputTextArea1" className="mb-0">Message</label>
                                    <textarea class="form-control" placeholder="Leave a comment here" id="fexampleInputTextArea1" style={{ height: "100px" }}></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary mt-3">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default Contact