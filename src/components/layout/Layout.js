import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import Head from "./Head"
import Loader from "../ui/Loader"
import {CookieConsentProvider} from "./cookie/CookieConsent"
import GA from "./GA"

const Layout = (props) => {
    const seo = props.seo ? props.seo : { title: props.title?.replace(/(<([^>]+)>)/gi, "") }

    return (
        <CookieConsentProvider>
            <Head {...seo} />
            <GA id={"gtag"} />
            <Loader />
            <div className="relative text-black bg-white font-normal antialiased scroll-smooth min-h-screen flex flex-col">
                <Header />
                <main className={["flex flex-col leading-relaxed flex-grow", props.mainCss].join(' ')}>
                    {props.children}
                </main>
                <Footer />
            </div>
        </CookieConsentProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    mainCss: PropTypes.string,
}

export default Layout
