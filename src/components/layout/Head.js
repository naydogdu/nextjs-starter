import {default as NextHead} from 'next/head'
import text from "../../../content/main.json"
import { GA_TRACKING_ID } from '../../utils/gtag'

const Head = (props) => {
    const title = props.title || text.app?.siteName
    const desc = props.description || text.app?.description

    return (
        <NextHead>
            <title>{title}</title>

            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" href="/static/icons/app-icon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/static/icons/apple-icon.png" />
            <link rel="manifest" href="/manifest.webmanifest" />

            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />
            <meta name="app-icons" value={true} />

            {desc &&
                <>
                    <meta name="description" content={desc} />
                    <meta property="og:description" content={desc} />
                    <meta name="twitter:description" content={desc} />
                </>
            }
            {props.cookieConsent &&
                <>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
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
                </>
            }
        </NextHead>
    )
}

export default Head
