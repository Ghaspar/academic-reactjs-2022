import style from './styles.module.scss'
import { BsPencilSquare } from 'react-icons/bs';

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
                        <img 
                            src="https://avatars.githubusercontent.com/u/12697835?v=4" 
                            className={style.avatar}
                            alt="Lucas Gaspar foto perfil" 
                        />
                        <strong className="text-white">Lucas</strong>
                        <span>Web Developer</span>
                    </div>
                </article>
                <footer>
                    <a href="#">
                        <BsPencilSquare />
                        Editar meu perfil
                    </a>
                </footer>
            </aside>
        </>
    );
}