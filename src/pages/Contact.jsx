import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
	return (
		<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      ease: 'easeInOut',
      duration: 0.9,
      delay: 0.2,
			}}
			className="container flex flex-col-reverse  py-5 lg:py-10 lg:mt-10"
		>
			<ContactForm />
		</motion.div>
	);
};

export default Contact;
