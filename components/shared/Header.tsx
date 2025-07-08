'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { SparklesCore } from '../ui/sparkles';

interface NavItem {
	name: string;
	href: string;
	hasDropdown?: boolean;
	dropdownItems?: { name: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
	{ name: 'Home', href: '/' },
	{ name: 'Courses', href: '/courses' },
	{ name: 'Contact', href: '/contact' },
	{ name: 'About', href: '/about' },
];

export default function Header1() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [scrollY, setScrollY] = useState(0);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [showHeader, setShowHeader] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	const { theme } = useTheme();

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					const currentScrollY = window.scrollY;

					// Show header when scrolling up, hide when scrolling down
					if (currentScrollY > 100) {
						if (currentScrollY < lastScrollY) {
							setShowHeader(true);
						} else {
							setShowHeader(false);
						}
					} else {
						setShowHeader(true);
					}

					setScrollY(currentScrollY);
					setLastScrollY(currentScrollY);
					setIsScrolled(currentScrollY > 10);
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	const headerVariants = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: 'easeInOut',
			}
		},
		hidden: {
			y: -100,
			opacity: 0,
			transition: {
				duration: 0.3,
				ease: 'easeInOut',
			}
		},
	};

	const mobileMenuVariants = {
		closed: { opacity: 0, height: 0 },
		open: { opacity: 1, height: 'auto' },
	};

	const dropdownVariants = {
		hidden: { opacity: 0, y: -10, scale: 0.95 },
		visible: { opacity: 1, y: 0, scale: 1 },
	};

	return (
		<motion.header
			className="fixed left-0 right-0 top-0 z-50 overflow-hidden"
			variants={headerVariants}
			initial="visible"
			animate={showHeader ? 'visible' : 'hidden'}
			style={{
				backgroundColor: '#fa005a',
				borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
				boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
			}}
		>
			{/* Fixed background particles */}
			{mounted && (
				<div className="absolute inset-0 pointer-events-none">
					<SparklesCore
						id="header-particles"
						background="transparent"
						minSize={0.8}
						maxSize={1}
						particleDensity={100}
						className="absolute inset-0 w-full h-full"
						particleColor="#ffffff"
						speed={0.5}
					/>
				</div>
			)}
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between lg:h-30">
					<motion.div
						className="flex items-center space-x-2"
						whileHover={{ scale: 1.02 }}
						transition={{ type: 'spring', stiffness: 400, damping: 17 }}
					>
						<Link href="/" className="flex items-center space-x-4">
							<div className="relative">
								<Image
									src={"/assets/kinder_logo_white.svg"}
									alt='logo'
									width={180}
									height={180}
									className='mt-4 transition-all duration-300 ease-in-out w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-45 xl:h-45'
									style={{
										filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
									}}
								/>
							</div>
						</Link>
					</motion.div>

					<nav className="hidden items-center space-x-8 lg:flex">
						{navItems.map((item) => (
							<div
								key={item.name}
								className="relative"
								onMouseEnter={() =>
									item.hasDropdown && setActiveDropdown(item.name)
								}
								onMouseLeave={() => setActiveDropdown(null)}
							>
								<Link
									href={item.href}
									className="group flex items-center space-x-1 font-medium text-white transition-all duration-200 hover:text-white/80"
								>
									<span className="relative">
										{item.name}
										<span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
									</span>
									{item.hasDropdown && (
										<ChevronDown
											className="h-4 w-4 transition-all duration-200 group-hover:rotate-180"
										/>
									)}
								</Link>

								{item.hasDropdown && (
									<AnimatePresence>
										{activeDropdown === item.name && (
											<motion.div
												className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-white shadow-xl"
												variants={dropdownVariants}
												initial="hidden"
												animate="visible"
												exit="hidden"
												transition={{ duration: 0.2, ease: 'easeOut' }}
											>
												{item.dropdownItems?.map((dropdownItem, index) => (
													<motion.div
														key={dropdownItem.name}
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: index * 0.05 }}
													>
														<Link
															href={dropdownItem.href}
															className="block px-4 py-3 transition-all duration-200 hover:bg-gray-50 hover:translate-x-1"
														>
															<div className="font-medium text-gray-900">
																{dropdownItem.name}
															</div>
															{dropdownItem.description && (
																<div className="text-sm text-gray-600">
																	{dropdownItem.description}
																</div>
															)}
														</Link>
													</motion.div>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								)}
							</div>
						))}
					</nav>

					<motion.button
						className="rounded-lg p-2 transition-all duration-200 hover:bg-white/10 lg:hidden"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						whileTap={{ scale: 0.95 }}
						whileHover={{ scale: 1.05 }}
					>
						<AnimatePresence mode="wait">
							{isMobileMenuOpen ? (
								<motion.div
									key="close"
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<X className="h-6 w-6 text-white" />
								</motion.div>
							) : (
								<motion.div
									key="menu"
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<Menu className="h-6 w-6 text-white" />
								</motion.div>
							)}
						</AnimatePresence>
					</motion.button>
				</div>

				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							className="overflow-hidden lg:hidden"
							variants={mobileMenuVariants}
							initial="closed"
							animate="open"
							exit="closed"
							transition={{ duration: 0.3, ease: 'easeInOut' }}
						>
							<div
								className="mt-4 space-y-2 rounded-xl border border-white/10 py-4 shadow-xl"
								style={{
									backgroundColor: 'black',
									backdropFilter: 'blur(20px) saturate(180%)',
									WebkitBackdropFilter: 'blur(20px) saturate(180%)',
								}}
							>
								{navItems.map((item, index) => (
									<motion.div
										key={item.name}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Link
											href={item.href}
											className="block px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-gray-50 hover:translate-x-2"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									</motion.div>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.header>
	);
}
