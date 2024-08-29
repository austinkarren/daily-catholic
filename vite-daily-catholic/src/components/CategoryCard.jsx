const CategoryCard = (props) => {
    return (
        <div className="flex flex-col w-1/4">
            {/* <div><img></img></div>  */}
            <p className="capitalize">{props.title}</p>
        </div>
    )
}

export default CategoryCard;