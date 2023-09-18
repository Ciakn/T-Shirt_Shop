import Select from "react-select";
import styles from './select.module.css'
const SelectedComponent = ({ title , ...rest }) => {
   
  return (
   
        <div className={styles.filtercontainer}>
      <span>{title}</span>
      <Select
        title={title}
       {...rest}
      />
      </div>

  );
};

export default SelectedComponent;

