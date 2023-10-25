import Point from "../../../global-components/point/Point"
import style from "./Advantag.module.css"

function Advantag() {
  return (
    <div className={style.advantagBlock}>
      <div className={style.advantagHeader}>
        <h1>
          RosLogistic — <br /> бесконечные возможности
        </h1>
        <img src="/public/source/line.png" alt="" />
      </div>
      <div className={style.Inside}>
        <div className={style.Text}>
          <h3>
            Мы предлагаем комплексные логистические решения всеми видами
            транспорта и оптимизируем цепи поставок для импорта и экспорта
            грузов.
          </h3>
          <p>
            Предоставляем грузоперевозки и таможенное оформление по всей
            России.  Благодаря тому, что у нас заключены договоры с судоходными
            морскими линиями, мы осуществляем внутрипортовое экспедирование на
            терминалах всех морских портов, в том числе Санкт-Петербурга,
            Новороссийска, Владивостока.<br></br>
            Мы обеспечиваем таможенное оформление грузов, перевозимых
            автотранспортом, в любом таможенном пункте Российской Федерации,
            независимо от региона доставки.<br></br>
            Это значит, что мы контролируем весь процесс перевозки груза от
            момента подписания контракта до порожнего контейнера.
          </p>
        </div>
        <div className={style.Img}>
          <Point
            icon="/public/source/icon/logica.png"
            info="Международняя логистика"
            weight={700}
            size={28}
          />
          <Point
            icon="/public/source/icon/logica.png"
            info="Международняя логистика"
            weight={700}
            size={28}
          />
          <Point
            icon="/public/source/icon/logica.png"
            info="Международняя логистика"
            weight={700}
            size={28}
          />
          <Point
            icon="/public/source/icon/logica.png"
            info="Международняя логистика"
            weight={700}
            size={28}
          />
          <Point
            icon="/public/source/icon/logica.png"
            info="Международняя логистика"
            weight={700}
            size={28}
          />
        </div>
      </div>
    </div>
  )
}

export default Advantag
