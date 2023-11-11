import thankYou from "../../../../assets/icon-thank-you.svg";
import classes from "./FinalStep.module.scss";

function FinalStep() {
  return (
    <div className={classes["final-step"]}>
      <img src={thankYou} alt="thank you image" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default FinalStep;
