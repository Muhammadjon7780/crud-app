import { FC } from "react";
import "./input.scss";

interface InputPropsType {
  className?: string;
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}

const Input: FC<InputPropsType> = ({
  className = "",
  value,
  onChange,
  type,
  placeholder,
  name,
}) => {
  return (
    <input
      value={value}
      name={name}
      onChange={onChange}
      className={`input ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
