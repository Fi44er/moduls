import "./Button.css"

const Button = ({ children, widthBtn, colorBtn, buttonImg, backBtn }) => {
  return (
    <button
      id="compButton_1i"
      style={{
        width: widthBtn,
        background: backBtn,
        color: colorBtn
      }}
    >
      <div id="compButtonText_1i">{children}</div>
      {/* <img src="/public/source/icon/arrow-mini.png" alt="" /> */}
      <div className="compButtonImg_1i" id={`compButtonImgArrow_${buttonImg}`}></div>
    </button>
  )
}

Button.defaultProps = {
  widthBtn: 294,
  backBtn: '#FECA57',
  buttonImg: 'none',
}

export default Button
