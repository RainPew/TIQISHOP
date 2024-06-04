import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.jsx";

const renderComponentRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Homepage />,
    },
  ];
  return (
    <Routes>
      {userRouters.map((item, key) => (
        <Route key={key} path={item.path} element={item.component} />
      ))}
    </Routes>
  );
};

const RouterCostom = () => {
  return renderComponentRouter();
};
export default RouterCostom;
