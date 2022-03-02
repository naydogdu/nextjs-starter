import sliderSource from "../content/slider.json"

import Layout from "../src/components/layout/Layout"
import Container from "../src/components/ui/Container"
import {getLatestPosts} from "../src/api/post"
import Title from "../src/components/ui/Title"
import TestModal from "../src/components/TestModal"
import Slider from "../src/components/ui/slider/Slider"

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
