export default function RecipeCard({title, image}) {
    return(
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full h-48 object-cover" src={image} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 flex justify-start">{title}</div>
                    <div className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 ">
                            <button>View Recipe</button>
                    </div>
                </div>
            </div>
    );
}