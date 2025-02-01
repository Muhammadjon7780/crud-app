import Button from "../button";
import "./table.scss";
import editIcon from "../../assets/images/edit-svg.svg";
import deleteIcon from "../../assets/images/delete-svg.svg";
import { BranchProps } from "../../context/context";
import { useNavigate } from "react-router-dom";

interface ITableProps {
  className?: string;
  onEditClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  header: string[];
  columns: BranchProps[] | null;
}

const Table = ({
  className = "",
  onDeleteClick,
  header,
  columns,
  onEditClick,
}: ITableProps) => {
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/branchitem/${id}`);
  };
  return (
    <div className={`table-container ${className}`}>
      <table className="custom-table">
        <thead className="thead">
          <tr className="tr">
            {header?.map((head, index) => (
              <th key={index} className="th">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {columns?.map((branch, index) => (
            <tr
              className="branch-row"
              onClick={() => handleRowClick(branch.id)}
              key={index}
            >
              <td>{++index}</td>
              <td>{branch.name}</td>
              <td>{branch.region?.label}</td>
              <td className="leader-td">
                <span className="leader-span">{branch.leader?.label}</span>

                <div className="btn-wrap">
                  <Button
                    className="edit-btn"
                    id={branch?.id}
                    onClick={onEditClick}
                    type="button"
                  >
                    <img
                      className="btn-icon"
                      src={editIcon}
                      alt="icon"
                      width={16}
                      height={16}
                    />
                  </Button>
                  <Button id={branch?.id} type="button" onClick={onDeleteClick}>
                    <img
                      className="btn-icon"
                      src={deleteIcon}
                      alt="icon"
                      width={16}
                      height={16}
                    />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
