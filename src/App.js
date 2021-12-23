import SongDetails from './containers/SongDetails'
import { ColorSchemeProvider, Flex, Box } from 'gestalt'

function App() {
  return (
    <ColorSchemeProvider colorScheme="light " id="mainApp">
      <Box margin={2} color="white">
        <Flex>
          <SongDetails />
        </Flex>
        
      </Box>
    </ColorSchemeProvider>
  );
}

export default App;
