import "./select.scss";
import { FC } from "react";

interface IOptionProps {
  value: string;
  label: React.ReactNode;
}

interface ISelectProps {
  options: IOptionProps[];
  defaultValue: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  value?: string;
}

const Select: FC<ISelectProps> = ({
  className = "",
  onChange,
  options,
  name,
  value,
}) => {
  return (
    <div className="select-wrap">
      <select
        value={value}
        onChange={onChange}
        className={`select ${className}`}
        name={name}
      >
        {options.map((option) => (
          <option
            defaultChecked={option.value === value}
            defaultValue={option.value}
            key={+option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
