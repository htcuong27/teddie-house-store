'use client';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const Frame = ({ children }: PropsWithChildren) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Frame;