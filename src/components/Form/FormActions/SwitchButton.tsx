import ReactSwitch from "react-switch";

const SwitchButton: React.FC<{ checked: boolean; onChange: () => void }> = (
  props
) => {
  return <ReactSwitch checked={props.checked} onChange={props.onChange} />;
};

export default SwitchButton;
