import React, {useState} from "react";
import About from "./pages/About";
function App() {
  const [isopen,setisopen] = useState(false)
  return (
    <div className="App">
      <About
      isopen= {isopen}
      setisopen={setisopen}
      />
    </div>
  );
}

export default App;
