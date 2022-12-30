// Code Keypad Component Here

function Keypad() {
  function password() {
    console.log("Entering password...");
  }

  return (
    <input
      onChange={password}
      type="password"
      placeholder="Enter Your Password"
      name="Enter Your Password"
    />
  );
}

export default Keypad;
