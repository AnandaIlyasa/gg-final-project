import { ChakraProvider } from '@chakra-ui/react';
import VideoList from './pages/videoList';
import "./App.css";
import VideoDetail from './pages/videoDetail';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VideoList />,
  },
  {
    path: "channel/:videoId",
    element: <VideoDetail />,
  },
]);

function App() {

  return (
    <div id="root">
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  )
}

export default App
