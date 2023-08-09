import { ChakraProvider } from '@chakra-ui/react';
import VideoList from './pages/videoList';

function App() {

  return (
    <ChakraProvider>
      <VideoList />
    </ChakraProvider>
  )
}

export default App
