import { Link } from "react-router-dom";
import menu from "./menu.module.css"
const Menu = (props) => {
  const { text, link } = props;

  return (
    <div className={menu["bar"]}>
      {text.map((text, i) => {
        return (
          <Link to={link[i]}>
            <button className={menu["button"]}>{text}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
