import "./Button.css"

const Button = ({
  children,
  widthBtn,
  colorBtn,
  buttonImg,
  backBtn,
  weightBtn,
  sizeBtn,
}) => {
  return (
    <button
      id="compButton_1i"
      style={{
        width: widthBtn,
        background: backBtn,
        color: colorBtn,
      }}
    >
      <div
        id="compButtonText_1i"
        style={{
          fontWeight: weightBtn,
          fontSize: sizeBtn,
        }}
      >
        {children}
      </div>
      <div><img src={`/public/source/icon/arrow-mini-${buttonImg}.png`} alt="" /></div>
    </button>
  )
}

Button.defaultProps = {
  widthBtn: 294,
  backBtn: "#FECA57",
  buttonImg: "none",
  colorBtn: "#000",
  weightBtn: 700,
  sizeBtn: 16,
}

export default Button
