'use client';

import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import { redirect } from 'next/navigation';

export function NavbarDemo() {
	const navItems = [
		{
			name: 'Home',
			link: '/docs/introduction',
		},
		{
			name: 'Courses',
			link: '/about',
		},
		{
			name: 'Contact',
			link: '/#features',
		},
		{
			name: 'About',
			link: '/showcase',
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<Navbar className="z-[150]">
			<NavBody>
				<NavbarLogo width={120} height={120} />
				<NavItems items={navItems} />
			</NavBody>

			{/* Mobile Navigation */}
			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo width={100} height={100} />
					<div className="flex items-center gap-4">
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</div>
				</MobileNavHeader>

				<MobileNavMenu
					isOpen={isMobileMenuOpen}
					onClose={() => setIsMobileMenuOpen(false)}
				>
					{navItems.map((item, idx) => (
						<a
							key={`mobile-link-${idx}`}
							href={item.link}
							onClick={() => setIsMobileMenuOpen(false)}
							className="relative text-white dark:text-neutral-300"
						>
							<span className="block">{item.name}</span>
						</a>
					))}
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	);
}
