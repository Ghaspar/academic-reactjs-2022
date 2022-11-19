import style from './styles.module.scss'
import igniteLogo from '../assets/images/Ignite_simbol.svg'

export function Header() {

    return(
        <>
            <header className={style.header + " bg-secondary py-3"}>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={igniteLogo} className={style.logo + " me-2"} alt="logo" />
                        <h1>Ignite Feed</h1>
                    </div>
                </div>
            </header>
        </>
    );
}