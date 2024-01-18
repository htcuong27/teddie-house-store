import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

const PageAnimation = ({children}: PropsWithChildren) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-50 flex flex-col min-h-screen w-full mx-auto"
        >
            {children}
        </motion.div>
    );
};

export default PageAnimation;