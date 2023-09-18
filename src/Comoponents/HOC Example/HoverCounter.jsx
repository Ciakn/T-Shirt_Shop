import WithCount from "../Hoc/WithCount";

const HoverCounter = ({ count, increment }) => {
  return (
    <div onMouseOver={increment}>
      <h2>the number is {count}</h2>
    </div>
  );
};

export default WithCount(HoverCounter,2);
