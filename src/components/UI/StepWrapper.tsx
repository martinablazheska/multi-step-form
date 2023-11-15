import classes from "./StepWrapper.module.scss";

const StepWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classes["step-wrapper"]}>{children}</div>;
};

export default StepWrapper;
