import Arrow from "../../../images/arrow.svg"

const baseCss = "text-primary flex items-center justify-center h-full w-full focus:outline-none hover:opacity-75"
const parentCss = "pointer-events-auto flex flex-col w-14 h-14 rounded-full flex-shrink-0"

const SliderNavigation = props => {
    const prevSlide = (props.data[Math.ceil(props.active-1)] ? Math.ceil(props.active-1) : (props.loop ? props.data?.length - 1 : null))
    const nextSlide = (props.data[Math.ceil(props.active+1)] ? Math.ceil(props.active+1) : (props.loop ? 0 : null))

    const ulCss = [
        "flex items-center justify-between",
        (props.columns?.def && props.data?.length < Math.abs(props.columns.def + 1) ? "hidden" : ""),
        (props.columns?.md && props.data?.length < Math.abs(props.columns.md + 1) ? "md:hidden" : ""),
        (props.columns?.lg && props.data?.length < Math.abs(props.columns.lg + 1) ? "lg:hidden" : ""),
        (props.columns?.xl && props.data?.length < Math.abs(props.columns.xl + 1) ? "xl:hidden" : ""),
    ].join(' ')

    return (
        <nav className={["pointer-events-none mx-auto", props.css].join(' ')}>
            <ul className={ulCss}>
                <li className={parentCss}>
                   <button
                       onClick={() => prevSlide !== null ? props.clickHandler(prevSlide) : null}
                       className={[
                           baseCss,
                           props.navBtnCss,
                           (prevSlide === null ? "cursor-default opacity-25 hover:!opacity-25" : "pointer-events-auto"),
                       ].join(' ')}
                   >
                       <span className={"sr-only"}>Précédent</span>
                       <Arrow className={["h-6 w-6 lg:w-9 lg:h-9 translate-x-[-3px] -rotate-90 scale-x-[-1]"].join(' ')} />
                   </button>
                </li>
                {props.children}
                <li className={parentCss}>
                    <button
                        onClick={() => nextSlide !== null ? props.clickHandler(nextSlide) : null}
                        className={[
                            baseCss,
                            props.navBtnCss,
                            (nextSlide === null ? "cursor-default opacity-25 pointer-events-none hover:!opacity-25" : "pointer-events-auto"),
                            (nextSlide !== null && props.columns?.def && props.active > Math.abs(props.data?.length - props.columns.def - 1) ? "cursor-default opacity-25 hover:!opacity-25 pointer-events-none" : ""),
                            (nextSlide !== null && props.columns?.md && props.active > Math.abs(props.data?.length - props.columns.md - 1) ? "md:cursor-default md:opacity-25 md:hover:!opacity-25 md:pointer-events-none" : ""),
                            (nextSlide !== null && props.columns?.lg && props.active > Math.abs(props.data?.length - props.columns.lg - 1) ? "lg:cursor-default lg:opacity-25 lg:hover:!opacity-25 lg:pointer-events-none" : ""),
                            (nextSlide !== null && props.columns?.xl && props.active > Math.abs(props.data?.length - props.columns.xl - 1) ? "xl:cursor-default xl:opacity-25 xl:hover:!opacity-25 xl:pointer-events-none" : ""),
                        ].join(' ')}
                    >
                        <span className={"sr-only"}>Suivant</span>
                        <Arrow className={"h-6 w-6 lg:w-9 lg:h-9 rotate-90 translate-x-[3px]"} />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default SliderNavigation
