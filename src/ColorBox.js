const ColorBox = ({ colorValue }) => {
    return (
        <div
            className="colorbox"
            style={{ backgroundColor: colorValue }}
        >
            <h3 id="colorName">{!colorValue ? "Empty Value" : colorValue}</h3>
        </div>
    )
}
ColorBox.defaultProps = {
    colorValue: "Empty Color Value"
}
export default ColorBox
