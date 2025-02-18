// eslint-disable-next-line react/prop-types
export default function Square({square, onSquareClick}) {
    return <button className="square" onClick={onSquareClick}>{square}</button>;
}