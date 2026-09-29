interface ListaCardProps {
    title: string,
    list: string[],
    numbered: boolean
}

function ListaCard(props: ListaCardProps) {
    return (<>
        <h2>{props.title}</h2>

        <ul>
            {props.list.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </>)
}

export default ListaCard;