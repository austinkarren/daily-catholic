const CategoryCard = ({onClick, image, title}) => {
    return (
        <div onClick={onClick} className="flex flex-col items-center w-1/4 h-full">
            <div className="w-full h-full">
                <img src={image} className="rounded-2xl w-full h-full object-cover"/>
            </div>
            <p className="capitalize text-center">{title}</p>
        </div>
    )
}

export default CategoryCard;