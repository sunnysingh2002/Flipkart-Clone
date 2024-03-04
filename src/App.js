import { Box} from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/navbar";
function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer/>
    </Box>
  );
}

export default App;
