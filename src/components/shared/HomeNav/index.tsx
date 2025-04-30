import { useAuth } from '@/auth';
import { Button } from '@/components/ui';
import { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';
import { NavigateFunction, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import HcfSignupPopup from '../Popups/HcfSignupPopup';

/**
 * @interface HomeNavbarProps
 * @description Props for the HomeNavbar component
 * @property {(ref: React.RefObject<HTMLElement>) => void} [scrollToSection] - Function to scroll to a specific section
 * @property {React.RefObject<HTMLElement>} [featuresRef] - Reference to the features section
 * @property {React.RefObject<HTMLElement>} [aboutRef] - Reference to the about section
 * @property {React.RefObject<HTMLElement>} [contactRef] - Reference to the contact section
 */
interface HomeNavbarProps {
	scrollToSection?: (ref: React.RefObject<HTMLElement>) => void;
	featuresRef?: React.RefObject<HTMLElement>;
	aboutRef?: React.RefObject<HTMLElement>;
	contactRef?: React.RefObject<HTMLElement>;
}

/**
 * HomeNavbar Component
 * 
 * A responsive navigation bar component that provides navigation controls and authentication options.
 * Features both desktop and mobile layouts with smooth scrolling to different sections.
 * 
 * @component
 * @param {HomeNavbarProps} props - Component props
 * @param {Function} props.scrollToSection - Optional function to handle smooth scrolling to sections
 * @param {React.RefObject} props.featuresRef - Reference to features section
 * @param {React.RefObject} props.aboutRef - Reference to about section
 * @param {React.RefObject} props.contactRef - Reference to contact section
 * 
 * @returns {JSX.Element} A responsive navigation bar with logo, menu items, and authentication buttons
 * 
 * @example
 * return (
 *   <HomeNavbar 
 *     scrollToSection={handleScroll}
 *     featuresRef={featuresRef}
 *     aboutRef={aboutRef}
 *     contactRef={contactRef}
 *   />
 * )
 */
const HomeNavbar: React.FC<HomeNavbarProps> = ({
	scrollToSection,
	featuresRef,
	aboutRef,
	contactRef,
}) => {
	const { user } = useAuth();

	const menuItems = [
		{
			text: 'About Us',
			to: '/about',
			ref: aboutRef,
			icon: '👥',
		},
		{
			text: 'F&Q',
			to: '/features',
			ref: featuresRef,
			icon: '🎯',
		},
		{
			text: 'Contact Us',
			to: '/about',
			ref: contactRef,
			icon: '📞',
		},
	];

	const navigate: NavigateFunction = useNavigate();
	const [menuStatus, setMenuStatus] = useState<boolean>(false);
	const { pathname } = useLocation();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const scrollTo = searchParams.get('scrollTo');
		if (pathname === '/' && scrollTo) {
			const item = menuItems.find((item) => item.text === scrollTo);
			if (item?.ref && Object.keys(item).length > 0 && scrollToSection) {
				scrollToSection(item.ref);
			}
		}
	}, [pathname]);

	return (
		<nav className={`w-full`}>
			<div className="max-w-[1538px] mx-auto px-4 w-full">
				<div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<div className="flex-shrink-0 flex items-center">
						<img
							src={`/img/logo/logo-dark-full.png`}
							alt="MakeWell_logo"
							className=" w-[150px] md:w-[200px] cursor-pointer"
							onClick={() => navigate('/')}
						/>
					</div>

					<div className="hidden lg:flex space-x-8">
						{menuItems.map((item) => (
							<li
								key={item.text}
								className={`text-[#ffffffc9] list-none transition-all duration-300 hover:text-primary cursor-pointer`}
								onClick={() => (scrollToSection && item.ref) ? scrollToSection(item.ref) : navigate('/?scrollTo=' + item.text)}
							>
								{item.text}
							</li>
						))}
					</div>

					<div
						className={`lg:hidden fixed h-full w-[90%] xs:w-[50%] bg-white/95 backdrop-blur-sm top-0 z-[9999] shadow-2xl transition-all duration-300 ease-in-out ${menuStatus ? 'right-0' : 'right-[-130%]'} transition-all duration-300`}
					>
						<div className="absolute right-4 top-4 transition-transform duration-200 hover:rotate-90">
							<CgClose
								size={30}
								className="text-gray-700 cursor-pointer"
								onClick={() => setMenuStatus(false)}
							/>
						</div>

						<div className="pt-10 px-6">
							{menuItems.map((item, i) => (
								<div
									key={i}
									className="group py-4 border-b border-gray-100"
									onClick={() => {
										setMenuStatus(false);
										if (scrollToSection && item.ref) {
											scrollToSection(item.ref);
										}
									}}
								>
									<div className="relative overflow-hidden">
										<div className={`text-lg font-medium text-gray-800 hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-2`}>
											{item.icon} {item.text}
										</div>
										<div className="absolute bottom-0 h-0.5 w-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
									</div>
								</div>
							))}
							{
								user?.role?.[0] === 'admin' ? (
									<div className='mt-3'>
										<Button onClick={() => navigate('/stores')}>Go to Admin Dashboard</Button>
									</div>
								) : (
									<>
										<div className="mt-3">
											<Button
												onClick={() =>
													navigate('/store')
												}
												block
												className="rounded-[5px]"
											>
												Login
											</Button>
										</div>

										<div className="mt-3">
											<HcfSignupPopup
												popupButtonStatus
												buttonChildren={
													<Button
														block
														variant="solid"
														className="rounded-[5px]"
													>
														Get Started
													</Button>
												}
												hcfLogin={true}
											/>
										</div>
									</>
								)
							}
						</div>
					</div>

					<div className="lg:hidden flex">
						<FaBars
							onClick={() => setMenuStatus(true)}
							size={30}
							className="text-white"
						/>
					</div>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center space-x-8">
						{/* Navigation Items */}
						{
							user?.role?.[0] === 'admin' ? (
								<div className='mt-3'>
									<Button variant='solid' className='rounded-[5px]' onClick={() => navigate('/stores')}>Go to Admin Dashboard</Button>
								</div>
							) : (
								<div className="flex items-center space-x-4">
									<Button
										onClick={() =>
											navigate('/store')
										}
										block
										className="rounded-[5px]"
									>
										Login
									</Button>

									<HcfSignupPopup
										popupButtonStatus
										buttonChildren={
											<Button
												block
												variant="solid"
												className="rounded-[5px]"
											>
												Get Started
											</Button>
										}
										hcfLogin={true}
									/>
								</div>
							)
						}

						{/* Buttons */}

					</div>
				</div >
			</div >
		</nav >
	);
};

export default HomeNavbar;
