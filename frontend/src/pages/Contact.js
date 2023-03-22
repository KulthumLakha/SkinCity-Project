import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Contact = () => {
    return (
        <div>
            <section className="contact-wrapper-1 py-1">
                <div className="abt">
                    <h2 className="h2 mb-4"> ABOUT US </h2>
                    <p>Welcome to SkinCity, your one-stop shop for all things skincare and beauty. Our mission is to provide high-quality skincare and beauty products that enhance your natural beauty and help you feel confident in your skin.</p>
                    <p>At SkinCity, we understand that every individual's skin is unique, and therefore we offer a diverse range of products to cater to different skin types and concerns. Whether you're looking for anti-aging products, acne solutions, or simply want to pamper yourself with a luxurious skincare routine, we have something for everyone.</p>
                    <p>We are committed to using only the best ingredients in our products, and we work closely with top skincare experts and manufacturers to ensure that our products meet the highest quality standards. We also believe in being transparent about our ingredients and formulations, so you can feel confident in what you're putting on your skin.</p>
                    <p>Our team at SkinCity is passionate about skincare and beauty, and we strive to provide exceptional customer service to ensure that your shopping experience is enjoyable and hassle-free. We are dedicated to helping our customers achieve their skincare goals and providing expert advice and recommendations for their unique needs.</p>
                    <p>Thank you for choosing SkinCity as your skincare and beauty destination. We look forward to helping you feel confident and beautiful in your skin.</p>
                </div>
            </section>    
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
                    <p>We’re here to help, so please find the most relevant way to get in touch below</p>
                </div>
            </section>        
            <section className="contact-wrapper-1 py-1">
                <div className="privacyPolicy">
                    <h2 className="h2 mb-4"> Privacy Policy </h2>
                    <p>
                        At SkinCity, we take the privacy of our customers seriously. We understand the importance of protecting your personal information and have implemented appropriate measures to ensure your information is secure. This privacy policy outlines what information we collect, how we use it, and your options for managing your information.
                    </p>
                    <p>
                        Information We Collect
                        <br />
                        We collect personal information such as your name, email address, shipping address, and payment information when you make a purchase on our website. We may also collect information about your browsing activity on our website and use cookies to enhance your user experience.
                    </p>
                    <p>
                        How We Use Your Information
                        <br />
                        We use the information we collect to process your orders, communicate with you about your orders, and to improve your shopping experience. We may also use your information to send you promotional offers and updates about our products and services. If you no longer wish to receive these communications, you can opt-out at any time.
                    </p>
                    <p>
                        Sharing Your Information
                        <br />
                        We do not sell, trade, or share your personal information with third parties except for the purpose of fulfilling your orders (e.g. with our shipping carriers) or as required by law. We may share your non-personal information (e.g. browsing activity) with third-party analytics providers to help us understand how our website is being used.
                    </p>
                    <p>
                        Security
                        <br />
                        We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard encryption technology to ensure the security of your information when you make a purchase on our website.
                    </p>
                    <p>
                        Your Rights
                        <br />
                        You have the right to access, correct, or delete the personal information we hold about you. You can also choose to limit the information we collect about you or to opt-out of marketing communications. If you have any questions or concerns about your privacy, please contact us at privacy@skincity.com.
                    </p>
                    <p>
                        Changes to Our Privacy Policy
                        <br />
                        We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on our website. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                    </p>
                    <p>
                        Effective Date
                        <br />
                        This privacy policy is effective as of March 22, 2023.
                    </p>
                </div>
            </section>
            <section className="contact-wrapper-1 py-1">
                <div className="returns">
                    <h2 className="h2 mb-4"> Returns and Exchanges </h2>
                    <p>
                        Find our returns policy below:
                        <div className="list">
                            <ol>
                                <li>Returns: We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, you may return it within 30 days of the purchase date for a full refund, minus any shipping charges.</li>
                                <li>Exchanges: If you need to exchange an item for a different size, color, or style, please contact us within 30 days of the purchase date to initiate the exchange process. We will do our best to accommodate your request based on availability.</li>  
                                <li>Condition of items: To be eligible for a return or exchange, items must be in their original condition and unopened. We reserve the right to refuse returns or exchanges of items that do not meet these criteria. </li>         
                                <li>Refunds: Refunds will be issued to the original payment method within 5-7 business days of receiving the returned item. Please note that it may take several additional business days for the refund to appear on your account, depending on your bank or credit card company's processing time.</li>  
                                <li>Final Sale items: Please note that certain items may be marked as "Final Sale" and are not eligible for return or exchange. These items will be clearly labeled on the product page.</li>                           
                            </ol>
                        </div>
                        If you have any questions or concerns about our return and exchange policy, please do not hesitate to contact us. Thank you for shopping with us.
                    </p>
                </div>
            </section>
            <section className="contact-wrapper-1 py-1">
                <div className="shipping">
                    <h2 className="h2 mb-4"> Shipping Policy </h2>
                    <p>
                        Thank you for considering our store for your purchase. Below you will find our shipping policy:
                        <div className="list">
                            <ol>
                                <li>Shipping times: We strive to ship all orders within 1-2 business days from the date of purchase. However, please note that some products may take longer to ship due to availability or special handling requirements.</li>
                                <li>Shipping locations: We ship locally within the United States.</li>  
                                <li>Shipping carriers: We use UPS for all of our shipments. </li>         
                                <li>Shipping costs: Shipping costs will vary based on your location and selected shipping method. Shipping costs will be calculated and displayed at checkout.</li>  
                                <li>Tracking information: Once your order has shipped, you will receive a tracking number via email. You can use this number to track the progress of your shipment online.</li>                         
                                <li>Delivery confirmation: For your security, all shipments require a signature upon delivery. If you are not available to sign for your package, the carrier will leave a notice with instructions on how to arrange for re-delivery or pick up.</li>   
                            </ol>
                        </div>
                        If you have any questions or concerns about our shipping policy, please do not hesitate to contact us. Thank you again for choosing our store.
                    </p>
                </div>
            </section>
            <section className="contact-wrapper-1 py-1">
                <div className="terms">
                    <h2 className="h2 mb-4"> Terms & Conditions </h2>
                    <p>
                    <div className="list">
                            <ol>
                                <li>Introduction: SkinCity is an ecommerce website that sells skincare products. By accessing and using the website, you agree to be bound by these terms and conditions.</li>
                                <li>Account creation: In order to make a purchase on SkinCity, you will need to create an account. You are responsible for maintaining the security of your account and password. You agree to provide accurate and complete information when creating your account.</li>  
                                <li>Product descriptions: We make every effort to provide accurate and up-to-date product descriptions on our website. However, we do not guarantee the accuracy, completeness, or reliability of any product descriptions or other content on the website.</li>         
                                <li>Pricing and availability: All prices are in US dollars and are subject to change without notice. We reserve the right to limit the quantity of any product or service that we offer. We also reserve the right to refuse any order you place with us.</li>  
                                <li>Payment: We accept payment by credit card, debit card, and PayPal. Payment is due at the time of purchase. By submitting your payment information, you authorize us to charge your card or account for the total amount of your purchase.</li>                         
                                <li>Shipping: We offer shipping to the US. Shipping rates and delivery times will vary based on your location and selected shipping method.</li>   
                                <li>Returns and exchanges: Please refer to our Return and Exchange Policy for information on returns and exchanges.</li>
                                <li>Intellectual property: All content on the SkinCity website, including but not limited to text, graphics, logos, images, and software, is the property of SkinCity or its licensors and is protected by copyright, trademark, and other intellectual property laws.</li>
                                <li>Disclaimer of warranties: SkinCity makes no representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, materials, or products included on the website.</li>
                                <li>Limitation of liability: SkinCity will not be liable for any damages of any kind arising from the use of the website.</li>
                            </ol>
                        </div>
                    </p>
                </div>
            </section>     
        </div>
    );
};

export default Contact;