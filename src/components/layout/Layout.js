import React, {useState} from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import Head from "./Head"
import GDPR from "./GDPR"
import {getCookieConsentValue} from "react-cookie-consent"
import Loader from "../ui/Loader"

const Layout = (props) => {
    const initialConsentValue = getCookieConsentValue('GdprConsent')
    const [consentValue, setConsentValue] = useState(initialConsentValue)
    const seo = props.seo ? props.seo : { title: props.title?.replace(/(<([^>]+)>)/gi, "") }

    return (
        <>
            <Head {...seo} cookieConsent={consentValue} />
            <Loader />
            <div className="relative text-black bg-white font-normal antialiased scroll-smooth">
                <Header />
                <main className={["leading-relaxed"].join(' ')}>
                    {props.children}
                </main>
                <Footer />
            </div>
            <GDPR clickHandler={() => setConsentValue(true)} />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
}

export default Layout
