import Link from "next/link";
import "./offcanvas.css"
import { motion } from "framer-motion"

const ManItems = () => {

  return (
    <motion.div className="offcanvas-content" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.8}}>
      <Link href="/man/suits" className="offcanvas-body">SUITS</Link>
      <Link href="/man/shirts" className="offcanvas-body">SHIRTS</Link>
      <Link href="/man/jackets" className="offcanvas-body">JACKETS | OVERSHIRTS</Link>
      <Link href="/man/trousers" className="offcanvas-body">TROUSERS</Link>
      <Link href="/man/jeans" className="offcanvas-body">JEANS</Link>
      <Link href="/man/shorts" className="offcanvas-body">SHORTS</Link>
      <Link href="/man/hoodies" className="offcanvas-body">HOODIES | SWEATSHIRTS</Link>
    </motion.div>
  );
};

export default ManItems;