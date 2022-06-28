import sliderSource from "../content/slider.json"
import formSource from "../content/form.json"

import Layout from "../src/components/layout/Layout"
import Container from "../src/components/ui/Container"
import {getLatestPosts} from "../src/api/post"
import Title from "../src/components/ui/Title"
import TestModal from "../src/components/TestModal"
import Slider from "../src/components/ui/slider/Slider"
import FormGeneric from "../src/components/ui/form/FormGeneric"
import FormField from "../src/components/ui/form/FormField"

const Home = ({posts}) => {

    return (
        <Layout mainCss={"gap-8"}>
            <Container css={"flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-between"}>
                <Title level={1}>
                    HomePage
                </Title>
                <TestModal />
            </Container>
            <Container>
                <Slider data={sliderSource} />
            </Container>
            <Container>
                <FormGeneric css={"grid grid-cols-1 gap-8 pb-8"} submit={"Send"}>
                    {formSource.map((el, x) => <FormField {...el} key={x} />)}
                </FormGeneric>
            </Container>
        </Layout>
    )
}

export default Home

export async function getStaticProps(context) {
    const posts = getLatestPosts(3)

    return {
        props: {
            posts: [...posts],
        },
    }
}
