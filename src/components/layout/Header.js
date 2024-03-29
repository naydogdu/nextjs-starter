import Container from "../ui/Container"
import PrimaryNav from "./nav/PrimaryNav"
import Link from "next/link"
import Logo from '../../images/logo.svg'
import {useEffect, useState} from "react"

const Header = () => {
    const [sticked, setSticked] = useState(false)

    useEffect(() => {
        setSticked(window.scrollY)
        const onScroll = () => {
            setSticked(window.scrollY)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    })

    return (
        <header className={[
            "sticky -top-16 z-10 transition-all duration-150 ease-in",
            (sticked > 0 ? "bg-white shadow" : null),
        ].join(' ')}>
            <Container css={[
                "flex items-center justify-between transition-all duration-150 ease-in",
                (sticked > 0 ? "pb-4 pt-20" : "py-8")
            ].join(' ')}>
                <Link href={"/"}>
                    <a className={"block relative z-10"} title={""}>
                        <Logo className={[
                            "w-auto transition-all hover:opacity-75",
                            (sticked > 0 ? "h-12 delay-150" : "h-20"),
                        ].join(' ')} />
                    </a>
                </Link>
                <PrimaryNav sticked={sticked > 0} />
            </Container>
        </header>
    )
}

export default Header
