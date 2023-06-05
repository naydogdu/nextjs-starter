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
            <button
                className={"block ml-auto group lg:hidden relative z-50 focus:outline-none"}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <MenuIcon className={"w-8 h-8 text-primary group-hover:text-secondary"} />
                <span className={"sr-only"}>
                    {navbarOpen ? text.menu?.closeLabel : text.menu?.openLabel}
                </span>
            </button>
            <ul className={[
                "flex flex-col justify-center transition-all w-full gap-10",
                "lg:flex-row lg:gap-4 xl:gap-6",
                "max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bg-white max-lg:-translate-y-full max-lg:overflow-y-auto max-lg:h-screen",
                (navbarOpen ? "!translate-y-0 shadow-xl" : ""),
            ].join(' ')}>
                {navData.primary?.items?.map((el,i) => (
                    <NavItem
                        key={i}
                        href={el.url}
                        blank={el.blank}
                        css={[
                            "block font-medium uppercase text-primary",
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
