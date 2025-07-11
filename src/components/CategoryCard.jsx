const CategoryCard = ({ onClick, image, title, active }) => {
    const activeHeightClasses = 'h-full'
    const inactiveHeightClasses = 'h-[85%]'
    const activeFontClasses = 'font-bold text-lg'
    const inactiveFontClasses = 'font-medium text-sm'
    return (
        <div
            data-slide-name={title}
            onClick={onClick}
            className="h-full cursor-pointer mb-5"
        >
            <div className={`cursor-pointer ${active ? activeHeightClasses : inactiveHeightClasses}`}>
                <img src={image} className="rounded-2xl w-1/4 h-[440px] object-cover mx-auto" />
            </div>
        </div>
    )
}

export default CategoryCard;