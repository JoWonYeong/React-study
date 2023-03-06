import "./App.css";

function AppJSX() {
  const name = "원영";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1>{`Hello! ${name}`}</h1>
      <ul>
        {list.map((a, i) => {
          return <li>{a}</li>;
        })}
      </ul>
    </>
  );
}

export default AppJSX;
