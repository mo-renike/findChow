import React from 'react'


const ToastAlert = ({ title }) => {
    const style = {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "1000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={style}>
            {title}
        </div>
    )
}

export default ToastAlert