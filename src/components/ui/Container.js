import React from "react"
import PropTypes from "prop-types"

const Container = (props) => (
    <div className={["max-w-screen-xl mx-auto px-8 lg:px-16", props.css].join(' ')}>
        {props.children}
    </div>
)

Container.propTypes = {
    children: PropTypes.node.isRequired,
    css: PropTypes.string
}

export default Container
