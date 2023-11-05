import classes from "./Sidebar.module.scss";

const steps: number[] = [1, 2, 3, 4];
function Steps() {
  return (
    <div className={classes.sidebar}>
      {steps.map((step: number) => (
        <span key={step}>{step}</span>
      ))}
    </div>
  );
}

export default Steps;
