import Gender from "../../components/Gender/Gender";
import Navbar from "../../components/Navbar/Navbar";
import "../Styles.css"

const page = () => {
  return (
    <div>
      <Navbar showSearch={false}/>
      <div id="search-gender-container"><Gender/></div>
      <input type="text" id="" placeholder="SEARCH FOR AN ITEM, COLOR, COLLECTION..."/>
    </div>
  );
};

export default page;