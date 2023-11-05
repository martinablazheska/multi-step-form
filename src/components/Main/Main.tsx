import Sidebar from "../Sidebar/Sidebar";
import FormContainer from "../Form/Form";
import classes from "./Main.module.scss";

function Main() {
  return (
    <div className={classes.main}>
      <Sidebar />
      <FormContainer />
    </div>
  );
}

export default Main;
