import "./App.css";
import TimeWrapper from "./TimeWrapper";

function App() {
  const onExpired = () => {
    console.log("restart the timer");
  };
  return (
    <>
      <TimeWrapper duration={6 * 1000} onExpired={onExpired} />
    </>
  );
}

export default App;
