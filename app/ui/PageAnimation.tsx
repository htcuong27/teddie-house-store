import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

const PageAnimation = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-24 lg:px-8">
        {children}
      </div>
    </motion.div>
  );
};

export default PageAnimation;
