// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestimonialCard = ({ name, review, stars, direction = 'left', index = 0 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <motion.div
        ref={ref}
        initial={{ x: direction === 'left' ? -100 : 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
        className="bg-[#f3f3f3] p-6 rounded-md shadow-md max-w-sm w-full mx-4 sm:mx-0"
        >
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="flex text-yellow-500">
            {Array(stars).fill().map((_, i) => (
                <span key={i}>★</span>
            ))}
            </div>
        </div>
        <p className="text-sm text-gray-700">{`"${review}"`}</p>
        </motion.div>
    );
};
export default TestimonialCard;