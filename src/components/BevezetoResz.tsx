interface BevezetoProps {
    title: string
    children: React.ReactNode;
}

function BevezetoResz(props: BevezetoProps) {
    return (<>
        <div>
            <div>
                <h1>{props.title}</h1>
            </div>

            <div>{props.children} </div>
        </div>
    </>)
}

export default BevezetoResz;