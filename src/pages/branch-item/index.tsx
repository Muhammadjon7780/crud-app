import { useParams } from "react-router-dom";
import { BranchProps, useData } from "../../context/context";
import branchImg from "../../assets/images/item-img.svg";
import Layout from "../../layout";
import cancelIcon from "../../assets/images/cncl.svg";
import checkIcon from "../../assets/images/check.svg";
import cricleIcon from "../../assets/images/circle.svg";
import Button from "../../components/button";
import TransactionTable from "../../components/transaction-table";
import { tableData, TableRow, transactions } from "../../data/data";
import { useState } from "react";
import "./branch-item.scss"

const BranchItem = () => {
  const [filterData, setFilterData] = useState<TableRow[] | []>(tableData);

  const { id } = useParams();
  const { data } = useData();

  if (!id) {
    return <p>id mavjud emas</p>;
  }
  const itemId: number = +id;

  const branch: BranchProps | undefined = data?.find(
    (branch) => branch.id == itemId
  );

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnValue = e.currentTarget.value === "true";

    const filterDatas = tableData?.filter((element) => {
      if (e.currentTarget.value == "all") return true;

      return element.isIncome == btnValue;
    });
    setFilterData(filterDatas);
  };

  return (
    <Layout>
      <section className="item">
        <div className="item-wrap">
          <div className="item-data">
            <span className="item-active">Faol</span>
            <img
              className="item-img"
              src={branchImg}
              width={62}
              height={62}
              alt="img"
            />
            <h2 className="item-title">{branch?.name}</h2>
            <div className="item-data-box">
              <p className="item-data-title">Yaratilgan sanasi</p>
              <p className="item-data-info">2022.01.01</p>
            </div>
            <div className="item-data-box">
              <p className="item-data-title">Viloyat</p>
              <p className="item-data-info">{branch?.region?.label}</p>
            </div>
            <div className="item-data-box">
              <p className="item-data-title">Login</p>
              <p className="item-data-info">{branch?.login}</p>
            </div>
            <div className="item-data-box">
              <p className="item-data-title">Parol</p>
              <p className="item-data-info">{branch?.password}</p>
            </div>
            <div className="item-data-box">
              <p className="item-data-title">Telefon raqam</p>
              <p className="item-data-info">{branch?.phone}</p>
            </div>
            <div className="item-data-box">
              <p className="item-data-title">Ma’sul shaxs</p>
              <p className="item-data-info">{branch?.leader?.label}</p>
            </div>
          </div>

          <div className="item-balance">
            <div className="balance-card">
              <div className="balance-header">
                <span className="icon"></span>
                <div className="balance-info">
                  <span className="balance-title">Balans</span>
                  <h2 className="amount">24,780,000 so’m</h2>
                </div>
              </div>
              <span className="line"></span>
              <div className="transaction-list">
                {transactions.map((transaction) => (
                  <div className="transaction-item" key={transaction.id}>
                    <div className="transaction-item-wrap">
                      <div className="transaction-box">
                        <span className="transaction-date">
                          {transaction.date}
                        </span>
                        <span className="transaction-amount">
                          {transaction.amount} so’m
                        </span>
                      </div>
                      <div className="transaction-actions">
                        <button className="btn btn-decline">
                          <img
                            className="cancel-icon"
                            src={cancelIcon}
                            alt="icon"
                            width={7}
                            height={7}
                          />
                        </button>
                        <button className="btn btn-approve">
                          <img
                            className="check-icon"
                            src={checkIcon}
                            alt="icon"
                            width={8}
                            height={9}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="item-main">
          <div className="item-filter">
            <div className="control">
              <span className="balance-text">Balance</span>
              <Button
                onClick={handleButtonClick}
                value="all"
                type="button"
                className="balance-history"
              >
                Amaliyotlar
              </Button>
            </div>
            <div className="filter-wrap">
              <Button
                onClick={handleButtonClick}
                className="item-filter-btn"
                type="button"
                color="#54C759"
                value="true"
              >
                <img
                  className="button-icon"
                  src={cricleIcon}
                  alt="icon"
                  width={11}
                  height={11}
                />
                <span className="button-text">Kirim</span>
              </Button>

              <Button
                onClick={handleButtonClick}
                value="false"
                className="item-filter-btn chiqim-btn"
                type="button"
                color="#FF4949"
              >
                <img
                  className="button-icon"
                  src={cricleIcon}
                  alt="icon"
                  width={11}
                  height={11}
                />
                <span className="button-text">Chiqim</span>
              </Button>
            </div>
          </div>
          <div className="transaction-wrap">
            <TransactionTable
              columns={filterData}
              header={["№", "Tranzaksiya turi", "Summa", "Sana"]}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BranchItem;
