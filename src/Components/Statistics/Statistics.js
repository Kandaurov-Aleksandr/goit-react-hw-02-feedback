import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, percent }) {
  return (
    <Fragment>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
        <li className={styles.item}>Total: {total}</li>
        <li className={styles.item}>Positive feedback: {percent}%</li>
      </ul>
    </Fragment>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
