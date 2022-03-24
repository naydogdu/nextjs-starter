import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr" className={"text-[80%] md:text-[87.5%] lg:text-[100%] wide-sm:text-[87.5%] wide-xs:text-[80%]"}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
