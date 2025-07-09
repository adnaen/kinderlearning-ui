'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function GradientHero() {
	return (
		<div className="relative w-full overflow-hidden bg-background h-full">
			{/* Background gradient */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
				<div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"></div>
			</div>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15"></div>

			<div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
				<div className="mx-auto max-w-5xl">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mx-auto mb-6 flex justify-center"
					>
						<div className="inline-flex items-center rounded-full border border-border bg-background/80 px-3 py-1 text-sm backdrop-blur-sm">
							<span className="mr-2 rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-white">
								New
							</span>
							<span className="text-muted-foreground">
								Introducing our latest component library
							</span>
							<ChevronRight className="ml-1 h-4 w-4 text-muted-foreground" />
						</div>
					</motion.div>

					{/* Heading */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-balance bg-gradient-to-tl from-primary/10 via-foreground/85 to-foreground/50 bg-clip-text text-center text-4xl tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
					>
						Build beautiful interfaces with speed and precision
					</motion.h1>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground"
					>
						A modern UI component library designed to help developers create
						stunning web applications with minimal effort. Fully customizable,
						responsive, and accessible.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
					>
						<Button
							size="lg"
							className="group relative overflow-hidden rounded-full bg-primary px-6 text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-primary/30"
						>
							<span className="relative z-10 flex items-center">
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
							</span>
							<span className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
						</Button>

						<Button
							variant="outline"
							size="lg"
							className="flex items-center gap-2 rounded-full border-border bg-background/50 backdrop-blur-sm"
						>
							<Github className="h-4 w-4" />
							Star on GitHub
						</Button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

