interface PictureCardProps {
    title: string,
    img_source: string,
    text: string
}

function PictureCard(props: PictureCardProps) {
    return (<>
        <h2>{props.title}</h2>
        <img src={props.img_source} />
        <p>{props.text}</p>
    </>);
}

export default PictureCard;