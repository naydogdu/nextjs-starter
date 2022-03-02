import Rolling from "../../../images/rolling.svg"

const SliderItem = props => {
    console.log('SliderItem.props', props)

    return (
        <li
            className={["flex flex-col w-full", props.css].join(' ')}
            style={props.style}
        >
            <button
                className={["relative group w-full flex flex-col", props.clickHandler ? "hover:opacity-90" : ""].join(' ')}
                onClick={props.clickHandler || null}
            >
                <Rolling className={"absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-24 text-primary"} />
                <picture className={["relative w-full", (props.ratio || "pb-2/3")].join(' ')}>
                    <img alt={props.alt || ""} src={props.src} className={"h-full w-full absolute inset-0 object-cover"} />
                </picture>
            </button>
        </li>
    )
}

export default SliderItem
