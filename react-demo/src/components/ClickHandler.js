export const ClickHandler = () => {
  const clickHandler = () => {
    window.alert("Button clicked");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};
