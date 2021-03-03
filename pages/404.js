import text from "../content/main.json"

import Layout from "../src/components/layout/Layout"
import {LinkButton} from "../src/components/ui/Button"
import Container from "../src/components/ui/Container"

const FourOhFour = () => (
    <Layout title={text.fourZeroFour?.metaTitle}>
        <div className={"overflow-hidden"}>
            <Container css={"relative pt-48 pb-80 wide:min-h-screen flex justify-center items-center"}>
                <div className={"flex relative flex-col lg:items-start pl-16 space-y-2"}>
                    <h1 className={"text-9xl leading-none -ml-1 tracking-tighter font-bold"}>
                        {text.fourZeroFour?.title}
                    </h1>
                    <span className={"absolute font-bold left-full text-gray scale-150 transform -rotate-90 -top-6"}
                          aria-hidden={true}
                          style={{fontSize: "15rem"}}
                    >
                        404
                    </span>
                    <p>{text.fourZeroFour?.content}</p>
                    <LinkButton href={"/"}>
                        {text.fourZeroFour?.cta}
                    </LinkButton>
                </div>
            </Container>
        </div>
    </Layout>
)

export default FourOhFour
