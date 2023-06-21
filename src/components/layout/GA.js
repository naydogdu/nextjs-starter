import text from "../../../content/main.json"

import Script from "next/script"
import {GA_TRACKING_ID, GTM_TRACKING_ID} from "../../utils/gtag"
import {useCookieConsentState} from "./cookie/CookieConsent"

const GA = () => {
    const cookieConsentState = useCookieConsentState()

    return (
        <>
            {text.app.activeGa &&
                <Script id={"g-tag"} src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            }
            {(text.app.activeGa && ((cookieConsentState.isSet > 0 && cookieConsentState.marketing > 0) || !cookieConsentState.isSet)) &&
                <Script id={"g-tag-tracker"}>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                    `}
                </Script>
            }
            {(text.app?.activeGtm && ((cookieConsentState.isSet > 0 && cookieConsentState.marketing > 0) || !cookieConsentState.isSet)) &&
                <Script id={"gtm-tracker"}>
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${GTM_TRACKING_ID}');
                    `}
                </Script>
            }
        </>
    )
}

export default GA
