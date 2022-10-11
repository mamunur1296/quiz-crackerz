import { createBrowserRouter } from "react-router-dom";
import About from "../../components/about/About";
import Blog from "../../components/blog/Blog";
import Error from "../../components/Error/Error";
import Home from "../../components/home/Home";
import Statistic from "../../components/statistick/Statistic";
import TopicDetails from "../../components/Topics/TopicDetails";
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
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/topicdetails/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <TopicDetails></TopicDetails>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/statistics",
        element: <Statistic></Statistic>,
      },
    ],
  },
]);
