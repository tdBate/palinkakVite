interface ListaCardProps {
    title: string,
    list: string[],
    numbered: boolean
}

function ListaCard(props: ListaCardProps) {
    const classLi = `list-group ${props.numbered ? "list-group-numbered" : ""}`

    return (<>
        <h2>{props.title}</h2>

        <ol className={classLi}>
            {props.list.map(item => (
                <li className="list-group-item">{item}</li>
            ))}
        </ol>
    </>)
}

export default ListaCard;