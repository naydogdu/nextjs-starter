import text from "../../../content/main.json"
import Script from "next/script"
import {GA_TRACKING_ID} from "../../utils/gtag"
import {useCookieConsentState} from "./cookie/CookieConsent"

const GA = () => {
    const cookieConsentState = useCookieConsentState()

    return (
        <>
            {text.app.activeGa &&
                <Script id={"g-tag"} src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            }
            {(text.app.activeGa && (cookieConsentState.isSet > 1 || cookieConsentState.marketing)) &&
                <Script
                    id={"g-tag-tracker"}
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                              page_path: window.location.pathname,
                            });
                        `,
                    }}
                />
            }
        </>
    )
}

export default GA
