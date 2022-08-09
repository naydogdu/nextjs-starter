import slugify from "../../../utils/slugify"
import {INPUT_BASE_CSS} from "../../../utils/constant"

const FormInput = (props) => {

    return (
        <input
            className={[INPUT_BASE_CSS, props.inputCss].join(' ')}
            type={props.type}
            placeholder={[(props.placeholder || props.label || "-"), (props.required ? "*" : null)].join('')}
            name={slugify(props.name || props.label || props.placeholder)}
            required={props.required || null}
            pattern={props.pattern || null}
            title={props.title || null}
        />
    )
}

export default FormInput
