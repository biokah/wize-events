export default function LargeCard ({category, handleClick, accent}) {
    return (
        <article className={`w-full text-center relative large-card text-sm rounded-lg shadow-default ${accent} ${!accent ? 'contender' : ''}`} onClick={() => { handleClick(category._id) }}>
            <img src={category.image} alt="" className="w-full object-cover object-center" />
            <div className="flex items-center justify-center h-[50px]">
                <p className="font-semibold capitalize">{category.name}</p>
            </div>
        </article>
    )
}