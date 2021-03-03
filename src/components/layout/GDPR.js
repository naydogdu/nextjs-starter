import data from "../../../content/main.json"
import CookieConsent from "react-cookie-consent"

const GDPR = (props) => {

    return (
        <CookieConsent
            location="bottom"
            buttonText={data.consent?.button}
            cookieName="GdprConsent"
            disableStyles={true}
            debug={false}
            containerClasses={"fixed z-50 left-0 w-full bg-white border-t border-gray bg-opacity-90 py-4 px-8 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:items-center md:justify-center md:flex-row"}
            buttonClasses={"font-bold bg-gray px-4 py-2 text-primary hover:text-white hover:bg-primary"}
            buttonWrapperClasses={"flex-shrink-0"}
            contentClasses={"md:max-w-screen-md"}
            overlayClasses={"test-overlayClasses"}
            onAccept={() => {
                props.clickHandler()
            }}
        >
            <p className={"text-sm"}>
                {data.consent?.content}
            </p>
        </CookieConsent>
    )
}

export default GDPR
