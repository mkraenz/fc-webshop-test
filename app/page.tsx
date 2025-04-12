import { fetchProducts, fetchSubcategories } from "./lib/data";
import SubCategorySelect from "./subcategory-select";
import "./ui/global.css";

export default async function Page() {
  const [products, subcategories] = await Promise.all([
    fetchProducts(),
    fetchSubcategories(),
  ]);

  return (
    <main className="flex min-h-screen flex-col p-6 gap-4">
      <h1>Biketastic</h1>
      <h2>Welcome to our web shop!</h2>

      <SubCategorySelect subcategories={subcategories} />
      <div className="products">
        {products.map((product) => (
          <a href={`/products/${product.id}`} key={product.id}>
            <div className="product-card" key={product.id}>
              <h3 className="product-card-title">{product.name}</h3>
              <p>Available in {product.color ?? "white"}</p>
              <button>Add to Cart</button>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
