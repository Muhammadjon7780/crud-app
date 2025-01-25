import "./header.scss"
import notificateIcon from "../../assets/images/notification.svg"
import userIcon from "../../assets/images/user.svg"
import { Link } from "react-router-dom"
const Header = () => {
  return(
    <header className="header">
    <div className="nav">
      <Link to="#" className="notificate">
        <img className="notificate-icon" src={notificateIcon} alt="icon" width={12} height={13} />
      </Link>

      <Link to="#" className="user">
        <img src={userIcon} alt="icon" className="user-icon" width={12} height={13} />
      </Link>
    </div>
  </header>
  )
}
export default Header;