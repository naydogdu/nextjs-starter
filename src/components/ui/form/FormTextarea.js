import slugify from "../../../utils/slugify"
import {INPUT_BASE_CSS} from "../../../utils/constant";

const FormTextarea = (props) => {

    return (
        <textarea
            className={[INPUT_BASE_CSS, props.inputCss].join(' ')}
            placeholder={[(props.placeholder || props.label || "-"), (props.required ? "*" : null)].join('')}
            name={slugify(props.name || props.label || props.placeholder)}
            required={props.required || null}
            rows={props.rows || 8}
        />
    )
}

export default FormTextarea
