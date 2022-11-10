import CardsBox from "./components/CardsBox";
import Filters from "./components/Filters";
import { Container, Box } from "./styles";

function App() {
  return (
    <div className="App">
      <Container className="container">
        <Box className="first-column">
          <Filters />
        </Box>
        <Box className="second-column">
          <CardsBox />
        </Box>
      </Container>
    </div>
  );
}

export default App;
