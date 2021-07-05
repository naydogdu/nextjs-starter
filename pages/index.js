import Layout from "../src/components/layout/Layout"
import Container from "../src/components/ui/Container"
import {getLatestPosts} from "../src/api/post"
import Title from "../src/components/ui/Title"
import TestModal from "../src/components/TestModal"

const Home = ({posts}) => {

    return (
        <Layout>
            <Container css={"flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-between"}>
                <Title level={1}>
                    HomePage
                </Title>
                <TestModal />
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
