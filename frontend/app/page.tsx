import Image from 'next/image'
import Link from "next/link"
import "./styles.css"
import zarahome from "../assets/img/zarahome.jpg"
import logo from "../assets/Logo.png"
import Search from "../components/Search/Search"
import bag from "../assets/img/bag.png"
import menu from "../assets/img/menu.png"
import pic2 from "../assets/img/pic2.jpg"
import kidszara from "../assets/img/kidszara.jpg"
import man from"../assets/img/man.jpg"



export default function Home() {
  return (
    <div>
      <div id="pushImg">
        
      </div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
              <Image id='menu' src={menu} alt="..." />
                <Image id="logo" className="navbar-brand" src={logo} alt="..." />
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item"><Link href="/search"><Search/></Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/login">LOG IN</Link></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">HELP</a></li>
                        <li className="nav-item"><a className="nav-link" href="#bag"><Image id="bag" src={bag} alt=".."/></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    
                </div>
            </div>
        </header>
        <section className="about-section text-center" id="about">

        </section>
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7"><Image className="img-fluid mb-3 mb-lg-0" src={pic2} alt="..." /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>WOMAN</h4>
                            <p className="text-black-50 mb-0"> Embrace your individuality and express your unique sense of fashion with our diverse range of women's clothing. From bold patterns and vibrant colors to timeless classics and contemporary designs, our collection caters to a wide range of styles and preferences.</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6"><Image className="img-fluid" src={kidszara} alt="..." /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">KIDS</h4>
                                    <p className="mb-0 text-white-50">collection of kids' clothes! From playful patterns to vibrant colors, we have everything your little ones need to express their unique style. Our clothes are designed with comfort and durability in mind, ensuring that your kids can play, explore, and create lasting memories in style</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><Image className="img-fluid" src={man} alt="..." /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">MAN</h4>
                                    <p className="mb-0 text-white-50">Discover the perfect blend of style and comfort with our collection of men's clothing. From casual t-shirts and jeans to tailored suits and dress shirts, our range offers versatile options for every occasion. Stay on-trend with our carefully curated selection of men's fashion, designed to elevate your wardrobe and showcase your personal style.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="signup-section" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Subscribe to our Newletter</h2>
                        <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="row input-group-newsletter">
                                <div className="col"><input className="form-control" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                                <div className="col-auto"><button className="btn btn-primary disabled" id="submitButton" type="submit">Notify Me!</button></div>
                            </div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3 mt-2 text-white">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-section bg-black">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">Elgazala Technopark, Bloc B24, Raoued </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50"><a href="#!">ZARA@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">+1 (555) 902-8832</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div>
            </div>
            </section>       
    </div>
  )
}
