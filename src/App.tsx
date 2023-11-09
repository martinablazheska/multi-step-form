import FormContextProvider from "./store/form-context";
import Main from "./components/Main/Main";
import "./App.scss";

function App() {
  return (
    <FormContextProvider>
      <Main />
    </FormContextProvider>
  );
}

export default App;
