import Homepage from "./pages/homepage/homepage";

const renderComponentRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <Homepage/>
        },
        {
            path: ROUTERS.USER.CONTENT,
            component: <Homepage/>
        }
    ]
}

const RouterCostom = () => {
    return renderComponentRouter(); 
}
export default RouterCostom