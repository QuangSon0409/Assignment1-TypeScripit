import "./square.css";
const Square = ({ value, onClick, highlight }) => {
  const classname = `${highlight ? highlight : ""}`;
  return (
    <div>
      <button onClick={onClick} className={classname}>
        {value}
      </button>
    </div>
  );
};
export default Square;
