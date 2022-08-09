import PropTypes from "prop-types"
import FormTextarea from "./FormTextarea"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"

const FormField = props => {
    const Component = props.type === 'textarea' ? FormTextarea : props.type === 'select' ? FormSelect : FormInput

    return (
        <label className={props.css}>
            <span
                className={props.label ? "block" : "sr-only"}
                children={props.label || props.placeholder}
            />
            <Component {...props} inputCss={props.inputCss} />
        </label>
    )
}

FormField.defaultProps = {
    id: ``,
    label: ``,
    type: `text`,
    required: false,
    placeholder: ``,
    css: ``,
    inputCss: ``,
    pattern: ``,
    title: ``,
}

FormField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    css: PropTypes.string,
    inputCss: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
}

export default FormField
