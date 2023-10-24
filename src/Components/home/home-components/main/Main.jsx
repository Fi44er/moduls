import Button from "../../../global-components/button/Button"
import style from "./Main.module.css"
function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={style.main}>
        <div className={style.textButton}>
          <h1>Доставим ваш груз и оформим по всем правилам</h1>
          <Button widthBtn={270} buttonImg="black" backBtn="white">Начать игру</Button>
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
