import Badge from "@/components/ui/Badge/Badge";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import Input from "@/components/ui/Input/Input";
import styles from "./DesignSystemPage.module.css";

function DesignSystemPage() {
  return (
    <main className={styles.page}>
      <header>
        <h1>Design System</h1>
        <p className={styles.description}>
          Componentes base de Abarrotes Cristo
        </p>
      </header>

      <section className={styles.section}>
        <h2>Buttons</h2>
        <div className={styles.content}>
          <Button>Accion Principal</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Inputs</h2>
        <div className={styles.inputContainer}>
          <Input placeholder="Escribe algo..."></Input>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Cards</h2>
        <div className={styles.cardContainer}>
          <Card>
            <h3>Ventas de Hoy</h3>
            <p className={styles.cardValue}>$2,450.00</p>
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Badges</h2>

        <div className={styles.badges}>
          <Badge variant="success">Activo</Badge>
          <Badge variant="danger">Agotado</Badge>
          <Badge variant="warning">Sotck Bajo</Badge>
          <Badge>Pendiente</Badge>
        </div>
      </section>
    </main>
  );
}

export default DesignSystemPage;
