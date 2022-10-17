import Document, { Html, Head, Main, NextScript } from 'next/document'
import text from "../content/main.json"
import {GTM_TRACKING_ID} from "../src/utils/gtag"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr" className={"text-[80%] md:text-[87.5%] lg:text-[100%] wide-sm:text-[87.5%] wide-xs:text-[80%]"}>
                <Head />
                <body>
                    {(text.app?.activeGtm) &&
                        <noscript
                            dangerouslySetInnerHTML={{
                                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_TRACKING_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`,
                            }}
                        />
                    }
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
