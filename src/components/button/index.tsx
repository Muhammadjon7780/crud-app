import "./button.scss";

interface IButton{
  children:string | React.ReactNode;
  className?:string;
  color?:string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "submit" | "reset" | "button" | undefined;
  id?:number;
  value?: string;
}
const Button = ({children, value="", id,  type="button", onClick, className="", color}: IButton) => {

  return(
    <button value={value} data-id={id} className={`button ${className}`} type={type} onClick={onClick} style={{background:color}}>
      {children}
    </button>
  )
}
export default Button;