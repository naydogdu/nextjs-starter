import PropTypes from "prop-types"
import Link from "next/link"

const baseClasses = "group inline-flex items-center gap-2 uppercase transition-all duration-300 ease-in data-[disabled]:opacity-50 disabled:opacity-50 disabled:cursor-not-allowed data-[disabled]:cursor-not-allowed focus:ring-2"

const sizeMap = [
    'text-xs font-medium leading-none py-2 px-4',
    'text-sm font-bold leading-none py-2 px-4',
    'text-base font-bold leading-normal py-3 px-6',
]

const colorMap = {
    primary: 'text-white bg-primary hover:bg-secondary disabled:bg-primary data-[disabled]:bg-primary focus:ring-secondary',
    secondary: 'text-white bg-secondary hover:text-primary disabled:text-white data-[disabled]:text-white focus:ring-primary',
    white: 'text-primary bg-white hover:bg-secondary disabled:bg-white data-[disabled]:bg-white focus:ring-secondary',
    gray: 'text-primary bg-gray hover:bg-secondary disabled:bg-gray data-[disabled]:bg-gray focus:ring-secondary',
    wide: 'text-primary bg-white hover:text-secondary disabled:text-primary data-[disabled]:text-primary focus:ring-secondary',
}

const Button = (props) => {
    const computeSize = sizeMap[props.size] ? sizeMap[props.size] : sizeMap[1]
    const computeColor = colorMap[props.theme] ? colorMap[props.theme] : colorMap.primary

    return (
        <button
            className={[baseClasses, computeColor, computeSize, props.css].join(' ')}
            type={props.type}
            style={props.style}
            onClick={props.clickHandler ? props.clickHandler : null}
            disabled={props.disabled || null}
        >
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    type: `button`,
    css: ``,
    style: {},
    size: 1,
    theme: `primary`,
    disabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    css: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    clickHandler: PropTypes.func,
    size: PropTypes.number,
    theme: PropTypes.string,
    disabled: PropTypes.bool,
}

const LinkButton = (props) => {
    const computeSize = sizeMap[props?.size] ? sizeMap[props.size] : sizeMap[1]
    const computeColor = colorMap[props?.theme] ? colorMap[props.theme] : colorMap.primary
    const computeTarget = props?.target ? '_blank' : null
    const computeRel = props?.target ? 'noopener noreferrer' : null

    return (
        <Link href={props.href}>
            <a
                className={[baseClasses, computeColor, computeSize, props.css].join(' ')}
                target={computeTarget}
                rel={computeRel}
                data-disabled={props.disabled ? '' : null}
            >
                {props.children}
            </a>
        </Link>
    )
}

LinkButton.defaultProps = {
    css: ``,
    href: `/`,
    size: 1,
    theme: `primary`,
    target: false,
    disabled: false,
}

LinkButton.propTypes = {
    children: PropTypes.node.isRequired,
    css: PropTypes.string,
    href: PropTypes.string,
    size: PropTypes.number,
    theme: PropTypes.string,
    target: PropTypes.bool,
    disabled: PropTypes.bool,
}

export {
    Button,
    LinkButton
}
