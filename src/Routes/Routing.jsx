import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../Components/Body/Body";
import BodyContent from "../Components/Body/BodyContent";
import Courses from "../Components/Body/Courses";
import Explore from "../Components/Body/Explore";
import Categories from "../Components/Body/Categories";
import Episodes from "../Components/Body/Episodes";
import Books from "../Components/Body/Books";
import Articles from "../Components/Body/Articles";

export let router =createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<BodyContent/>,
                children:[
                    {
                        path : "/",
                        element : <Explore/>
                    },
                    {
                        path:'/courses',
                        element:<Courses/>
                    },{
                        path:'/categories',
                        element:<Categories/>
                    },{
                        path : '/episodes',
                        element:<Episodes/>
                    },{
                        path:'/books',
                        element:<Books/>
                    },{
                        path:'/articles',
                        element:<Articles/>
                    }
                ]
            }
        ]
    }
])
