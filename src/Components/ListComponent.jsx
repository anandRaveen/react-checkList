import React, { memo } from "react";
import PropTypes from "prop-types";
import SingleListItem from "./SingleItemComponent";

// List Component
const ListComponent = (props) => {
  /****old code: */
  //const [selectedIndex, setSelectedIndex] = useState();

  /**Not Required***/
  /*useEffect(() => {
    //setSelectedIndex(null);
  }, [items]);*/

  return (
    <div style={{ textAlign: "left" }}>
      {props.items.map((item, index) => (
        <SingleListItem text={item.text} key={index} />
      ))}
    </div>

    /*******Old Code *******/
    /*<ul style={{ textAlign: "left" }}>
      {props.items.map((item, index) => (
        <WrappedSingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex}
        />
      ))}
    </ul>*/
  );
};

ListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

/**Set the default value for items inplace of null***/
ListComponent.defaultProps = {
  items: [
    { text: "React JS" },
    { text: "Vue JS" },
    { text: "Next JS" },
    { text: "Node JS" },
  ],
};

const List = memo(ListComponent);

export default List;
