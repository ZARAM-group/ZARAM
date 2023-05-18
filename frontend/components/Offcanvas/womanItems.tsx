import "./offcanvas.css"
import { motion } from "framer-motion";

const WomanItems = () => {
  
  return (
    <motion.div className="offcanvas-content" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.6}}>
      <div className="offcanvas-body">JACKETS | TRENCH COATS</div>
      <div className="offcanvas-body">WAISTCOATS | GILETS</div>
      <div className="offcanvas-body">DRESSES | JUMPSUITS</div>
      <div className="offcanvas-body">SHIRTS</div>
      <div className="offcanvas-body">TOPS | BODYSUITS</div>
      <div className="offcanvas-body">TROUSERS</div>
      <div className="offcanvas-body">JEANS</div>
      <div className="offcanvas-body">SKIRTS</div>
    </motion.div>
  );
};

export default WomanItems;