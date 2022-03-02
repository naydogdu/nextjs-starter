const SliderPagination = props => {
    if( props.length < 2 ) {
        return null
    }

    const getActive = (screen = 'def') => {
        if( !props.columns[screen] ){
            return props.active
        }

        return Math.abs(props.active / props.columns[screen])
    }

    function goTo(target) {
        props.clickHandler(target)
    }

    return (
        <nav className={["relative pointer-events-none mx-auto", props.css].join(' ')}>
            <ul className={"flex items-center gap-4 pointer-events-auto"}>
                {[...Array(props.length)].map((el, x) => (
                    <li className={[
                        "h-3 w-3 border-primary border-2 rounded-full hover:bg-primary",
                        (getActive() === x ? "bg-primary" : ""),
                        (props.columns?.def && x > Math.abs(props.length - props.columns.def) ? "!hidden" : ""),
                        (props.columns?.md && x > Math.abs(props.length - props.columns.md) ? "md:!hidden" : ""),
                        (props.columns?.lg && x > Math.abs(props.length - props.columns.lg) ? "lg:!hidden" : ""),
                        (props.columns?.xl && x > Math.abs(props.length - props.columns.xl) ? "xl:!hidden" : ""),
                    ].join(' ')} data-x={x} key={x}>
                        <button
                            onClick={() => goTo(x)}
                            className={["block h-full w-full"].join(' ')}
                        >
                            <span className={"sr-only"}>X</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default SliderPagination
