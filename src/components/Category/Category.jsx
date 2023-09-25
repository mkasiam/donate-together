const Category = ({category}) => {
    const {id,img,category_name,title}=category;
    console.log(category)
    return (
        <div>
            <div>
                <div className="border border-black">
                    <img className="w-full rounded-md" src={img} alt="No image found" />
                </div>
                <div>
                    <p className="p-2 bg-slate-300 w-20">{category_name}</p>
                    <h1 className="text-xl">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Category;