import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS =[
  
  {
    id: 'p1',
    price : 6,
    title: 'My first Book',
    description: 'My first book I ever wrote',
  },
  {
    id: 'p2',
    price : 33,
    title: 'My Second Book',
    description: 'My second book I ever wrote',
  },
  {
    id: 'p3',
    price : 26,
    title: 'My third Book',
    description: 'My third book I ever wrote',
  },
  {
    id: 'p4',
    price : 54,
    title: 'My fourth Book',
    description: 'My fourth book I ever wrote',
  },
  {
    id: 'p5',
    price : 8,
    title: 'My fifth Book',
    description: 'My fifth book I ever wrote',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
           <ProductItem
           key = {product.id}
           id = {product.id}
           title={product.title}
           price={product.price}
           description={product.description}
           />
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
