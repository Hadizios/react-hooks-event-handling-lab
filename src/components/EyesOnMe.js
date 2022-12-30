// Code EyesOnMe Component Here
function EyesOnMe() {
  const onBlur = "Hey! Eyes on me!";
  const onFocus = "Good!";
  function Event() {
    console.log(`${onFocus}${onBlur}`);
  }
  return (
    <button
      onFocus={() => console.log(onFocus)}
      onBlur={() => console.log(onBlur)}
      onClick={Event}
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
