import React from 'react'
import PropTypes from 'prop-types'

const ShowInfo = ({data}) => {
    return (
            <div className="mt-3">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <label className="col-sm-2 col-form-label">first_name:</label>
                        {data.first_name}
                    </li>
                    <li className="list-group-item">
                        <label className="col-sm-2 col-form-label">last_name</label>
                        {data.last_name}
                    </li>
                    <li className="list-group-item">
                        <label className="col-sm-2 col-form-label">gender</label>
                        {data.gender}
                    </li>
                    <li className="list-group-item">
                        <label className="col-sm-2 col-form-label">email:</label>
                        {data.email}
                    </li>
                    <li className="list-group-item">
                        <label className="col-sm-2 col-form-label">ip_address</label>
                        {data.ip_address}
                    </li>
                </ul>
            </div>
    )
}

ShowInfo.propTypes = {
    data: PropTypes.object.isRequired
}

export default ShowInfo
