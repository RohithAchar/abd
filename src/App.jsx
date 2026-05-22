import { Hero } from "./components/Hero";
import { LoadingScreen } from "./components/LoadingScreen";
import { LoadingProvider } from "./contexts/LoadingContext";

const App = () => {
  return (
    <LoadingProvider>
      <LoadingScreen />
      <div>
        <Hero />
      </div>
    </LoadingProvider>
  );
};

export default App;
