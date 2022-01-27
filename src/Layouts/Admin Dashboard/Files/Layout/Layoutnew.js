import React from 'react'
import Sidebar from '../Views/Sidebar'

const LayoutnewForAdmin = (props) => {
    return(
        <div>
            <Sidebar>
            {props.children}
            </Sidebar>
        </div>
    )
}


export default LayoutnewForAdmin
