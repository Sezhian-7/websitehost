import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header addClass="mv-container" />
      <div className="header_fix_space">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
