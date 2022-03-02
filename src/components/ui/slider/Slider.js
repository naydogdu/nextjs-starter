import {useState} from "react"
import {useSwipeable} from "react-swipeable"
import SliderNavigation from "./SliderNavigation"
import SliderItem from "./SliderItem"
import SliderPagination from "./SliderPagination"

const mapItemCss = {
    def: {
        1: "w-full",
        2: "w-1/2",
        3: "w-1/3",
        4: "w-1/4",
        5: "w-1/5",
        6: "w-1/6",
    },
    md: {
        1: "md:w-full",
        2: "md:w-1/2",
        3: "md:w-1/3",
        4: "md:w-1/4",
        5: "md:w-1/5",
        6: "md:w-1/6",
    },
    lg: {
        1: "lg:w-full",
        2: "lg:w-1/2",
        3: "lg:w-1/3",
        4: "lg:w-1/4",
        5: "lg:w-1/5",
        6: "lg:w-1/6",
    },
    xl: {
        1: "xl:w-full",
        2: "xl:w-1/2",
        3: "xl:w-1/3",
        4: "xl:w-1/4",
        5: "xl:w-1/5",
        6: "xl:w-1/6",
    }
}

const mapVariations = {
    'def': {
        'slide': SliderItem,
    },
}

const Slider = props => {
    const slideType = props.slideType || 'def'
    const Slide = mapVariations[slideType].slide || mapVariations.def.slide
    const items = props.data || null
    const columns = {
        def: props.col || 1,
        md: props.mdCol || props.col || 1,
        lg: props.lgCol || props.mdCol || props.col || 1,
        xl: props.xlCol || props.lgCol || props.mdCol || props.col || 1,
    }

    const [active, setActive] = useState(props.active || 0)

    let activeMap = []
    items.map((el, x) => {
        activeMap.push(
            [(x > 1 ? (x-1)*-1 : (x > 0 ? '-' : 0)), (x > 0 && 99.9999), "%"].join('')
        )
    })

    function triggerScroll(e) {
        setActive(e)
    }

    function goToNextSlide() {
        if( active >= (items.length-1) ) {
            setActive(0)
        } else {
            setActive(active + 1)
        }
    }

    function goToPrevSlide() {
        if( active === 0 ) {
            setActive((items.length-1))
        } else {
            setActive(active - 1)
        }
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => goToNextSlide(),
        onSwipedRight: () => goToPrevSlide(),
        trackMouse: true,
    })

    return (
        <>
            <div
                className={["h-full relative select-none w-full md:w-auto", (props.overflow ? "" : "overflow-hidden")].join(' ')}
                {...swipeHandlers}
                style={{ touchAction: 'pan-y' }}
            >
                <ul className={["h-full flex select-auto flex-nowrap", props.wrapperCss].join(' ')}>
                    {items.map((el,i) => (
                        <Slide
                            key={i}
                            {...el}
                            active={i === active}
                            i={i}
                            style={{
                                transform: `translateX(var(--v))`,
                                ['--v']: activeMap[active],
                            }}
                            css={[
                                "flex-shrink-0 transition-all",
                                mapItemCss.def[columns.def],
                                mapItemCss.md[columns.md],
                                mapItemCss.lg[columns.lg],
                                mapItemCss.xl[columns.xl],
                                props.css,
                            ].join(' ')}
                            clickHandler={() => props.clickHandler ? props.clickHandler(i) : null}
                        />
                    ))}
                </ul>
            </div>
            {(items.length > 1) &&
                <div className={"flex items-center justify-center mt-4"}>
                    <SliderNavigation
                        data={items}
                        active={active}
                        clickHandler={(e) => triggerScroll(e)}
                        css={props.navCss}
                        navBtnCss={props.navBtnCss}
                        columns={columns}
                    >
                        <SliderPagination
                            length={items.length}
                            active={active}
                            clickHandler={(e) => triggerScroll(e)}
                            css={props.paginationCss}
                            columns={columns}
                        />
                    </SliderNavigation>
                </div>
            }
        </>
    )
}

export default Slider
