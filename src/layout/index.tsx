import "./layout.scss";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Modal from "../components/add-modal";
import EditModal from "../components/edit-modal";

export interface LayoutProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  id?: number;
  isEditOpen?: boolean;
  setEditIsOpen?: (isEditOpen: boolean) => void;
}

const Layout = ({
  children,
  setIsOpen = () => {},
  isOpen = false,
  id,
  isEditOpen = false,
  setEditIsOpen = () => {},
}: LayoutProps) => {
  return (
    <div className="layout">
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <EditModal
        id={id}
        isEditOpen={isEditOpen}
        setEditIsOpen={setEditIsOpen}
      />

      <div className="container">
        <div className={`main-section ${isOpen || isEditOpen ? "blur" : ""}`}>
          <Sidebar />

          <main
            onClick={() => {
              setIsOpen(false);
              setEditIsOpen(false);
            }}
            className="main"
          >
            <div className="page-section">
              <Header />
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
