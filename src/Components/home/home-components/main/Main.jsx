import style from "./Main.module.css"
function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={style.main}>
        <div className={style.textButton}>
          <h1>Доставим ваш груз и оформим по всем правилам</h1>
          <button>
            <div>
              <p>Начать игру</p>
              <img
                src="/public/source/icon/arrow-mini-black.png"
                alt="arrow-mini"
              />
            </div>
          </button>
        </div>
        <div className={style.text}>
          <p>
            Свидетельство Таможенного представителя Федеральной таможенной
            службы №1349
          </p>
        </div>
      </div>
    </div>
  )
}
export default Main
