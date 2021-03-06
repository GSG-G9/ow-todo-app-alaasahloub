import React, { useContext } from "react";
import AddTodo from "../comps/AddTodo";
import Image from "next/image";
import Header from "../comps/Header";
import ListWithFilters from "../comps/ListWithFilters";
import styles from "../styles/TodoCard.module.css";
import { ThemeContext } from "./ContextProvider";

const TodoCard = () => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.back}>
        <div className={styles.backgroundSection}>
          <div className={themeMode === true ? styles.imageLigth : styles.imageDark}></div>
        </div>
        <div
          className={
            themeMode === true
              ? styles.lightFooterSection
              : styles.DarkFooterSection
          }
        >
          <p>drag and drop to reorder list</p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Header />
        <AddTodo />
        <ListWithFilters />
      </div>
    </>
  );
};

export default TodoCard;
