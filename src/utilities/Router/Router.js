import { createBrowserRouter } from "react-router-dom";
import About from "../../components/about/About";
import Blog from "../../components/blog/Blog";
import Error from "../../components/Error/Error";
import Home from "../../components/home/Home";
import Statistic from "../../components/statistick/Statistic";
import Topic from "../../components/Topics/Topic";
import { loaderData } from "../Loders/Looder";
import Root from "../root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: loaderData,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/topic/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <Topic></Topic>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/statistics",
        element: <Statistic></Statistic>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
