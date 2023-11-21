import classes from "./ErrorMessage.module.scss";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return <div className={classes.message}>{message}</div>;
};

export default ErrorMessage;
