export default function SmallCard ({category, handleClick, accent}) {
    return (
        <article className={`h-[50px] small-card relative text-sm flex flex-col bg-white justify-center mb-2 pl-4 pr-2 shadow-default rounded-lg ${accent} ${!accent ? 'contender' : ''}`}
            onClick={() => {handleClick(category._id)}}
            >
            <p className="font-semibold">{category.name}</p>
            {category.description ?  <p className="mt-2">{category.description}</p> : null}
        </article>
    )
}