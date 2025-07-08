import { Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="relative overflow-hidden text-white rounded-t-3xl bg-[#fa005a] md:rounded-t-[4rem] shadow">
			<div className="container mx-auto max-w-6xl px-5 pb-8 pt-16">
				<div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-6">
					<div className="col-span-2">
						<div className="mb-4 flex items-center justify-start gap-2">
							<img
								src="/assets/kinder_logo_white.svg"
								alt="logo"
								height={180}
								width={180}
							/>
						</div>
						<p className="mb-4 text-white">Unlock you're english pottential with us.</p>
						<div className="flex space-x-3">
							<Link
								href="https://lnkd.in/gfsUj4j8"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full bg-black p-2 transition-colors hover:bg-black/60"
							>
								<Facebook className="h-5 w-5" />
							</Link>
							<Link
								href="https://www.linkedin.com/company/kinder-learning-club/"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full bg-black p-2 transition-colors hover:bg-black/60"
							>
								<Linkedin className="h-5 w-5" />
							</Link>
						</div>
					</div>
					<div className="col-span-1">
						<h3 className="mb-4 font-semibold">Product</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#features"
									className="text-white transition-colors hover:text-white/80 hover:underline"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-white transition-colors hover:text-white/80 hover:underline"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/docs/introduction"
									className="text-white transition-colors hover:text-white/80 hover:underline"
								>
									Introduction
								</Link>
							</li>
						</ul>
					</div>

					<div className="col-span-1">
						<h3 className="mb-4 font-semibold">Company</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/terms"
									className="text-white transition-colors hover:text-white/80 hover:underline"
								>
									Terms
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="text-white transition-colors hover:text-white/80 hover:underline"
								>
									Privacy
								</Link>
							</li>
							<li>
								<Link
									href="/license"
									className="text-whitetransition-colors hover:text-white/80 hover:underline"
								>
									License
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="relative border-t border-muted/50 pt-8">
					<div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
					<div className="flex flex-col items-center justify-between text-sm md:flex-row">
						<p>
							©{new Date().getFullYear()}{' '}
							<span className="font-medium italic text-white">Kinder Learning Club</span>.
							All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
