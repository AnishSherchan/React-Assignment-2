import "./App.css";
import Container from "./components/Container/PageContainer";
import ControlledForm from "./components/ControlledForm/Form";
import Counter from "./components/Counter/Counter";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import DemoTab from "./components/Tab/DemoTab";
import Todo from "./components/Todo/Todo";

function App() {
  const submitHandler = (formData) => {
    alert(`Form Data collected of ${formData.name}
message ${formData.message}
      `);
  };
  return (
    <Container>
      <Counter />
      <hr className="border border-gray-200" />
      <Todo />
      <hr className="border border-gray-200" />
      <ControlledForm submitHandler={submitHandler} />
      <hr className="border border-gray-200" />
      <DemoTab />
      <hr className="border border-gray-200" />
      <SearchFilter />
    </Container>
  );
}

export default App;
