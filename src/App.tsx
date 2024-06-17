import { useState } from "react";
import { Square } from "../src/components/square";
import { Slider } from "./components/slider";

function App() {
  const [size, setSize] = useState(40);
  const [angleInDeg, setAngleInDeg] = useState(0);

  return (
    <>
      <Square size={size} angleInDeg={angleInDeg} />
      <Slider
        label="dimension"
        maxValue={200}
        value={size}
        onValueChanged={setSize}
      />
      <Slider
        label="rotation"
        maxValue={360}
        value={angleInDeg}
        onValueChanged={setAngleInDeg}
      />
    </>
  );
}

export default App;
