import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                javatpoint.com
              </a>
              <p className="text-gray-600">11 October 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  What is purpose of react router ?
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              Routing is a process in which a user is directed to different
              pages based on their action or request. ReactJS Router is mainly
              used for developing Single Page Web Applications. React Router is
              used to define multiple routes in the application. When a user
              types a specific URL into the browser, and if this URL path
              matches any 'route' inside the router file, the user will be
              redirected to that particular route. React Router is a standard
              library system built on top of the React and used to create
              routing in the React application using React Router Package. It
              provides the synchronous URL on the browser with data that will be
              displayed on the web page. It maintains the standard structure and
              behavior of the application and mainly used for developing single
              page web applications.
              <button className="text-red-800">rerd more ...</button>
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                bosctechlabs.com
              </a>
              <p className="text-gray-600">11 October 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  How does context api works ?
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              Front end development ecosystem is developing at a fast pace
              today. New tools and libraries are released continuously. Business
              owners prefer the right tool that suits website or application
              development. React JS is the most popular front-end development
              framework and manages a good name in the web development space.
              Business owners wish to hire react js developers well-known in a
              javascript library. It is the best asset to create a fast, simple,
              and scale web application.
              <button className="text-red-800">rerd more ...</button>
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                w3schools.com
              </a>
              <p className="text-gray-600">11 October 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  What is useref in react js ?
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              The useRef hook is the new addition in React 16.8. Before
              proceeding to this article there is a prerequisite to know about
              the ref in react. The useRef is a hook that allows to directly
              create a reference to the DOM element in the functional component.
              <br />
              The useRef returns a mutable ref object. This object has a
              property called .current. The value is persisted in the
              refContainer.current property. These values are accessed from the
              current property of the returned object. The .current property
              could be initialised to the passed argument initialValue e.g.
              useRef(initialValue). The object can persist a value for a full
              lifetime of the component.
              <button className="text-red-800">rerd more ...</button>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See all articles
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Blog;
