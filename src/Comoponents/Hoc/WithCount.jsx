import { useState } from "react";

const WithCount = (WrappedComponent , incrementValue) => {
  const UpdateCounts = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + incrementValue);
    };
    return <WrappedComponent count={count} increment={increment} {...props}/>;
  };
  return UpdateCounts;
};

export default WithCount;
