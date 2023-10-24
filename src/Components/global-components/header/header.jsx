import Button from "../button/Button"
import style from "./Header.module.css"

function Header({ color }) {
  return (
    <header className={style.headerBlock}>
      <div className={style.headerItems}>
        <div className={style.headerMenu}>
          <button>
            <img src="/public/source/icon/menu.png" alt="menu" />
          </button>
        </div>
        <div className={style.headerLogo}>
          <a href="!#" style={{ color: color }}>
            <div>
              <h3 style={{ color: color }}>RosLogistic</h3>
              <p style={{ color: color }}>
                Логистическая<br></br> компания
              </p>
            </div>
          </a>
        </div>
        <div className={style.headerLang}>
          <button style={{ color: color }}>RU</button>
          <button style={{ color: color }}>EN</button>
          <button style={{ color: color }}>字</button>
        </div>
        <div className={style.headerNumber}>
          <a href="">
            <h3 style={{ color: color }}>8 000 000 00 00</h3>
            <p style={{ color: color }}>Федеральный</p>
          </a>
          <a href="">
            <h3 style={{ color: color }}>8 000 000 00 00</h3>
            <p style={{ color: color }}>Санкт-Петербург</p>
          </a>
        </div>
        <div className={style.lookPrice}>
          <Button backBtn="white" buttonImg="black">
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
