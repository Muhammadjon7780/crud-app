import "./filter.scss";
import { useData } from "../../context/context";
import { leaderOptions, regionOptions } from "../../data/data";
import Button from "../button";
import Input from "../input";
import Select from "../select";
import cricleIcon from "../../assets/images/circle.svg";

interface FilterProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Filter = ({ handleOpen }: FilterProps) => {
  const { setData, originalData } = useData();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = e.target;

    const filteredData = originalData?.filter((product) => {
      if (value === "10" || value === "0") return true;
      const searchRegExp = new RegExp(value, "gi");
      const fieldsToSearch = [
        product.name,
        product.region?.label,
        product.leader?.label,
      ];
      const searchValue = fieldsToSearch.some((field) =>
        field?.match(searchRegExp)
      );
      return (
        product.leader?.value === value ||
        product.region?.value === value ||
        searchValue
      );
    });

    setData([...filteredData]);
  };

  return (
    <div className="filter">
      <Button
        type="button"
        onClick={handleOpen}
        className="branch_filter-btn"
        color="#FB551A"
        value="add"
      >
        <img
          className="button-icon"
          src={cricleIcon}
          alt="icon"
          width={11}
          height={11}
        />
        <span className="button-text">yaratish</span>
      </Button>
      <div className="filter-wrap">
        <Select
          name="leader"
          onChange={handleChange}
          className="leader-select"
          options={leaderOptions}
          defaultValue="Ma'sul shaxs"
        />
        <Select
          name="region"
          onChange={handleChange}
          className="region-select"
          options={regionOptions}
          defaultValue="Viloyat"
        />
        <Input
          onChange={handleChange}
          name="search"
          className="search-input"
          type="text"
          placeholder="Qidirish..."
        />
      </div>
    </div>
  );
};
export default Filter;
