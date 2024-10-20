import RecipeCard from "../components/RecipeCard";

function HomePage() {
    const recipes = [
        { title: 'Spaghetti Carbonara', image: 'https://img.taste.com.au/QcmW6rMf/taste/2024/03/close-up-carbonara-196625-1.jpg' },
        { title: 'Francesinha', image: 'https://cdn.vidaativa.pt/uploads/2020/02/molho-de-francesinha-receitas.jpg' },
        { title: 'Arroz de Cabidela', image: 'https://images.trustinnews.pt/uploads/sites/5/2023/03/230302_JCC-Arroz-de-Cabidela-Tia-Matilde-04-1.jpg' },
      ];
    
    
    return (
    <div className="flex flex-wrap items-center justify-center gap-10 min-h-screen">
        {/* <h1 className="text-3xl font-bold underline">Home Page!</h1> */}
        {recipes.map((recipe, index) => (
        <RecipeCard key={index} title={recipe.title} image={recipe.image} />
      ))}
    </div>
    );
}

export default HomePage;