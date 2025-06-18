import { Container } from "react-bootstrap";
// Import from react-router-dom
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


function App() {
  return (

    <Router>
   <Header />
      <Container className="mt-5">
        <AppRoutes />
      </Container>
      <Footer />
    </Router>
    
  );
}

export default App;