import Branch from "../branch";

export interface LayoutProps {
  children: React.ReactNode;
}

const Main = () => {
  return (
    <div className="mains">
      <Branch></Branch>
    </div>
  );
};

export default Main;
