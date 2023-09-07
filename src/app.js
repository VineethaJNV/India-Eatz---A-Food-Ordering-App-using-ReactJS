import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header"
import Body from "./components/Body"
import Footer from "./components/footer"
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"


const AppLayout = ()=>{
  return(
      <React.Fragment>
          <Header/>
          <Outlet/>
          <Footer/>
      </React.Fragment>
      
  )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },

        ]
    },
    
    //,{
    //     path:"/*",
    //     element:<Error/>
    // }
    
])
const root = ReactDOM.createRoot(document.querySelector("div"));
root.render(<RouterProvider router = {appRouter}/>);

/**
        Header
            Logo
            nav items(Right side)
            Cart
        Body
            searchbar
            restaurent list
                restaurent card
                    Image
                    name
                    Rating
                    Cuisines
        Footer
            links
            copyright */

// const burgerKing ={
//     name:"Burger King",
//     image:"https://b.zmtcdn.com/data/pictures/chains/5/20637085/bae67f22a9acee3cdc5ce73b2fbdc373.jpg?fit=around|300:273&crop=300:273;*,*" ,
//     cuisines:["Burger", "American"],
//     rating:4.2
// }



