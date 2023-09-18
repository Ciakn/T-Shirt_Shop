import WithCount from "../Hoc/WithCount";

const ClickConter = ({ count, increment }) => {
  return (
    <div onClick={increment}>
      <h2>the number is click {count}</h2>
    </div>
  );
};

export default WithCount(ClickConter ,4);
