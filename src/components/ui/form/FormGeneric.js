import source from "../../../../content/main.json"
import {Button} from "../Button";

const FormGeneric = props => {
    const formData = source.forms || null
    const formName = props.name || "untitled"
    const subject = props.subject || formData.subject
    const recipients = props.recipients ? [...props.recipients, ...formData.recipients] : formData.recipients

    return (
        <form
            name={formName}
            method="POST"
            data-netlify="true"
            action={props.action || `/${formName}?success=1`}
        >
            <input type="hidden" name="form-name" value={formName} />
            <input type="hidden" name="subject" value={subject} />
            <div className={props.css}>
                {props.children}
            </div>
            <Button type={"submit"} children={props.submit || "Send"} />
        </form>
    )
}

export default FormGeneric
