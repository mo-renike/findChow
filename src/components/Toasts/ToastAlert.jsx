import React from 'react'


const ToastAlert = ({ title }) => {
    const style = {
        position: "fixed",
        top: "0",
        right: "0",
      
    }
    // set a timer to remove the toast after 3 seconds
    setTimeout(() => {
        title = ""
    }, 3000)

    return (
        <div style={style}>
            {title}
        </div>
    )
}

export default ToastAlert