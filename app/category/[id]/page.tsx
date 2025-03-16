import { fetchProductsBySubcategory } from "../../lib/data";
import "../../ui/global.css";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const categoryId = parseInt(id ?? "1");
  const products = await fetchProductsBySubcategory(categoryId);

  return (
    <main className="flex min-h-screen flex-col p-6 gap-4">
      <h1>Biketastic</h1>
      <h2>Welcome to our web shop!</h2>

      <div className="products">
        {products.map((t) => (
          <div className="product-card" key={t.id}>
            <h3 className="product-card-title">{t.name}</h3>
            <p>Available in {t.color ?? "white"}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
}
