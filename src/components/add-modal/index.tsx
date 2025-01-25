import { leaderOptions, regionOptions } from "../../data/data";
import Input from "../input";
import Select from "../select";
import cricleIcon from "../../assets/images/circle.svg";
import arrowIcon from "../../assets/images/arrow.svg";
import "./modal.scss";
import Button from "../button";
import { useState } from "react";
import { useData } from "../../context/context";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  name?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const { data, setData, setOriginalData } = useData();

  const handleClose = () => setIsOpen(false);

  const [formData, setFormData] = useState({
    name: "",
    region: "",
    login: "",
    password: "",
    phone: "",
    leader: "",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const findRegion = regionOptions.find(
      (region) => region.value === formData.region
    );
    const findLeader = leaderOptions.find(
      (leader) => leader.value === formData.leader
    );

    if (
      formData.name.trim() &&
      formData.phone.trim() &&
      formData.login.trim() &&
      formData.password.trim() &&
      formData.leader.trim() &&
      formData.region.trim()
    ) {
      const newData = {
        id: Math.floor(Math.random() * 100),
        name: formData.name,
        region: findRegion,
        login: formData.login,
        password: formData.password,
        phone: formData.phone,
        leader: findLeader,
      };

      const updatedData = [...(data ?? []), newData];

      setData(updatedData);
      setOriginalData(updatedData);

      localStorage.setItem("data", JSON.stringify(updatedData));

      setFormData({
        name: "",
        region: "",
        login: "",
        password: "",
        phone: "",
        leader: "",
      });

      setIsOpen(false);
    } else{
      alert("Formani to'ldiring")
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-content">
        <div className="title-wrap">
          <Button
            type="button"
            className="close-button"
            onClick={handleClose}
            color="#F0F0F0"
          >
            <img
              className="close-icon"
              src={arrowIcon}
              alt="icon"
              width={12}
              height={13}
            />
          </Button>
          <h2 className="modal-title">Filial yaratish</h2>
        </div>
        <form onSubmit={handleFormSubmit}>
          <Input
            value={formData.name}
            name="name"
            onChange={handleFieldChange}
            className="modal-input"
            type="text"
            placeholder="Nomi"
          />
          <Select
            value={formData.region}
            name="region"
            onChange={handleFieldChange}
            className="modal-select"
            options={regionOptions}
            defaultValue="Viloyat"
          />

          <Input
            value={formData.login}
            name="login"
            onChange={handleFieldChange}
            className="modal-input"
            type="text"
            placeholder="Login"
          />
          <Input
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            className="modal-input"
            type="password"
            placeholder="Parol"
          />
          <Input
            value={formData.phone}
            name="phone"
            onChange={handleFieldChange}
            className="modal-input"
            type="number"
            placeholder="Telefon raqam"
          />
          <Select
            value={formData.leader}
            name="leader"
            onChange={handleFieldChange}
            className="modal-select"
            options={leaderOptions}
            defaultValue="Ma'sul shaxs"
          />
          <Button className="branch_add-btn" type="submit" color="#FB551A">
            <img
              className="button-icon"
              src={cricleIcon}
              alt="icon"
              width={11}
              height={11}
            />
            <span className="button-text">yaratish</span>
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
