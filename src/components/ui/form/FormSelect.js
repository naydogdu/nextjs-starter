import slugify from "../../../utils/slugify"
import {INPUT_BASE_CSS} from "../../../utils/constant"
import Arrow from "../../../images/arrow.svg"

const FormSelect = (props) => {

    return (
        <div className={"group relative"}>
            <select
                className={[INPUT_BASE_CSS, "invalid:text-black/50 focus:text-black cursor-pointer", props.inputCss].join(' ')}
                placeholder={[(props.placeholder || props.label || "-"), (props.required ? "*" : null)].join('')}
                name={slugify(props.name || props.label || props.placeholder)}
                required={props.required || null}
                onChange={e => props.onChange ? props.onChange(e.target.value) : null}
            >
                {props.placeholder && <option disabled defaultValue value={""} children={props.placeholder} />}
                {props.options.map((el, x) => (
                    <option key={x} value={el.value || slugify(el)}>{el.label || el}</option>
                ))}
            </select>
            <Arrow className={[
                "absolute border-gray/25 group-hover:border-gray/50 peer-focus:border-black peer-focus:scale-y-100 border-2 border-l-0 p-4 pl-2 pr-6 pointer-events-none transform scale-y-[-1] top-0 right-0 h-full w-12 bg-white",
            ].join(' ')} />
        </div>
    )
}

export default FormSelect
