interface TablaProps {
    lista: string[]
}

function Tabla(props: TablaProps) {
    let tablaLista: string[][] = []
    for (let i = 0; i < props.lista.length; i += 3) {

        tablaLista.push(props.lista.slice(i, i + 3));
    }
    console.log(tablaLista);

    return (<>
        <table className="table table-bordered">
            {tablaLista.map(row => (
                <tr>{row.map(cell => (<td>{cell}</td>))}</tr>
            ))}
        </table>
    </>)
}

export default Tabla;