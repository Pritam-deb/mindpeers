import { motion } from 'framer-motion';



const ImageGrid = ({ setSelectedImg, data }) => {
  const { docs } = data;
    function getImageUrl(server, id, secret) {
    return `https://live.staticflickr.com/${server}/${id}_${secret}_c.jpg`;
    }
  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(getImageUrl(doc.server,doc.id,doc.secret))}
        >
          <motion.img src={getImageUrl(doc.server,doc.id,doc.secret)} alt="clicked pic"
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