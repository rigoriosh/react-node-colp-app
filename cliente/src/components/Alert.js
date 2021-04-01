import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({text}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    )
}

Alert.propTypes = {
    text: PropTypes.string.isRequired
}

export default Alert
