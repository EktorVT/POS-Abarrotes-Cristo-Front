import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useAuth } from "@/context/AuthContext";
import { searchProduct } from "@/services/products/products.service";
import type { Product } from "@/types/products";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Sale.module.css";

export default function Sale() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const { user } = useAuth();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      try {
        const response = searchProduct(query);
        const data = await response;
        setResults(data);
      } catch (error) {
        console.error("Error al buscar productos:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSelectProduct = (product: Product) => {
    setSelectedProducts((prev) => [...prev, product]);
    setQuery("");
    setResults([]);
    setTotal(total);
  };

  return (
    <div className={styles.main}>
      <div>
        <h2>Usuario: {user?.username}</h2>
      </div>
      <Input
        placeholder="Buscar Producto"
        icon={<Search />}
        rightElement={<button className={styles.rightElement}>Escanear</button>}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {loading && <Spinner />}
      {!loading && results.length > 0 && (
        <ul className={styles.ul}>
          {results.map((product) => (
            <li
              key={product.id}
              className={styles.li}
              onClick={() => handleSelectProduct(product)}
            >
              <div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.barcode}>
                  Barra: {product.barcode} | Stock: {product.stock}
                </p>
              </div>
              <p className={styles.productPrice}>${product.salePrice}</p>
            </li>
          ))}
        </ul>
      )}
      <h3>Productos</h3>
      <h3>Carrito</h3>
      <div>
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      <p>Total</p> <p>$ {total}</p>
      <Button>Cancelar</Button>
      <Button onClick={() => setSelectedProducts([])}>Cobrar</Button>
    </div>
  );
}
