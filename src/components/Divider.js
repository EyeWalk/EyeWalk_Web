const Divider = ({ color, height, width, borderRadius }) => {
    return (
        <div style={{ width: width, border: `${height} solid ${color}`, margin: "15px 0", borderRadius: borderRadius }}></div>
    )
}

export default Divider