import MenuList from "./menu-list";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const style = {
  marginLeft: "20px",
  borderLeft: "1px solid #ccc",
};

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  const handleChildrenDisplay = (label) => {
    setDisplayChildren((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item.children && item.children.length ? (
          <span onClick={() => handleChildrenDisplay(item.label)}>
            {displayChildren[item.label] ? (
              <FaMinus color="black" size={15} />
            ) : (
              <FaPlus color="black" size={15} />
            )}
          </span>
        ) : null}
      </div>

      {item.children && item.children.length && displayChildren[item.label] ? (
        <MenuList list={item.children} styles={style} />
      ) : null}
    </li>
  );
}
