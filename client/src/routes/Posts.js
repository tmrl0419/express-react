import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';

class Post extends Component{
    render(){
        return(
            <div>
                <p>title:{this.props.match.params.title}</p>
                <p>id:{new URLSearchParams(this.props.location.search).get('id')}</p>
            </div>
        )
    }
}

class Posts extends Component {
    render() {
        return (
            <div>
                {/* Meta */}
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="keywords" content="SITE KEYWORDS HERE"/>
                <meta name="description" content/>
                <meta name="copyright" content/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                {/* Title */}
                <title>MakersMaker − Online Education Platform for Programmers</title>
                {/* Favicon */}
                <link rel="icon" type="image/png" href="images/favicon.png"/>
                {/* Web Font */}
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"/>
                {/* Bootstrap CSS */}
                <link rel="stylesheet" href="css/bootstrap.min.css"/>
                {/* Font Awesome CSS */}
                <link rel="stylesheet" href="css/font-awesome.min.css"/>
                {/* Fancy Box CSS */}
                <link rel="stylesheet" href="css/jquery.fancybox.min.css"/>
                {/* Owl Carousel CSS */}
                <link rel="stylesheet" href="css/owl.carousel.min.css"/>
                <link rel="stylesheet" href="css/owl.theme.default.min.css"/>
                {/* Animate CSS */}
                <link rel="stylesheet" href="css/animate.min.css"/>
                {/* Slick Nav CSS */}
                <link rel="stylesheet" href="css/slicknav.min.css"/>
                {/* Magnific Popup */}
                <link rel="stylesheet" href="css/magnific-popup.css"/>
                {/* Learedu Stylesheet */}
                <link rel="stylesheet" href="css/normalize.css"/>
                <link rel="stylesheet" href="style.css"/>
                <link rel="stylesheet" href="css/responsive.css"/>
                {/* Learedu Color */}
                <link rel="stylesheet" href="css/color/color1.css"/>
                {/*<link rel="stylesheet" href="css/color/color2.css">*/}
                {/*<link rel="stylesheet" href="css/color/color3.css">*/}
                {/*<link rel="stylesheet" href="css/color/color4.css">*/}
                {/*<link rel="stylesheet" href="css/color/color5.css">*/}
                {/*<link rel="stylesheet" href="css/color/color6.css">*/}
                {/*<link rel="stylesheet" href="css/color/color7.css">*/}
                {/*<link rel="stylesheet" href="css/color/color8.css">*/}
                {/* Book Preloader */}
                <div className="book_preload">
                    <div className="book">
                        <div className="book__page"/>
                        <div className="book__page"/>
                        <div className="book__page"/>
                    </div>
                </div>
                {/*/ End Book Preloader */}
                {/* Header */}
                <header className="header">
                    {/* Topbar */}
                    <div className="topbar">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                </div>
                                <div className="col-lg-4 col-12">
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Topbar */}
                    {/* Header Inner */}
                    <div className="header-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="images/logo.png" alt="#"/>
                                        </a>
                                    </div>
                                    <div className="mobile-menu"/>
                                </div>
                                <div className="col-lg-9 col-md-9 col-12">
                                    {/* Header Widget */}
                                    <div className="header-widget">
                                        <div className="single-widget">
                                            <i className="fa fa-phone"/>
                                            <h4>Call Now
                                                <span>(+82) 10 2402 2659</span>
                                            </h4>
                                        </div>
                                        <div className="single-widget">
                                            <i className="fa fa-envelope-o"/>
                                            <h4>Send Message
                                                <a href="mailto:mailus@mail.com">
                                                    <span>support@makesmaker.com</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div className="single-widget">
                                            <i className="fa fa-map-marker"/>
                                            <h4>Our Location
                                                <span>2, 63beon-gil, Geumjeong-gu, Busan, South Korea</span>
                                            </h4>
                                        </div>
                                    </div>
                                    {/*/ End Header Widget */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ End Header Inner */}
                    {/* Header Menu */}
                    <div className="header-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <nav className="navbar navbar-default">
                                        <div className="navbar-collapse">
                                            {/* Main Menu */}
                                            <ul id="nav" className="nav menu navbar-nav">
                                                <li className="active">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li>
                                                    <a href="#">Explore
                                                        <i className="fa fa-angle-down"/>
                                                    </a>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <a href="courses.html">What to learn</a>
                                                        </li>
                                                        <li>
                                                            <a href="blogs-left-sidebar.html">More Projects</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">My Pages
                                                        <i className="fa fa-angle-down"/>
                                                    </a>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <a href="mycourses.html">My Lecture List</a>
                                                        </li>
                                                        <li>
                                                            <a href="portpolios.html">Portfolios</a>
                                                        </li>
                                                        <li>
                                                            <a href="myprofile.html">My Profile</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            {/* End Main Menu */}
                                            {/* button */}
                                            <div className="button">
                                                <a href="contact.html" className="btn">
                                                    <i className="fa fa-pencil"/>Contact</a>
                                            </div>
                                            {/*/ End Button */}
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ End Header Menu */}
                </header>
                {/* End Header */}
                {/* Slider Area */}
                <section className="home-slider">
                    <div className="slider-active">
                        {/* Single Slider */}
                        <div className="single-slider overlay"
                             style={{backgroundImage: 'url("https://www.brainscape.com/blog/wp-content/uploads/2011/08/o-TEEN-STUDYING-LATE-facebook.jpg")'}}
                             data-stellar-background-ratio="0.5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-12">
                                        <div className="slider-text">
                                            <h1>Perfect Courses to be an
                                                <span>Expert</span> in your field</h1>
                                            <p>Our mission is to empower clients, colleagues, and communities to achieve
                                                aspirations while building lasting, caring
                                                relationships.</p>
                                            <div className="button">
                                                <a href="courses.html" className="btn primary">What to Learn</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ End Single Slider */}
                        {/* Single Slider */}
                        <div className="single-slider overlay"
                             style={{backgroundImage: 'url("https://cdn-images-1.medium.com/max/1000/1*zTYrUVqltB-pUv_w8s_HAA.jpeg")'}}
                             data-stellar-background-ratio="0.5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
                                        <div className="slider-text text-center">
                                            <h1>Learn A to Z about
                                                <span>Computer Science</span> &amp; Applications</h1>
                                            <p>Our mission is to empower clients, colleagues, and communities to achieve
                                                aspirations while building lasting, caring
                                                relationships.</p>
                                            <div className="button">
                                                <a href="courses.html" className="btn primary">What to Learn</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*/ End Single Slider */}
                    </div>
                </section>
                {/*/ End Slider Area */}
                {/* Events */}
                <section className="events section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h2>Recommended
                                        <span>Courses</span>
                                    </h2>
                                    <p>Look around gorgeous classes that we prepared for you. Choose what to
                                        learn &amp; to be expert about it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="event-slider">
                                    {/* Single Event */}
                                    <div className="single-event">
                                        <div className="head overlay">
                                            <img src="http://www.gemius.lv/files/LV/online-winkelen.jpg" alt="#"/>
                                        </div>
                                        <div className="event-content">
                                            <div className="meta">
                        <span>
                          <i className="fa fa-clock-o"/>6 months</span>
                                                <span>
                          <i className="fa fa-list"/>Beginner</span>
                                            </div>
                                            <h4>
                                                <a href="course-single.html">Shopping Mall Making</a>
                                            </h4>
                                            <p>You’ll learn the skills and techniques used by shopping mall develope
                                                teams at the most advanced online shopping
                                                mall in the world.</p>
                                            <div className="button">
                                                <a href="course-single.html" className="btn">Attend Course</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Event */}
                                    <div className="single-event">
                                        <div className="head overlay">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                                                width={800} height={550} alt="#"/></div>
                                        <div className="event-content">
                                            <div className="meta">
                        <span>
                          <i className="fa fa-clock-o"/>4 weeks</span>
                                                <span>
                          <i className="fa fa-list"/>Intermediate</span>
                                            </div>
                                            <h4>
                                                <a href="course-single.html">How to use Node.js</a>
                                            </h4>
                                            <p>Let's learn about an open sourse server environment &amp; asynchronous
                                                programming ! </p>
                                            <div className="button">
                                                <a href="course-single.html" className="btn">Attend Course</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Event */}
                                    {/* Single Event */}
                                    <div className="single-event">
                                        <div className="head overlay">
                                            <img
                                                src="https://www.pmvmiddleeast.com/sites/default/files/pmv/styles/full_img/public/images/2018/01/31/Ford-autonomous-web_0.jpg?itok=w537nhKz"
                                                alt="#"/></div>
                                        <div className="event-content">
                                            <div className="meta">
                        <span>
                          <i className="fa fa-clock-o"/>6 months</span>
                                                <span>
                          <i className="fa fa-list"/>Expert</span>
                                            </div>
                                            <div className="title">
                                                <h4>
                                                    <a href="course-single.html">Making own Self-Driving Cars</a>
                                                </h4>
                                                <p>You’ll learn the skills and techniques used by self-driving car teams
                                                    at the most advanced technology companies
                                                    in the world.</p>
                                            </div>
                                            <div className="button">
                                                <a href="course-single.html" className="btn">Attend Course</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Event */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*/ End Events */}
                {/* Fun Facts */}
                <div className="fun-facts overlay" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-6">
                                {/* Single Fact */}
                                <div className="single-fact">
                                    <i className="fa fa-institution"/>
                                    <div className="number">
                                        <span className="counter">80</span>k+
                                    </div>
                                    <p>Active Cources</p>
                                </div>
                                {/*/ End Single Fact */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                {/* Single Fact */}
                                <div className="single-fact">
                                    <i className="fa fa-graduation-cap"/>
                                    <div className="number">
                                        <span className="counter">33</span>k+
                                    </div>
                                    <p>Active Students</p>
                                </div>
                                {/*/ End Single Fact */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                {/* Single Fact */}
                                <div className="single-fact">
                                    <i className="fa fa-video-camera"/>
                                    <div className="number">
                                        <span className="counter">278</span>+
                                    </div>
                                    <p>Video Cources</p>
                                </div>
                                {/*/ End Single Fact */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                {/* Single Fact */}
                                <div className="single-fact">
                                    <i className="fa fa-trophy"/>
                                    <div className="number">
                                        <span className="counter">308</span>+
                                    </div>
                                    <p>Awards Won</p>
                                </div>
                                {/*/ End Single Fact */}
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Fun Facts */}
                {/* Footer */}
                <footer className="footer overlay section">
                    {/* Footer Top */}
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12">
                                    {/* About */}
                                    <div className="single-widget about">
                                        <div className="logo">
                                            <a href="#">
                                                <img src="images/logo2.png" alt="#"/>
                                            </a>
                                        </div>
                                        <p>Best education platform for computer science majoring
                                            students &amp; more!</p>
                                        <ul className="list">
                                            <li>
                                                <i className="fa fa-phone"/>Phone: +82 10 2402 2659
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope"/>Email:
                                                <a href="mailto:info@youremail.com">support@makesmaker.com</a>
                                            </li>
                                            <li>
                                                <i className="fa fa-map-o"/>Address: 2, 63beon-gil, Geumjeong-gu, Busan
                                            </li>
                                        </ul>
                                    </div>
                                    {/*/ End About */}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/* Useful Links */}
                                    <div className="single-widget useful-links">
                                        <h2>Useful Links</h2>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right"/>Home</a>
                                            </li>
                                            <li>
                                                <a href="portpolios.html">
                                                    <i className="fa fa-angle-right"/>My Portfolios</a>
                                            </li>
                                            <li>
                                                <a href="courses.html">
                                                    <i className="fa fa-angle-right"/>What to Learn</a>
                                            </li>
                                            <li>
                                                <a href="myprofile.html">
                                                    <i className="fa fa-angle-right"/>My Profile</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*/ End Useful Links */}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/* Latest News */}
                                    <div className="single-widget latest-news">
                                        <h2>Latest Courses</h2>
                                        <div className="news-inner">
                                            <div className="single-news">
                                                <img
                                                    src="http://www.specialtywraps.com/QC/images/products/sm/FST508AQU_2_sm.jpg"
                                                    alt="#"/>
                                                <h4>
                                                    <a href="course-single.html">Check out our new course!</a>
                                                </h4>
                                                <p>Attend to Making own Online Shopping mall course now!</p>
                                            </div>
                                            <div className="single-news">
                                                <img
                                                    src="https://www.publicdomainpictures.net/pictures/260000/t2/tic-tac-toe-1526789164NkQ.jpg"
                                                    alt="#"/>
                                                <h4>
                                                    <a href="course-single.html">How about making tic-tac-toe?</a>
                                                </h4>
                                                <p>Let's make a simple computer game without using GUI.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Latest News */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    {/* Newsletter */}
                                    <div className="single-widget newsletter">
                                        <h2>Subscribe Newsletter</h2>
                                        <div className="mail">
                                            <p>Don't miss to subscribe to our news feed, Get the latest updates from
                                                us!</p>
                                            <div className="form">
                                                <input type="email" placeholder="Enter your email"/>
                                                <button className="button" type="submit">
                                                    <i className="fa fa-envelope"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Newsletter */}
                                </div>
                                {/* End Footer */}
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Jquery JS*/}
                {/* Popper JS*/}
                {/* Bootstrap JS*/}
                {/* Jquery Steller JS */}
                {/* Particle JS */}
                {/* Fancy Box JS*/}
                {/* Magnific Popup JS*/}
                {/* Masonry JS*/}
                {/* Circle Progress JS */}
                {/* Owl Carousel JS*/}
                {/* Waypoints JS*/}
                {/* Slick Nav JS*/}
                {/* Counter Up JS */}
                {/* Easing JS*/}
                {/* Wow Min JS*/}
                {/* Scroll Up JS*/}
                {/* Google Maps JS */}
                {/* Main JS*/}
            </div>
        );
    }
}
export default Posts;