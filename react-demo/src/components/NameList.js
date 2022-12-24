export const NameList = () => {
  const names = ["Iron Man", "Captain America", "Thor"];
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>;
      })}
    </div>
  );
};
