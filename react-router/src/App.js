import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
import VideoDetail from "./pages/VideoDetail";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      // <Outlet /> 안에 보여줄 요소 정의
      children:[
        // index : 기본적으로 보여주는 최상위 페이지
        {index: true, element: <Home />}, 
        {path: '/videos', element: <Videos />},
        {path: '/videos/:videoId', element: <VideoDetail />},
      ]
    },
  ]);

  return (
    <RouterProvider router={router}>
      hello world
    </RouterProvider>
  );
}
export default App;
