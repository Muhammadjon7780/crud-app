import { Link } from "react-router-dom";
import "./sidebar.scss";
import btnImg from "../../assets/images/btn-svg.svg";
import { sidebarData } from "../../data/data";

const Sidebar = () => {
  return (
    <section className="sidebar-section">
      <div className="sidebar-header">
        <button className="sidebar-header__btn">
          <img src={btnImg} alt="img" width={16} height={10} />
        </button>
      </div>
      <div className="sidebar">
        <ul className="sidebar-list">
          {sidebarData.map((element, index) => (
            <li key={index} className="sidebar-item">
              <Link to={element.path} className="sidebar-item_link">
                <span className="sidebar-item_img">
                  <img className="sidebar-icon" src={element.icon} alt="img" />
                </span>
                {element.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
