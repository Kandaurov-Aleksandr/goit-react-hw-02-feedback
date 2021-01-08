import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const btn = ({ feedbackType, clickHandler }) => {
  return (
    <button
      className={styles.btn}
      key={feedbackType}
      data-action={feedbackType}
      onClick={clickHandler}
    >
      {feedbackType}
    </button>
  );
};

function Controls({ options, clickHandler }) {
  return options.map(option => btn({ feedbackType: option, clickHandler }));
}

export default Controls;

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickHandler: PropTypes.func.isRequired,
};
