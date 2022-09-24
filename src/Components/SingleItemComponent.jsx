import React, { useState, memo } from "react";
import PropTypes from "prop-types";
// Single List Item
const SingleItemComponent = ({ text }) => {
  const [isChecked, setisChecked] = useState(false);
  const onChangehandler = () => {
    setisChecked(!isChecked);
  };
  return (
    /*****Updated code: *****/
    <div
      className={`form-check ${isChecked ? " text-success" : "text-danger"}`}
    >
      <input
        className="form-check-input shadow-none "
        type="checkbox"
        name={text}
        value={text}
        onChange={onChangehandler}
      />
      <label className="form-check-label fw-bold">{text}</label>
    </div>

    /*****Old code :*******/
    /*<li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>*/
  );
};

/**old code */
/*WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};*/

/***new code****/
SingleItemComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(SingleItemComponent);

export default SingleListItem;
