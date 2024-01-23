import { Link } from "react-router-dom";
import menu from "./menu.module.css"
const Menu = (props) => {
  const { text, link } = props;

  return (
    <div className={menu["bar"]}>
      {text.map((text, i) => {
        return (
          <Link to={link[i]} key={`link_${i}`}>
            <button className={menu["button"]} key={`button_${i}`}>{text}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
