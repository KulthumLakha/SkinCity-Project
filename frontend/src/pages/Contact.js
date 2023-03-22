import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Contact = () => {
    return (
        <div>    
            <section className="contact-wrapper-1 py-1">
                <div className="cont">
                    <h2 className="h2 mb-4"> Contact Us </h2>
                    <p>We’re here to help, so please find the most relevant way to get in touch below</p>
                    <p>
                        Call us at: &nbsp;
                        <a href="tel:+1468990135" className="mt-4 black-link"> (469) 899-0154 </a>
                        &nbsp; or
                        Email us at: &nbsp;
                        <a href="mailto:skincity@gmail.com" className="mt-4 black-link"> skincity@gmail.com </a>
                    </p>
                </div>
            </section>   
            <section className="contact-wrapper-1 py-1">
                <div className="faqs">
                    <h2 className="h2 mb-4"> Frequently asked questions </h2>
                    <p>
                        <div className="list">
                            <ol>
                                <li>
                                    What is SkinCity?
                                    <br />
                                    SkinCity is an online retailer of skincare and beauty products, offering a wide range of high-quality products from top brands.
                                </li>
                                <li>
                                    How can I place an order?
                                    <br />
                                    To place an order, simply browse our website and add products to your cart. Once you're ready to check out, enter your shipping and payment information to complete your purchase.
                                </li>  
                                <li>
                                    What payment methods do you accept?
                                    <br />
                                    We accept all major credit and debit cards.
                                </li>         
                                <li>
                                    How long will it take for my order to arrive?
                                    <br />
                                    Delivery times vary depending on your location and the shipping method you choose. However, most orders are delivered within 3-5 business days.
                                </li>   
                                <li>
                                    What is your return policy?
                                    <br />
                                    We offer a 30-day return policy for all products purchased from SkinCity. If you're not completely satisfied with your purchase, simply contact us to arrange a return.
                                </li> 
                                <li>
                                    Do you offer free shipping?
                                    <br />
                                    We offer free shipping on all orders over $50.
                                </li>  
                                <li>
                                    How can I track my order?
                                    <br />
                                    Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the shipping carrier's website.
                                </li> 
                                <li> 
                                    What if I have a problem with my order?
                                    <br />
                                    If you have any issues with your order, please contact our customer service team and we will do our best to resolve the issue as quickly as possible.
                                </li> 
                                <li>
                                    Are your products cruelty-free?
                                    <br />
                                    We are committed to providing our customers with products that are ethically sourced and cruelty-free. Many of the brands we carry are certified cruelty-free.
                                </li> 
                            </ol>
                        </div>
                    </p>
                </div>
            </section>         
        </div>
    );
};

export default Contact;