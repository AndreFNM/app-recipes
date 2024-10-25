import RecipeCard from "../components/RecipeCard";

function HomePage() {
    const recipes = [
        { title: 'Spaghetti Carbonara', image: 'https://img.taste.com.au/QcmW6rMf/taste/2024/03/close-up-carbonara-196625-1.jpg' },
        { title: 'Francesinha', image: 'https://cdn.vidaativa.pt/uploads/2020/02/molho-de-francesinha-receitas.jpg' },
        { title: 'Arroz de Cabidela', image: 'https://images.trustinnews.pt/uploads/sites/5/2023/03/230302_JCC-Arroz-de-Cabidela-Tia-Matilde-04-1.jpg' },
        {title: 'Pão de Ló', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvfJmMxGs7DCAKbIj5UsLnxgugyFZ0AawSg&s'},
      ];
    
const otherRecipes = [
        { title: 'Sushi', image: 'https://www.kikkoman.pt/fileadmin/_processed_/4/2/csm_sushi-kakkoii_2c56fe3133.webp' },
        { title: 'Tempura', image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/E3AF6E67-0180-4A0A-8E8F-FF8CF8C97939/Derivates/759c5ff9-a816-41f1-8ae5-dd05dd304856.jpg' },
        { title: 'Tsukemen', image: 'https://www.justonecookbook.com/wp-content/uploads/2023/04/Tsukemen-Dipping-Ramen-Noodles-8179-2-I-2.jpg' },
        {title: 'Pão de Ló', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvfJmMxGs7DCAKbIj5UsLnxgugyFZ0AawSg&s'},
      ];
    
    return (
    <>
      <div className="flex items-center justify-center mt-24">
    <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Most Popular</h1>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 mt-8">
        {recipes.map((recipe, index) => (
        <RecipeCard key={index} title={recipe.title} image={recipe.image} />
      ))}
    </div>


  <div className="flex items-center justify-center mt-24">
    <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Other Recipes</h1>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 mt-8">
        {otherRecipes.map((otherRecipes, index) => (
        <RecipeCard key={index} title={otherRecipes.title} image={otherRecipes.image} />
      ))}
    </div>
    </>
    );
}

export default HomePage;
