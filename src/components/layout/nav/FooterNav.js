import data from '../../../../content/nav.json'

import NavItem from "./NavItem"
import PropTypes from "prop-types"

const FooterNav = (props) => (
    <nav className={props.css}>
        <ul className={"flex -mx-2"}>
            {data.footer?.items?.map((el,i) => (
                <NavItem
                    key={i}
                    href={el.url}
                    blank={el.blank}
                    css={"border-l border-white first:border-l-0 px-2 hover:underline"}
                    parentCss={"border-l first:border-l-0"}
                >
                    {el.label}
                </NavItem>
            ))}
        </ul>
    </nav>
)

FooterNav.defaultProps = {
    css: ``,
}

FooterNav.propTypes = {
    css: PropTypes.string,
}

export default FooterNav
