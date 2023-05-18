import Link from "next/link";
import "./offcanvas.css"
import { motion } from "framer-motion"

const KidsItems = () => {
  
  return (
    <motion.div className="offcanvas-content" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.8}}>
      <Link href="/kids/girl" className="offcanvas-body">GIRL | 6-14 YEARS</Link>
      <Link href="/kids/boy" className="offcanvas-body">BOY | 6-14 YEARS</Link>
      <Link href="/kids/babygirl" className="offcanvas-body">BABY GIRL | 9 MONTHS - 6 YEARS</Link>
      <Link href="/kids/babyboy" className="offcanvas-body">BABY BOY | 9 MONTHS - 6 YEARS</Link>
    </motion.div>
  );
};

export default KidsItems;