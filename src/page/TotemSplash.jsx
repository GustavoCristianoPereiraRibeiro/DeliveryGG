import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TotemSplash.module.css';

export default function TotemSplash({ executarComAtraso }) {
  const navegar = useNavigate();
  return (
    <div className={styles["Totem-splash"]} onClick={() => executarComAtraso(() => navegar('/local'))}>
      <div className={styles["banner-placeholder"]}>
        Banner Promocional
      </div>
      <h1 className={styles["texto-iniciar"]}>Toque para iniciar</h1>
    </div>
  );
}