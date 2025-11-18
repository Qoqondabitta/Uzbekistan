import { useState } from "react";
import Root from "./root/Root";

function App() {
  const [count, setCount] = useState(0);

  return <Root />;
}

export default App;
