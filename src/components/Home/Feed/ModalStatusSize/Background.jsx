import { motion } from "framer-motion";
import { useState } from "react";
import "../../../../styles/Modal/styleModalStatus/_styleModalStatus.scss";

const BackGround = ({ children, onClick }) => {

    return (
        <motion.div
            onClick={onClick}
            className="backgrouns_status-size"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default BackGround;