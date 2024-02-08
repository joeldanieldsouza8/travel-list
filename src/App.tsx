import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

import ItemsProvider from "./context/ItemsContext";

function App() {
  return (
    <ItemsProvider>
      <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </ItemsProvider>
  );
}

export default App;
