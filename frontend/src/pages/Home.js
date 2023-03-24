import React from 'react';
import productsData from './data.json';

function Home(props) {
    const { setCartItems } = props;

    function handleAddToCartClick(product) {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    }

    return (
        <>
            <section className="home-wrapper-4 py-3">
            <div className="product-list-container">
                <div className="product-list">
                {productsData.map((product) => (
                    <div className="product-container" key={product.id}>
                    <img
                        className="product-image"
                        src={product.image}
                        alt={product.name}
                    />
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <span className="product-description">
                        ${product.price.toFixed(2)}
                    </span>
                    <button
                        className="add-to-cart-button"
                        onClick={() => handleAddToCartClick(product)}
                    >
                        Add to Cart
                    </button>
                    </div>
                ))}
                </div>
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
            <section className="abt home-wrapper-2 py-3">
                <div>
                    <h1 className="h1 mb-4"> ABOUT US </h1>
                    <p>Welcome to SkinCity, your one-stop shop for all things skincare and beauty. Our mission is to provide high-quality skincare and beauty products that enhance your natural beauty and help you feel confident in your skin.</p>
                    <p>At SkinCity, we understand that every individual's skin is unique, and therefore we offer a diverse range of products to cater to different skin types and concerns. Whether you're looking for anti-aging products, acne solutions, or simply want to pamper yourself with a luxurious skincare routine, we have something for everyone.</p>
                    <p>We are committed to using only the best ingredients in our products, and we work closely with top skincare experts and manufacturers to ensure that our products meet the highest quality standards. We also believe in being transparent about our ingredients and formulations, so you can feel confident in what you're putting on your skin.</p>
                    <p>Our team at SkinCity is passionate about skincare and beauty, and we strive to provide exceptional customer service to ensure that your shopping experience is enjoyable and hassle-free. We are dedicated to helping our customers achieve their skincare goals and providing expert advice and recommendations for their unique needs.</p>
                    <p>Thank you for choosing SkinCity as your skincare and beauty destination. We look forward to helping you feel confident and beautiful in your skin.</p>
                </div>
            </section>
            <section className="home-wrapper-1">
                <div className="container.xxl">
                    <div className="row">
                        <div className="col-4">
                            <div className="small-banner position-relative">
                                <img src="images/argan.jpg" className="img-fluid rounded-3" alt="main banner"/>  
                                <div className="small-banner-content position-absolute">                
                                    <h4> ARGAN <br /> &nbsp; OIL </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="small-banner position-relative">
                                <img src="images/teatree.jpg" className="img-fluid rounded-3" alt="main banner"/>  
                                <div className="small-banner-content position-absolute">                
                                    <h4> TEA TREE SERUM </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="small-banner position-relative">
                                <img src="images/salycilic.jpg" className="img-fluid rounded-3" alt="main banner"/>  
                                <div className="small-banner-content position-absolute">                
                                    <h4> &nbsp;&nbsp;&nbsp; SALICYLIC ACID <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2% MASQUE </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;