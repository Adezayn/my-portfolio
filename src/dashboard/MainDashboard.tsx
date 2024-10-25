import Button from "../components/Button";
import Header from "../components/Header";
import InputField from "../components/InputField";


const MainDashboard = () => {
  const editTask = true;
  return (
    <div className="dashboard">
      <Header>Edit Task</Header>
      <div className="dashboard_main">
        {editTask && (
          <>
            <p>Task Name</p>
            <InputField value="Training at the Gym" inputHandler={() => {}} />
          </>
        )}
        <div className="bottom">
          <Button title="Delete" style="btn-red"/>
          <Button title="Save" style="btn-blue"/>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard