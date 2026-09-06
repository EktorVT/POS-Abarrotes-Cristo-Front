import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useAuth } from "@/context/AuthContext";
import { searchProduct } from "@/services/products/products.service";
import type { Product } from "@/types/products";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Sale.module.css";
import {
  type CartItem,
  increaseQuantity,
  decreaseQuantity,
  getStockStatus
} from "@/utils/cart .utils";
import Card from "@/components/ui/Card/Card";
import Badge from "@/components/ui/Badge/Badge";

export default function Sale() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useAuth();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await searchProduct(query);
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

  const handleIncrease = (productId: number) => {
    setCart((prev) => increaseQuantity(prev, productId));
  };

  const handleDecrease = (productId: number) => {
    setCart((prev) => decreaseQuantity(prev, productId));
  };

  const handleSelectProduct = (product: Product) => {
    const existingProduct = cart.find((item) => item.product.id === product.id);

    if (existingProduct) {
      handleIncrease(product.id);
    } else {
      if (product.stock <= 0) {
        return;
      }

      setCart((prev) => [
        ...prev,
        {
          product,
          quantity: 1
        }
      ]);
    }

    setQuery("");
    setResults([]);
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.product.salePrice) * item.quantity,
    0
  );

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h3>Nueva Venta</h3>
        <p>Usuario: {user?.username}</p>
      </div>
      <div className={styles.searchContainer}>
        <Input
          value={query}
          placeholder="Buscar Producto"
          icon={<Search />}
          rightElement={
            <button className={styles.rightElement}>Escanear</button>
          }
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
      </div>
      <h3>Carrito</h3>
      <div>
        <ul>
          {cart.map((item) => {
            const stockStatus = getStockStatus(item);

            return (
              <Card key={item.product.id} className={styles.card}>
                <h3 className={styles.itemName}>{item.product.name}</h3>
                <div className={styles.itemInfo}>
                  <div className={styles.quantity}>
                    <button onClick={() => handleDecrease(item.product.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item.product.id)}>
                      +
                    </button>
                    {stockStatus && (
                      <Badge variant="danger">{stockStatus}</Badge>
                    )}
                  </div>
                  <span className={styles.itemPrice}>
                    ${item.product.salePrice * item.quantity}
                  </span>
                </div>
              </Card>
            );
          })}
        </ul>
      </div>
      <p>Total</p> <p>$ {total}</p>
      <Button>Cancelar</Button>
      <Button onClick={() => setCart([])}>Cobrar</Button>
    </div>
  );
}
