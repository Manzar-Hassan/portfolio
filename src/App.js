import { BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
