const {sha256} = require("js-sha256")

// TODO : Make nonce customizable (.env)
export const nonce = 'temp'

const hash = (mess, k) => {
    const key = k || nonce
    const h = sha256.hmac.create(key)
    h.update(mess)

    return h.hex()
}

export default hash
