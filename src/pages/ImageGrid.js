import React from 'react';
import { motion } from 'framer-motion';

const ImageGrid = ({ images }) => {
  let i = 1234;

  return (
    <div className="img-grid">
      {images && images.map(image => (
        <motion.div className="img-wrap" key={i++} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => {}}
        >
          <motion.img src={image} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;