import "./home.css";
import { Notes, Navbar,Todocard,Sidebar } from "../../components/index";

export const Home = () => {

  return (
    <>
      <Navbar />
      <Notes />
      <Todocard/>
      <Sidebar/>

    </>
  );
};
