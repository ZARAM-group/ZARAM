import "./offcanvas.css"
import { motion } from "framer-motion"

const KidsItems = () => {
  
  return (
    <motion.div className="offcanvas-content" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.8}}>
      <div className="offcanvas-body">GIRL | 6-14 YEARS</div>
      <div className="offcanvas-body">BOY | 6-14 YEARS</div>
      <div className="offcanvas-body">BABY GIRL | 9 MONTHS - 6 YEARS</div>
      <div className="offcanvas-body">BABY BOY | 9 MONTHS - 6 YEARS</div>
      <div className="offcanvas-body">ACCESSORIES | SHOES</div>
    </motion.div>
  );
};

export default KidsItems;