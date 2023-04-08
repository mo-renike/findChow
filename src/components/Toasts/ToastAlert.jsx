
const ToastAlert = ({ title }) => {
    const style = {
        position: "fixed",
        top: "90px",
        right: "10px",
        width: "auto",
        height: "50px",
        backgroundColor: "#ecd444",
        color: "#af1b3f",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        zIndex: "1000",
        transition: "all 0.5s ease-in-out",
        boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.75)",
    }


    return (
        <div style={style}>
            {" "} {title} {" "}
        </div>
    )
}

export default ToastAlert
