import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import ROUTERS from "./utils/router.jsx";
import MasterLayout from "./pages/theme/masterLayout/index.jsx";
import Profile from "./pages/profile/profile.jsx";

const renderComponentRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Homepage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <Profile/>,
    }
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCostom = () => {
  return renderComponentRouter();
};
export default RouterCostom;
