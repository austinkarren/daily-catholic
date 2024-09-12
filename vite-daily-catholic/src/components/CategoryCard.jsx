const CategoryCard = ({ onClick, image, title, active }) => {
    const activeHeightClasses = 'h-full'
    const inactiveHeightClasses = 'h-[85%]'
    const activeFontClasses = 'font-bold text-lg'
    const inactiveFontClasses = 'font-medium text-sm'
    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center w-1/4 h-full cursor-pointer"
        >
            <div className={`flex flex-col items-center w-full cursor-pointer ${active ? activeHeightClasses : inactiveHeightClasses}`}>
                <img src={image} className="rounded-2xl w-full h-full object-cover" />
            </div>
            <p className={`capitalize text-center ${active ? activeFontClasses : inactiveFontClasses}`}>{title}</p>
        </div>
    )
}

export default CategoryCard;