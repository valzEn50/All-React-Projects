import MenuList from "./menu-list";
import "./nav.css";

export default function NavTree({ menus = [] }) {
  return (
    <div className="nav-tree-container">
      <div className="nav-tree">
        <MenuList list={menus} />
      </div>
    </div>
  );
}
