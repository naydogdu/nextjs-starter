import text from '../../../../content/main.json'
import navData from '../../../../content/nav.json'

import {useState} from "react"
import NavItem from "./NavItem"
import BarIcon from '../../../images/menu.svg'
import CloseIcon from '../../../images/close.svg'

const PrimaryNav = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const MenuIcon = navbarOpen ? CloseIcon : BarIcon

    return (
        <nav className={["text-center lg:text-right text-md"].join(' ')}>
            <button className={"block ml-auto group lg:hidden relative z-50 focus:outline-none"}
                    onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <MenuIcon className={"w-8 h-8 text-primary group-hover:text-secondary"} />
                <span className={"sr-only"}>
                    {navbarOpen ? text.menu?.closeLabel : text.menu?.openLabel}
                </span>
            </button>
            <ul className={[
                "flex bg-white fixed top-0 -translate-y-full transition-all left-0 overflow-y-auto h-screen w-full gap-10 flex-col justify-center lg:flex-row lg:flex lg:gap-4 xl:gap-6",
                (navbarOpen ? "!translate-y-0 shadow-xl" : ""),
            ].join(' ')}>
                {navData.primary?.items?.map((el,i) => (
                    <NavItem
                        key={i}
                        href={el.url}
                        blank={el.blank}
                        css={[
                            "block font-medium uppercase text-primary",
                            "hover:underline underline-offset-1 hover:underline-offset-8 decoration-primary",
                            "transition-all duration-150 ease-in hover:text-secondary",
                            (navbarOpen ? "text-4xl" : null),
                        ].join(' ')}
                        onClick={() => setNavbarOpen(false)}
                    >
                        {/* TODO : With icon */}
                        {el.label}
                    </NavItem>
                ))}
            </ul>
        </nav>
    )
}

export default PrimaryNav
