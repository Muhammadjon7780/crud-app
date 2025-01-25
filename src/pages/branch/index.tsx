import Table from "../../components/table";
import "./branch.scss";
import { useState } from "react";
import { useData } from "../../context/context";
import Layout from "../../layout";
import Filter from "../../components/filter";

const Branch = () => {
  const { data, setData, originalData, setOriginalData } = useData();
  const [isOpen, setIsOpen] = useState(false);

  const [isEditOpen, setEditIsOpen] = useState(false);
  const [clickId, setClickId] = useState<number | undefined>();
  const [btnValue, setBtnValue] = useState<string>("");

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;
    if (id) {
      const clickedId = +id;
      setClickId(clickedId);
    } else {
      console.error("ID is not defined in the dataset.");
    }
    e.stopPropagation();
    setEditIsOpen(true);
    setIsOpen(true);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;
    if (id) {
      const clickedId = +id;
      const itemDeleteIndex = data?.findIndex((item) => item.id === clickedId);
      const itemShowDeleteIndex = originalData?.findIndex(
        (item) => item.id === clickedId
      );

      if (itemDeleteIndex === undefined || itemDeleteIndex < 0) {
        console.error("Element topilmadi, itemDeleteIndex:", itemDeleteIndex);
        return;
      }
      if (itemShowDeleteIndex === undefined || itemShowDeleteIndex < 0) {
        console.error(
          "Element topilmadi, itemShowDeleteIndex:",
          itemShowDeleteIndex
        );
        return;
      }

      const updatedData = [
        ...(data ?? []).slice(0, itemDeleteIndex),

        ...(data ?? []).slice(itemDeleteIndex + 1),
      ];
      setData(updatedData);
      setOriginalData(updatedData);
      localStorage.setItem("data", JSON.stringify(updatedData));
    }
  };

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const addBtnValue = e.currentTarget.value;
    setBtnValue(addBtnValue);
    setIsOpen(!isOpen);
  };

  return (
    <Layout
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      id={clickId}
      isEditOpen={isEditOpen}
      setEditIsOpen={setEditIsOpen}
      btnValue={btnValue}
    >
      <section className="branch">
        <Filter setIsOpen={setIsOpen} handleOpen={handleOpen} />
        <div className="main-branch">
          <div className="table-section">
            <Table
              columns={data}
              header={["№", "Nomi", "Viloyat", "Ma'sul shaxs"]}
              className="branch-table"
              onEditClick={handleEdit}
              onDeleteClick={handleDelete}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Branch;
