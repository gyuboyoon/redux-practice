import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "첫번째 책", description: "첫번째로 쓴 책" },
  { id: "p2", price: 7, title: "두번째 책", description: "두번째로 쓴 책" },
  { id: "p3", price: 8, title: "세번째 책", description: "세번째로 쓴 책" },
  { id: "p4", price: 9, title: "네번째 책", description: "네번째로 쓴 책" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
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
