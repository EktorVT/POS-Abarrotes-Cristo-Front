import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { useAuth } from "@/context/AuthContext";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Sale() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState<any>([]);
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
        const response = await fetch(
          `/api/products/search?q=${encodeURIComponent(query)}`
        );
        const data = await response.json();

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

  return (
    <div>
      <div>
        <h2>Usuario: {user?.username}</h2>
      </div>
      <Input
        placeholder="Buscar Producto"
        icon={<Search />}
        rightElement={<button>Escanear</button>}
        onChange={(e) => {
          setQuery(e.target.value);
          if (selectedProducts) setSelectedProducts(null);
        }}
      />
      <h3>Productos</h3>
      <h3>Carrito</h3>
      <p>Total</p> <p>$ 52</p>
      <Button>Cancelar</Button>
      <Button>Cobrar</Button>
    </div>
  );
}
