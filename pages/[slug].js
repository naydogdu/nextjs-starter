import {useRouter} from "next/router"
import markdownToHtml from "../src/utils/markdownToHtml"
import {getAllPages} from "../src/api/page"
import FourOhFour from "./404"
import Layout from "../src/components/layout/Layout"
import {getContentBySlug} from "../src/api/common"
import Title from "../src/components/ui/Title"
import Parser from "html-react-parser"
import Container from "../src/components/ui/Container"

export default function Page({ page }) {
    const router = useRouter()
    if (!router.isFallback && !page?.slug) {
        return <FourOhFour statusCode={404} />
    }

    return (
        <Layout seo={page?.seo}>
            <Container>
                {page?.title &&
                    <Title level={1} size={1} children={Parser(page.title)} />
                }
                {page?.content &&
                    <div className={"prose py-8"}>
                        {Parser(page.content)}
                    </div>
                }
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const page = getContentBySlug('page', params.slug, ['title', 'slug', 'preview', 'date', 'content', 'seo'])
    const content = page?.content ? await markdownToHtml(page?.content) : ''

    return {
        props: {
            page: {
                ...page,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const pages = getAllPages(['slug'])

    return {
        paths: pages.map((page) => {
            return {
                params: {
                    slug: page.slug,
                },
            }
        }),
        fallback: false,
    }
}
