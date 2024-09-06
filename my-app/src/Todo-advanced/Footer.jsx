import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.completedTodo}>
        completed todo: {completedTodos}
      </span>
      <span>total todos: {totalTodos} </span>
    </div>
  );
}
