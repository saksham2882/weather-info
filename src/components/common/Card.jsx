import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 shadow-xl border border-purple-200/20 ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;
