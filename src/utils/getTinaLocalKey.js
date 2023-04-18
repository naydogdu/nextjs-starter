import slugify from "./slugify"
import main from "../../content/main.json"

const getTinaLocalKey = `tina_admin_${slugify(main.app.siteName)}`

export default getTinaLocalKey
