import style from "./Advantages.module.css";

function Advantages() {
  return (
    <div className={style.advantagesBlock}>
      <div className={style.advantagesInside}>
        <div className={style.advantagesText}>
          <h3>
            Вы занимаетесь бизнесом —<br></br>мы занимаемся вашим грузом
          </h3>
          <img src="/public/source/line.png" alt="" />
        </div>
        <div className={style.advantagesImg}>
          <div className={style.advantagesImgDiv}>
            <img src="/public/source/icon/box.png" alt="" />
            <p>Поможем привезти тестовую партию товара из любого уголка мира</p>
          </div>
          <div className={style.advantagesImgDiv}>
            <img src="/public/source/icon/cargo-ship.png" alt="" />
            <p>
              Импортируем груз из-за границы по всем правилам и с минимальными
              рисками
            </p>
          </div>
          <div className={style.advantagesImgDiv}>
            <img src="/public/source/icon/world.png" alt="" />
            <p>Организуем экспорт вашей продукции и товаров по всему миру</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Advantages;
