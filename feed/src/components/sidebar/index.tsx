import style from './styles.module.scss'

export function Sidebar(){

    return(
        <>
            <aside className={style.sidebar}>
                <img 
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    className={style.cover}
                    alt="background perfil" 
                />
                <article>
                    <div className={style.profile + " d-flex flex-column text-center"}>
                        <strong className="text-white">Lucas</strong>
                        <span>Web Developer</span>
                    </div>
                </article>
                <footer>
                    <a href="#">
                        <i className="bi bi-pencil-square"></i>
                        Editar Perfil
                    </a>
                </footer>
            </aside>
        </>
    );
}