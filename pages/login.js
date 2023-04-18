import Layout from "../src/components/layout/Layout"
import Container from "../src/components/ui/Container"
import Title from "../src/components/ui/Title"
import FormInput from "../src/components/ui/form/FormInput"
import {Button} from "../src/components/ui/Button"
import getTinaLocalKey from "../src/utils/getTinaLocalKey"
import {useRouter} from "next/router"

const Login = () => {
    const router = useRouter()
    function handleSubmit(e) {
        e.preventDefault()
        localStorage.setItem(getTinaLocalKey, `${e.target?.[0]?.value}:${e.target?.[1]?.value}`)
        router.push('/admin')
    }

    return (
        <Layout mainCss={"bg-gray/50"}>
            <Container css={"py-8 flex-grow flex flex-col items-center justify-center"}>
                <div className={"gap-8 flex flex-col shadow bg-white p-8 rounded"}>
                    <Title children={"Connexion à l'administration"} />
                    <form method={"POST"} onSubmit={e => handleSubmit(e)}>
                        <div className={"flex flex-col gap-4 md:flex-row"}>
                            <FormInput required label={"Mon email"} />
                            <FormInput required label={"Mon mot de passe"} />
                            <Button type={"submit"} css={"flex-shrink-0 "} children={"Je me connecte"} />
                        </div>
                    </form>
                </div>
            </Container>
        </Layout>
    )
}

export default Login
