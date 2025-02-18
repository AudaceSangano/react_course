
// eslint-disable-next-line react/prop-types
function Guest({count, onClick}) {

    return (
      <>
        <h1>You are Guest!</h1>
        <button type="button" onClick={onClick}>Click Me</button>
        I clicked {count} times
      </>
    );
  }
  
  export default Guest;
  