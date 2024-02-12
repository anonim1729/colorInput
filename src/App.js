import ColorBox from "./ColorBox";
import ColorInput from "./ColorInput";
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  console.log("search : ", search);
  return (
    <div className="App">
      <ColorBox
        colorValue={search}
      />
      <ColorInput
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
