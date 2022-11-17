
export function Post (props:any){
    console.log(props);
    return(
        <>
            <h2>Author: {props.author}</h2>
            <p>Coments: {props.coments}</p>
        </>
    )

}