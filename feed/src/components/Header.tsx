import style from './styles.module.scss'

export function Header() {

    return(
        <>
            <header className={style.header + " bg-secondary"}>
                <div className="container">
                    <div className="row">
                        <h1>header teste</h1>
                    </div>
                </div>
            </header>
        </>
    );
}