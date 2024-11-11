const CategoryCard = ({ onClick, image, title, active }) => {
    const activeHeightClasses = 'h-full'
    const inactiveHeightClasses = 'h-[85%]'
    const activeFontClasses = 'font-bold text-lg'
    const inactiveFontClasses = 'font-medium text-sm'
    return (
        <div
            data-slide-name={title}
            onClick={onClick}
            className="h-full cursor-pointer"
        >
            <div className={`cursor-pointer ${active ? activeHeightClasses : inactiveHeightClasses}`}>
                <img src={image} className="rounded-2xl w-full h-full object-cover" />
            </div>
            <p className={`capitalize text-center text-white ${active ? activeFontClasses : inactiveFontClasses}`}>{title}</p>
        </div>
    )
}

export default CategoryCard;