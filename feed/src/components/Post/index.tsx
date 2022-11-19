import style from './styles.module.scss'

export function Post (props:any){
    return(
        <>
            <article>
                <header>
                    <div className={style.autor}>
                        <img 
                            src="https://avatars.githubusercontent.com/u/12697835?v=4" 
                            className={style.avatar}
                            alt="" 
                        />
                        <div className="authorInfos">
                            <strong>Lucas Gaspar</strong>
                            <span>Web Developer</span>
                        </div>
                    </div>
                    <time 
                        dateTime="2022-11-19 12:14:00"
                        title="19 de Novembro"
                    >
                        Publicado há 1h
                    </time>
                </header>
                <div className={style.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>👉 <a href="#">jane.design/doctorcare</a></p>
                    <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
                </div>
            </article>
            <h2>Author: {props.author}</h2>
            <p>Coments: {props.coments}</p>
        </>
    )

}