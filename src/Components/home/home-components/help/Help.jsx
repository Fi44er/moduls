import styles from "./Help.module.css";
import RunningOver from "../../../global-components/running-over/RunningOver";
import Point from "../../../global-components/point/Point";
import Button from "../../../global-components/button/Button";

const Help = () => {
  return (
    <RunningOver
      name="Полностью берём вопрос логистики на себя"
      img="/public/source/main.png"
    >
      <div className={styles.RunningOverInfo}>
        <h3>
          Вам больше не придется ломать голову над всем, что связано с ввозом и
          вывозом грузов.
        </h3>
        <p className={styles.RunningOverInfoP}>
          Мы знаем ответы на все вопросы, например:
        </p>
        <div className={styles.RunningOverQuestions}>
          <Point
            icon="/public/source/icon/airplane.png"
            info="какой способ доставки груза выбрать, чтобы перевозка не вышла слишком дорогой или слишком долгой;"
          />
          <Point
            icon="/public/source/icon/document.png"
            info="как правильно заполнить документы или какие нужны сертификаты на вашу продукцию;"
          />
          <Point
            icon="/public/source/icon/delivery.png"
            info="как с минимальными рисками доставить ценный груз;"
          />
          <Point
            icon="/public/source/icon/cargo.png"
            info="как отслеживать статус груза."
          />
        </div>
        <p className={styles.RunningOverInfoP}>
          Мы поможем вам освободить время на масштабирование бизнеса и
          привлечение клиентов.
        </p>
        <div className="RunningOverBtn">
          <p></p>
          <Button>button</Button>
        </div>
      </div>
      <div>
        <img src="/public/source/image.png" alt="" />
      </div>
    </RunningOver>
  );
};

export default Help;
