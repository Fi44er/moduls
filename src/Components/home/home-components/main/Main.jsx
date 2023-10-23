import style from './Main.module.css'
function Main (){
    return (
        <div className={style.mainBlock}>
            <div className={style.main}>
                <div className={style.textButton}>
                    <h2>
                        Доставим ваш груз и оформим по всем правилам
                    </h2>
                    <button>
                        <div>
                            <p>Начать игру</p>
                            <img src="../../../../../public/source/icon/arrow-mini.png" alt="arrow-mini" />
                        </div>  
                    </button>
                </div>
                <div className={style.text}>
                    <p>
                        Свидетельство Таможенного представителя Федеральной таможенной службы №1349
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Main