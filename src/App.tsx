import Main from "./components/Main.tsx";
import Header from "./components/Header";
import Container from "./components/Container.tsx";


function App() {

  return (
    <div className="bg-gray-100">
     <Container>
        <Header />
        <Main/>
     </Container>
    </div>
  );
}

export default App;
