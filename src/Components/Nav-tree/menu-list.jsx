import MenuItem from "./menu-item";

export default function MenuList({ list = [], styles }) {
  return (
    <ul className="menu-list" style={styles}>
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
}
