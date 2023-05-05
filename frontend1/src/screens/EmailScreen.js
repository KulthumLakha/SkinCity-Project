import React from "react";


const EmailScreen = () => {

    const userinfo =JSON.parse(localStorage.getItem("userInfo"));
    const email = userinfo.email;
    const message = `Thank you for signing in! Please check your email (${email}) for a link to access your account's home page.`;

    return (<h3><center>{message}</center></h3>);
}

export default EmailScreen;


