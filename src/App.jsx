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
import Profile from './pages/Profile';
import {AuthProvider} from './components/Authentication/AuthContext.jsx';
import VerifyEmail from './pages/VerifyEmail';
import ProtectedRoute from "./components/Authentication/ProtectedRoute.jsx";

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
        {path: 'edit', element: (
            <ProtectedRoute>
              <EditRecipePage />
            </ProtectedRoute>
          )}
      ],
    },

    {path: 'favourites',
      children: [
        {index: true, element: (
            <ProtectedRoute>
              <FavouritesPage/>
            </ProtectedRoute>
          )},
        {path: ':recipeId',
          children:[
            {index: true, element: <RecipeDetailPage />},
            {path: 'edit', element: (
                <ProtectedRoute>
                  <EditRecipePage />
                </ProtectedRoute>
              )}
          ],
        },
      ],
    },

    {path: 'myRecipes',
      children: [
        {index: true, element: (
            <ProtectedRoute>
              <MyRecipesPage />
            </ProtectedRoute>
          )},
        {path: ':recipeId',
          children:[
            {index: true, element: <RecipeDetailPage />},
            {path: 'edit', element: (
                <ProtectedRoute>
                  <EditRecipePage />
                </ProtectedRoute>
              )}
          ],
        },
        {path: 'newRecipe', element: (
            <ProtectedRoute>
              <CreateRecipePage />
            </ProtectedRoute>
          )},
      ],
    },

    {path: 'searchRecipes',
      children: [
        {index: true, element: <SearchRecipesPage />},
        {path: ':recipeId',
          children:[
            {index: true, element: <RecipeDetailPage />},
            {path: 'edit', element: (
                <ProtectedRoute>
                  <EditRecipePage />
                </ProtectedRoute>
              )}
          ],
        },
        {path: 'newRecipe', element: (
            <ProtectedRoute>
              <CreateRecipePage />
            </ProtectedRoute>
          )},
      ],
    },
    {
      path: 'profile',
      element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
      )
    },

    {
      path: 'auth',
      element: <Authentication />
    },
    {
      path: 'logout',
    },
    {
      path: "error",
      element: <ErrorPage />,
    },
    {
      path: 'verify-email',
      element: <VerifyEmail />,
    }


  ]
}
])

function App() {
  return (
     <AuthProvider>
        <RouterProvider router={router} />;
     </AuthProvider>)

}

export default App
