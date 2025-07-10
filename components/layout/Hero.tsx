'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function GradientHero() {
	return (
		<div className="relative w-full overflow-hidden bg-[#fa005a] h-full flex items-center justify-center">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15"></div>

			<div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
				<div className="mx-auto max-w-5xl flex justify-center flex-col items-center">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mx-auto mb-6 flex justify-center"
					>

					</motion.div>

					{/* Heading */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-balance text-white font-bold text-center text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
					>
						Empowering Young Minds to Shine Bright
					</motion.h1>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-200"
					>Live online classes designed for school students with flexible timings, personalized support — all from the comfort of home.</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
					>
						<Button
							size="lg"
							className="group relative overflow-hidden rounded-full bg-primary px-6 text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:cursor-pointer"
						>
							<span className="relative z-10 flex items-center">
								Explore Courses
								<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
							</span>
							<span className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
						</Button>

					</motion.div>
				</div>
			</div>
		</div>
	);
}

