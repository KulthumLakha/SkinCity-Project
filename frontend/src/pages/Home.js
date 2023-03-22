import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container.xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner"/>
                                <div className="main-banner-content position-absolute">
                                    <h4> SUPERCHARGED FOR PROS. </h4>
                                    <h5> iPad S13+ Pro. </h5>
                                    <p> $999.00 </p>
                                    <Link className="button">  BUY NOW </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="main banner"/>  
                                    <div className="small-banner-content position-absolute">                
                                        <h4> SUPERCHARGED FOR PROS. </h4>
                                        <h5> iPad S13+ Pro. </h5>
                                        <p> $999.00 </p>
                                        <Link className="button">  BUY NOW </Link>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="main banner"/>  
                                    <div className="small-banner-content position-absolute">                
                                        <h4> SUPERCHARGED FOR PROS. </h4>
                                        <h5> iPad S13+ Pro. </h5>
                                        <p> $999.00 </p>
                                        <Link className="button">  BUY NOW </Link>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="main banner"/>  
                                    <div className="small-banner-content position-absolute">                
                                        <h4> SUPERCHARGED FOR PROS. </h4>
                                        <h5> iPad S13+ Pro. </h5>
                                        <p> $999.00 </p>
                                        <Link className="button">  BUY NOW </Link>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="main banner"/>  
                                    <div className="small-banner-content position-absolute">                
                                        <h4> SUPERCHARGED FOR PROS. </h4>
                                        <h5> iPad S13+ Pro. </h5>
                                        <p> $999.00 </p>
                                        <Link className="button">  BUY NOW </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="abt home-wrapper-2 py-5">
                <div>
                    <h2 className="h2 mb-4"> ABOUT US </h2>
                    <p>Welcome to SkinCity, your one-stop shop for all things skincare and beauty. Our mission is to provide high-quality skincare and beauty products that enhance your natural beauty and help you feel confident in your skin.</p>
                    <p>At SkinCity, we understand that every individual's skin is unique, and therefore we offer a diverse range of products to cater to different skin types and concerns. Whether you're looking for anti-aging products, acne solutions, or simply want to pamper yourself with a luxurious skincare routine, we have something for everyone.</p>
                    <p>We are committed to using only the best ingredients in our products, and we work closely with top skincare experts and manufacturers to ensure that our products meet the highest quality standards. We also believe in being transparent about our ingredients and formulations, so you can feel confident in what you're putting on your skin.</p>
                    <p>Our team at SkinCity is passionate about skincare and beauty, and we strive to provide exceptional customer service to ensure that your shopping experience is enjoyable and hassle-free. We are dedicated to helping our customers achieve their skincare goals and providing expert advice and recommendations for their unique needs.</p>
                    <p>Thank you for choosing SkinCity as your skincare and beauty destination. We look forward to helping you feel confident and beautiful in your skin.</p>
                </div>
            </section>
            <section className="home-wrapper-3 py-5">
                <div className="container.xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service.png" alt="services"/>
                                    <div>
                                        <h6> Free Shipping </h6> 
                                        <p className="mb-0"> From all orders over $50 </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-02.png" alt="services"/>
                                    <div>
                                        <h6> Daily Offers </h6> 
                                        <p className="mb-0"> Save upto 30% off </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-04.png" alt="services"/>
                                    <div>
                                        <h6> Affordable Prices </h6> 
                                        <p className="mb-0"> Wholesale prices </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-03.png" alt="services"/>
                                    <div>
                                        <h6> 24/7 Support </h6> 
                                        <p className="mb-0"> Shop with an expert </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service-05.png" alt="services"/>
                                    <div>
                                        <h6> Secure Payment </h6> 
                                        <p className="mb-0"> 100% Protection guaranteed </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-4 py-5">
                <p>Coming soon!</p>
            </section>
        </>
    );
};

export default Home;