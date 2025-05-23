import {
	FiGithub,
	FiLinkedin,
  FiInstagram
} from 'react-icons/fi';
const socialLinks = [
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/HeiddisBirta',
	},
	{
		id: 3,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/heiddisbirta//',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/heiddis-birta-412221217/',
	},

];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-800 hover:text-gray-200 dark:hover:text-gray-200 cursor-pointer rounded-lg bg-red-600 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
