import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import RecipeDetailPage from './pages/RecipeDetail';
import EditRecipePage from './pages/EditRecipe';
import CreateRecipePage from './pages/CreateRecipe';
import FavouritesPage from './pages/Favourites';
import MyRecipesPage from './pages/MyRecipes';
import SearchRecipesPage from './pages/SearchRecipes';
import Authentication from './pages/Authentication';

const router = createBrowserRouter([
{
  path: "/",
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  id: 'root',
  children: [

    {index: true, element: <HomePage />},
    {
      path: ':recipeId',
      children: [
        {index: true, element: <RecipeDetailPage />},
        {path: 'edit', element: <EditRecipePage />}
      ],
    },

    {path: 'favourites',
      children: [
        {index: true, element: <FavouritesPage/>},
        {path: ':recipeId',
          children:[
            {index: true, element: <RecipeDetailPage />},
            {path: 'edit', element: <EditRecipePage />}
          ],
        },
      ],
    },

    {path: 'myRecipes',
      children: [
        {index: true, element: <MyRecipesPage />},
        {path: ':recipeId',
          children:[
            {index: true, element: <RecipeDetailPage />},
            {path: 'edit', element: <EditRecipePage />}
          ],
        },
        {path: 'newRecipe', element: <CreateRecipePage />},
      ],
    },

    {path: 'searchRecipes',
      children: [
        {index: true, element: <SearchRecipesPage />},
        {path: ':recipeId',
          children:[
            {index: true, element: <RecipeDetailPage />},
            {path: 'edit', element: <EditRecipePage />}
          ],
        },
        {path: 'newRecipe', element: <CreateRecipePage />},
      ],
    },

    {
      path: 'auth',
      element: <Authentication />
    },
    {
      path: 'logout',
    }


  ]
}
])

function App() {
  return <RouterProvider router={router} />
}

export default App
