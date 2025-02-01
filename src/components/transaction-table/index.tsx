import "./transaction-table.scss";
import incomeImg from "../../assets/images/income.svg";
import outputImg from "../../assets/images/output.svg";
import { TableRow } from "../../data/data";

interface ITableProps {
  className?: string;
  header: string[];
  columns?: TableRow[];
}

const TransactionTable = ({ className = "", header, columns }: ITableProps) => {
  return (
    <div className={`transaction-container ${className}`}>
      <table className="transaction-table">
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
          {columns?.map((item, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>
                <div className="td-box">
                  {item.isIncome ? (
                    <img src={incomeImg} alt="img" className="cost-img" />
                  ) : (
                    <img src={outputImg} alt="img" className="cost-img" />
                  )}
                  <span className="item-type">{item.type} </span>
                </div>
              </td>
              <td>{item.amount}</td>
              <td className="leader-td">
                <span className="leader-span">{item.date}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
