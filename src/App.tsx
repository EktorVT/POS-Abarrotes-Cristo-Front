import Button from "./components/ui/Button/Button";
import Input from "./components/ui/Input/Input";
import Badge from "./components/ui/Badge/Badge";
import Card from "./components/ui/Card/Card";

function App() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Design System</h1>
      <p style={{ marginTop: "8px" }}>Componentes base de abarrotes cristo</p>

      <section style={{ marginTop: "32px" }}>
        <h2>Buttons</h2>
        <div style={{ marginTop: "16px" }}>
          <Button>Accion Principal</Button>
        </div>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2>Inputs</h2>

        <div style={{ marginTop: "16px", maxWidth: "400px" }}>
          <Input placeholder="Escribe algo..." />
        </div>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2>Cards</h2>

        <div style={{ marginTop: "16px", maxWidth: "400px" }}>
          <Card>
            <h3>Ventas de hoy</h3>

            <p style={{ marginTop: "8px" }}>$2,450.00</p>
          </Card>
        </div>
      </section>
      <section style={{ marginTop: "32px" }}>
        <h2>Badges</h2>

        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "16px",
            flexWrap: "wrap"
          }}
        >
          <Badge variant="success">Activo</Badge>

          <Badge variant="danger">Agotado</Badge>

          <Badge variant="warning">Stock bajo</Badge>

          <Badge>Pendiente</Badge>
        </div>
      </section>
    </main>
  );
}

export default App;
