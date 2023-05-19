import "./offcanvas.css"
import { motion } from "framer-motion";
import Link from "next/link";

const WomanItems = () => {
  
  return (
    <motion.div className="offcanvas-content" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.6}}>
      <Link href="/woman/jackets" className="offcanvas-body">JACKETS | TRENCH COATS</Link>
      <Link href="/woman/waistcoats" className="offcanvas-body">WAISTCOATS | GILETS</Link>
      <Link href="/woman/dresses" className="offcanvas-body">DRESSES | JUMPSUITS</Link>
      <Link href="/woman/shirts" className="offcanvas-body">SHIRTS</Link>
      <Link href="/woman/tops" className="offcanvas-body">TOPS | BODYSUITS</Link>
      <Link href="/woman/trousers" className="offcanvas-body">TROUSERS</Link>
      <Link href="/woman/jeans" className="offcanvas-body">JEANS</Link>
      <Link href="/woman/skirts" className="offcanvas-body">SKIRTS</Link>
    </motion.div>
  );
};

export default WomanItems;