import { leaderOptions, regionOptions } from "../../data/data";
import Input from "../input";
import Select from "../select";
import cricleIcon from "../../assets/images/circle.svg";
import arrowIcon from "../../assets/images/arrow.svg";
import "./modal.scss";
import Button from "../button";
import { useEffect, useState } from "react";
import { useData } from "../../context/context";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  name?: string;
  isEditOpen: boolean;
  setEditIsOpen: (isEditOpen: boolean) => void;
  id?: number;
  btnValue: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  isEditOpen,
  id,
  setIsOpen,
  btnValue,
}) => {
  const { data, setData, originalData, setOriginalData } = useData();

  const handleClose = () => setIsOpen(false);

  const findItem = data?.find((item) => item.id === id);

  const [formData, setFormData] = useState({
    name: "",
    region: "",
    login: "",
    password: "",
    phone: "",
    leader: "",
  });

  useEffect(() => {
    if (findItem) {
      setFormData({
        name: findItem.name || "",
        region: findItem.region?.label || "",
        login: findItem.login || "",
        password: findItem.password || "",
        phone: findItem.phone || "",
        leader: findItem.leader?.label || "",
      });
    }
    if (!isEditOpen) {
      setFormData({
        name: "",
        region: "",
        login: "",
        password: "",
        phone: "",
        leader: "",
      });
    }
  }, [id, data, isEditOpen]);

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
      if (btnValue === "add") {
        const newData = {
          id: Math.floor(Math.random() * 1000),
          name: formData.name,
          region: findRegion,
          login: formData.login,
          password: formData.password,
          phone: formData.phone,
          leader: findLeader,
        };

        const addData = [newData, ...(data ?? [])];

        setData(addData);
        setOriginalData(addData);

        localStorage.setItem("data", JSON.stringify(addData));

        setFormData({
          name: "",
          region: "",
          login: "",
          password: "",
          phone: "",
          leader: "",
        });
      }

      setIsOpen(false);

      if (findItem) {
        const itemIndex = data?.findIndex((item) => item.id == id);

        const itemShowIndex = originalData?.findIndex((item) => item.id == id);

        if (itemIndex === undefined || itemIndex < 0) {
          console.error("Element topilmadi, itemIndex:", itemIndex);
          return;
        }
        if (itemShowIndex === undefined || itemShowIndex < 0) {
          console.error("Element topilmadi, itemShowIndex:", itemShowIndex);
          return;
        }

        const editData = {
          id: id!,
          name: formData.name,
          region: findRegion || findItem?.region,
          login: formData.login,
          password: formData.password,
          phone: formData.phone,
          leader: findLeader || findItem?.leader,
        };

        const updatedData = [
          ...(data ?? []).slice(0, itemIndex),
          editData,
          ...(data ?? []).slice(itemIndex + 1),
        ];
        const showUpdatedData = [
          ...(data ?? []).slice(0, itemShowIndex),
          editData,
          ...(data ?? []).slice(itemShowIndex + 1),
        ];

        setData(updatedData);
        setOriginalData(showUpdatedData);

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
      }
    } else {
      alert("Formani to'ldiring");
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
