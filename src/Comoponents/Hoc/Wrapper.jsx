import WithCount from "./WithCount";

const Wrapper = (WrappedComponent, Classname) => {
  return (props) => {
    console.log(props);
    return (
      <div className={Classname}>
        <WrappedComponent {...props} />
      
      </div>
    );
  };
};

export default Wrapper;
