import "./offcanvas.css"
import { motion } from "framer-motion"

const ManItems = () => {

  return (
    <motion.div className="offcanvas-content" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.8}}>
      <div className="offcanvas-body">SUITS</div>
      <div className="offcanvas-body">SHIRTS</div>
      <div className="offcanvas-body">T-SHIRTS</div>
      <div className="offcanvas-body">JACKETS | OVERSHIRTS</div>
      <div className="offcanvas-body">TROUSERS</div>
      <div className="offcanvas-body">JEANS</div>
      <div className="offcanvas-body">SHORTS</div>
      <div className="offcanvas-body">HOODIES | SWEATSHIRTS</div>
    </motion.div>
  );
};

export default ManItems;