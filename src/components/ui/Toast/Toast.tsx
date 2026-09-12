import { useEffect, useState } from "react";
import { Check, Info, TriangleAlert, X } from "lucide-react";
import type { ToastData } from "@/context/ToastContext";
import styles from "./Toast.module.css";

interface ToastProps {
  toast: ToastData;
  onClose: (id: number) => void;
}

export default function Toast({ toast, onClose }: ToastProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      onClose(toast.id);
    }, 300);
  };

  const icons = {
    success: <Check />,
    error: <X />,
    warning: <TriangleAlert />,
    info: <Info />
  };

  return (
    <div
      className={`${styles.toast} ${styles[toast.type]} ${
        isClosing ? styles.closing : ""
      }`}
    >
      <div className={styles.icon}>{icons[toast.type]}</div>

      <div className={styles.content}>
        {toast.title && <strong>{toast.title}</strong>}
        <p>{toast.message}</p>
      </div>

      <button
        className={styles.close}
        onClick={handleClose}
        aria-label="Cerrar notificación"
      >
        <X />
      </button>
    </div>
  );
}
