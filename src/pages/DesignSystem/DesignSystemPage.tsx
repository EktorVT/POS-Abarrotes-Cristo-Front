import Badge from "@/components/ui/Badge/Badge";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import Input from "@/components/ui/Input/Input";
import styles from "./DesignSystemPage.module.css";
import Modal from "@/components/ui/Modal/Modal";
import Spinner from "@/components/ui/Spinner/Spinner";
import EmptyState from "@/components/ui/EmptyState/EmptyState";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

function DesignSystemPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { logout } = useAuth();

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
          <Button onClick={logout}>Cerrar sesión</Button>
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
      <section className={styles.section}>
        <h2>Modal</h2>

        <div className={styles.content}>
          <Button onClick={() => setIsModalOpen(true)}>Abrir modal</Button>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Ejemplo de modal"
        >
          <p>Este es nuestro componente Modal.</p>
        </Modal>
      </section>
      <section className={styles.section}>
        <h2>Spinner</h2>

        <div className={styles.badges}>
          <Spinner size="small" />
          <Spinner />
          <Spinner size="large" />
        </div>
      </section>
      <section className={styles.section}>
        <h2>Empty State</h2>

        <Card>
          <EmptyState
            title="No hay productos"
            description="Todavía no tienes productos registrados."
            action={<Button>Crear producto</Button>}
          />
        </Card>
      </section>{" "}
    </main>
  );
}

export default DesignSystemPage;
