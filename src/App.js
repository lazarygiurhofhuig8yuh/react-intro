import Product from "./components/product"
import products from "./components/data";
import './App.css';

export default function App() {
   return(
   <div className="App product-wrapper">
        {products.map((product) => (
          <Product
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
          />
        ))}
    </div>
   );
}