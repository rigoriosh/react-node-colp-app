import React from 'react'
import PropTypes from 'prop-types'

const ShowInfo = ({data}) => {
    return (
            <div className="mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-start">
                        <label className="col-sm-2 col-form-label"> <h5> First Name: </h5> </label>
                        {data.first_name}
                    </li>
                    <li className="list-group-item text-start">
                        <label className="col-sm-2 col-form-label"> <h5>Last Name: </h5></label>
                        {data.last_name}
                    </li>
                    <li className="list-group-item text-start">
                        <label className="col-sm-2 col-form-label"> <h5>Gender: </h5></label>
                        {data.gender}
                    </li>
                    <li className="list-group-item text-start">
                        <label className="col-sm-2 col-form-label"> <h5>Email: </h5> </label>
                        {data.email}
                    </li>
                    <li className="list-group-item text-start">
                        <label className="col-sm-2 col-form-label"> <h5>ip address: </h5> </label>
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
