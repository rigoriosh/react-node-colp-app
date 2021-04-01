import React from 'react'
import PropTypes from 'prop-types'

const Table = ({data}) => {
    return (
        <div>
            <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Password</th>                                    
                                    <th scope="col">User name</th>
                                </tr>
                            </thead>                    
                            <tbody>
                                {
                                    data.map(({id, first_name, last_name}) => 
                                        <tr key={id}>
                                            <th scope="row">{id}</th>                                            
                                            <td>{last_name}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
        </div>
    )
}

Table.propTypes = {
    data: PropTypes.array.isRequired
}

export default Table
