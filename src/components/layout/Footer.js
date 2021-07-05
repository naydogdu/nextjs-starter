import data from "../../../content/main.json"

import Container from "../ui/Container"
import {useCookieConsentDispatch} from "./cookie/CookieConsent"

const Footer = (props) => {
    const dispatch = useCookieConsentDispatch()

    return (
        <footer className={["relative py-8", props.css].join(' ')}>
            <Container>
                <button
                    onClick={() => dispatch({type: 'showManageCookiePopup'})}
                >
                    {data.consent.customize.menuTitle}
                </button>
            </Container>
        </footer>
    )
}

export default Footer
