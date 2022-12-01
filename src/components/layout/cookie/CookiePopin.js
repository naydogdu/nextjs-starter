import data from "../../../../content/main.json"

import Link from "next/link"
import {Button} from "../../ui/Button"

const CookiePopin = ({dispatch}) => (
    <aside className={[
        "fixed z-50 bottom-0 text-center lg:text-left right-0 bg-primary text-white py-4 px-6",
        "flex flex-col gap-4 lg:flex-row lg:items-center lg:max-w-screen-lg",
    ].join(' ')}>
        <p className={"text-sm leading-relaxed"}>
            {data.consent?.content}
            {" "}
            {data.consent?.moreLink &&
                <Link href={data.consent.moreLink}>
                    <a><strong>{data.consent?.more}</strong></a>
                </Link>
            }
        </p>
        <span className={"flex-shrink-0 flex items-center justify-center gap-2"}>
            <Button clickHandler={() => dispatch({type: 'acceptAll'})}>{data.consent?.accept}</Button>
            <Button clickHandler={() => dispatch({type: 'declineAll'})}>{data.consent?.decline}</Button>
            <Button clickHandler={() => dispatch({type: 'showManageCookiePopup'})}>{data.consent?.manage}</Button>
        </span>
    </aside>
)

export default CookiePopin
