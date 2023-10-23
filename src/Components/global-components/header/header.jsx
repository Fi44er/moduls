import style from "./Header.module.css"

function Header () {
    return (
        
        <header className={style.headerBlock}>
            <div className={style.headerItems}>
                <div className={style.headerMenu}>
                    <button>
                        <img src="/public/source/icon/menu.png" alt="menu" />
                    </button>
                </div>
                <div className={style.headerLogo}>
                    <a href="">
                        <div>
                            <h3>
                                RosLogistic
                            </h3>
                            <p>
                                Логистическая<br></br> компания
                            </p>
                        </div>
                    </a>
                </div>
                <div className={style.headerLang}>
                    <button>
                        RU
                    </button>
                    <button>
                        EN
                    </button>
                    <button>
                        字
                    </button>
                </div>
                <div className={style.headerNumber}>
                    <a href="">
                        <h3>8 000 000 00 00</h3>
                        <p>Федеральный</p>
                    </a>
                    <a href="">
                        <h3>8 000 000 00 00</h3>
                        <p>Санкт-Петербург</p>
                    </a>
                </div>
                <div className={style.lookPrice}>
                    <button>
                        <div>
                        <p>Рассчитать стоимость</p>
                        <img src="/public/source/icon/arrow-mini-white.png" alt="" />
                        </div>
                    </button>
                </div>
            </div>
         </header>
    )
}

export default Header