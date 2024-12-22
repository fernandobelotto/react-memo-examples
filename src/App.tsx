import "./App.css";
import { Arrays } from "./examples/Arrays";
import { ObjectProperties } from "./examples/ObjectProperties";
import { ObjectPropertiesNested } from "./examples/ObjectPropertiesNested";
import { Objects } from "./examples/Objects";
import { SimpleProps } from "./examples/StringNumbers";
import { Functions } from "./examples/Functions";

function App() {
  return (
    <>
      <h1>why use memo?</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div>
          <p>arrays</p>
          <Arrays />
        </div>
        <div>
          <p>objects</p>
          <Objects />
        </div>
        <div>
          <p>number/string</p>
          <SimpleProps />
        </div>
        <div>
          <p>object properties</p>
          <ObjectProperties />
        </div>
        <div>
          <p>object properties nested</p>
          <ObjectPropertiesNested />
        </div>
        <div>
          <p>functions</p>
          <Functions />
        </div>
      </div>
    </>
  );
}

export default App;
