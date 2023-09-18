import Prudcot from '../Prudoct/Prudoct';
import PrudoctList from '../PrudoctList/PrudcotList';
import styles from './Navbar.module.css'
import { useProduct , useSetProduct } from '../../Providers/ProductsProvider';
const NavBar = (props) => {
  const products = useProduct();
  const setProdoct = useSetProduct();
  console.log(products);
  return (
    <div className={styles.navBar}>
      <h2>Froont Hooks Shopping</h2>
      <span> {products.filter( (p)=> p.quantity > 0 ).length}</span>
    </div>
  );
};

export default NavBar;
