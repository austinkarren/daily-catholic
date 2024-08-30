const MysteryCard = (props) => {
    return (
        <div className="flex flex-col items-center w-1/4">
            <div className="">
                <img src={props.image} className="rounded-2xl"/>
            </div>
            <p className="capitalize">{props.title}</p>
        </div>
    )
}

export default MysteryCard;