import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";
import ProjectDetailsPage from "./pages/ProjectDetails";
import ExperiencesPage from "./pages/Experiences";
import ExperienceDetailsPage from "./pages/ExperienceDetails";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
      {path: "/react_portfolio/", element: <RootLayout />, children: [
          { index: true, element: <HomePage /> },
              {path: "about", element: <AboutPage />},
          {path: 'projects', element: <ProjectsPage />, children: [
              { path:":projectTitle", element: <ProjectDetailsPage />},
            ]},
              {path:'experiences', element: <ExperiencesPage />, children: [
                      {path:":experienceTitle", element: <ExperienceDetailsPage />},
                  ]},
              {path:'contact', element: <ContactPage />}
        ]},
    ]
)

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
