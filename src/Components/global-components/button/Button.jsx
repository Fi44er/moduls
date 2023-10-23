import"./Button.module.css"

const Button = ({ styleBtn, children }) => {

  return (
    <button className={styleBtn}>
      {children}
      <img src="/public/source/icon/arrow-mini.png" alt="" />
    </button>
  )
}

export default Button
