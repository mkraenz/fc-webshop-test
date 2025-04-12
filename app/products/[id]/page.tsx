import { fetchProductWithProductPhotoId } from "../../lib/data";
import "../../ui/global.css";

export default async function Page({ params }: any) {
  const { id } = await params;
  const productId = parseInt(id ?? "1");
  const products = await fetchProductWithProductPhotoId(productId);

  return (
    <main className="flex min-h-screen flex-col p-6 gap-4">
      <h1>Biketastic</h1>
      <h2>Welcome to our web shop!</h2>

      <div className="products">
        {products.map((t) => (
          <div className="product-card" key={t.id}>
            <h3 className="product-card-title">{t.name}</h3>
            <p>Productkennziffer {t.productNumber}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <a href="/">
        <button>Back to Home</button>
      </a>
    </main>
  );
}
