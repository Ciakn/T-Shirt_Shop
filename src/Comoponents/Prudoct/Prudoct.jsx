import styles from "./prudoct.module.css";
import PrudoctList from "../PrudoctList/PrudcotList";
import { BiTrash } from "react-icons/bi";
const Prudcot = ({OnChange , OnDecrement , OnIncrement ,OnDelete , prudoct , click}) => {
  
  return (
    <div className={styles.prudoct} >
      <p> source name : {prudoct.title}</p>
      <p>price is : {prudoct.price}</p>
      <span className={`${styles.quantitY} ${styles.value}`}>
        {prudoct.quantity}
      </span>
      {/* <input
        type="text"
        onChange={OnChange}
        value={prudoct.title}
      ></input> */}
    
        <button
          onClick={OnIncrement}
          className={`${styles.button} ${styles.inc}`}
        >
          +
        </button>
        <button
          onClick={OnDecrement}
          className={`${styles.button} ${prudoct.quantity === 1 && styles.remove } `}
        >
          {prudoct.quantity > 1 ? '-' : <BiTrash/>}
        </button>
      

      <button className={styles.button} onClick={OnDelete}> Delete</button>
    </div>
  );
};
export default Prudcot;
