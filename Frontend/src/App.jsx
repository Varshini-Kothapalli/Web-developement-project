import { createBrowserRouter,RouterProvider } from 'react-router';
import RootLayout from './components/RootLayout';
import Mainpage from './components/Mainpage';
import PlacesList from './components/PlacesList';
import BudgetPlanner from './components/BudgetPlanner';
import CategoryPlaces from './components/CategoryPlaces';
import './App.css'
function Homepage(){
  return(
    <div>
      <Mainpage />
      <PlacesList />
    </div>
  )
}
function App(){
  const router=createBrowserRouter([
    {path:"/",
      element:<RootLayout/>,
      children:[
      {
        path:"",
        element:<Homepage/>
      },
        {
          path: "budget-planner",
          element: <BudgetPlanner />
        },
        {
          path:"category/:category",
          element: <CategoryPlaces/>
        },{
          path:"places",
          element:<PlacesList/>
        }]
    }
  ])

  return(
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
   
  )
}

export default App;