import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollDownArrow() {
  return (
    <motion.div
      className="flex justify-center mt-10"
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <ChevronDown size={36} className="text-gray-400 hover:text-blue-600 transition-colors" />
    </motion.div>
  );
}