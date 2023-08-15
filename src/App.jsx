import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./features/UI/AppLayout";
import BasicInfo from "./features/Form/BasicInfo";
import WorkExperince from "./features/Form/WorkExperince";
import Education from "./features/Form/Education";
import Summary from "./features/Form/Summary";
import Skills from "./features/Form/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/basic-info",
        element: <BasicInfo />,
      },
      {
        path: "/work-experince",
        element: <WorkExperince />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
