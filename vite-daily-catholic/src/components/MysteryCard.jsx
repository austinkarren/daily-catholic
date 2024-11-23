const MysteryCard = ({image, title}) => {
    return (
        <div className="flex flex-col items-center w-1/5 cursor-pointer ">
            <div className="">
                <img src={image} className="rounded-2xl h-[330px] object-cover"/>
            </div>
            <p className="capitalize text-center text-white">{title}</p>
        </div>
    )
}

export default MysteryCard;