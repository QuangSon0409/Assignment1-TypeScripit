import Square from "./square";

const Broad = (props) => {
  // console.log(props);
  const renderSquare = (index) => {
    const highlight =
      props.winningSquares && props.winningSquares.includes(index)
        ? "winner"
        : null;

    return (
      <Square
        value={props.square[index]}
        onClick={() => props.onClick(index)}
        highlight={highlight}
      ></Square>
    );
  };
  return (
    <div className="grid grid-cols-3 gap-2">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  );
};
export default Broad;
