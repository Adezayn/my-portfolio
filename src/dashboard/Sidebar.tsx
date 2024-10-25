import Button from "../components/Button"
import Card from "../components/Card"
import Header from "../components/Header"
import TodoList from "../components/TodoList"


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Header>
        <div>
          <p>Hello, Jhon</p>
          <p>What are your plans</p>
          <p>for today?</p>
        </div>
      </Header>
      <Card />
      <div className="sidebar__main">
        <TodoList />
        <Button title="+" style="btn-add"/>
      </div>
    </div>
  );
}

export default Sidebar