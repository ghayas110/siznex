'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { a } from 'framer-motion/client';

const categories = [
	'All',
		"Keyword Research",
		"Infographics",
		"Listing Optimization",
		"MAP Enforcement",
		"A to Z Claim",
		"Amazon Cases",
		"Account health",
		"Listing Issues",
		"A+ Premium",
		"Storefront Creation",
		"Amazon PPC Optimization",
		"Coupon/promotion Management",
		"Infringements/Hijacker Removal",
		"Daily On-going Tasks",
		
	
];

const projects = [

	{
		title: 'Collins smart Ceiling fan',
		image: '/fan.jpg',
		category: 'Infographics',
		description: 'An e-commerce platform for handmade crafts.',
	},
	{
		title: 'Rechargeable table lamps',
		image: '/lightning-lamp.jpg',
		category: 'Infographics',
		description: 'Lighting solutions for modern living.',
	},
	{
		title: 'Legrand - 15a Self Test Outlet',
		image: '/self-test-outlet.jpg',
		category: 'Infographics',
		description:
			'An e-commerce platform for handmade crafts.',
	},
	{
		title: 'BUBRITE:Traverse LED',
		image: '/Transverse-led.jpg',
		category: 'Infographics',
		description: 'An e-commerce platform for handmade crafts.',
	},
	{
		title: 'BULBRITE:LED Filament T9 Light Bulb',
		image: '/T9-Light-Bulb.png',
		category: 'Infographics',
		description: 'An e-commerce platform for handmade crafts.',
	},
{
		title: 'Chandelier Lift System',
		image: '/chandelier-lift-system.jpg',
		category: 'Infographics',
		description: 'An e-commerce platform for handmade crafts.',
	},
	{
		title: 'A to Z Claim Management',
		image: '/a-z claim/1.jpg',
		category: 'A to Z Claim',
		description: 'amazon a to z claim management',
	},
	{
		title: 'A to Z Claim Management',
		image: '/a-z claim/2.jpg',
		category: 'A to Z Claim',
		description: 'amazon a to z claim management',
	},
	{
		title: 'A to Z Claim Management',
		image: '/a-z claim/3.jpg',
		category: 'A to Z Claim',
		description: 'amazon a to z claim management',
	},
	{
		title: 'A to Z Claim Management',
		image: '/a-z claim/4.jpg',
		category: 'A to Z Claim',
		description: 'amazon a to z claim management',
	},
	{
		title: 'A to Z Claim Management',
		image: '/a-z claim/5.jpg',
		category: 'A to Z Claim',
		description: 'amazon a to z claim management',
	},
	{
		title:  "Account Health Management",
		image: '/account-health/1.jpg',
		category: 'Account health',
		description: 'amazon account health management',
	},
	{
		title: "Amazon Cases Management",
		image: '/amazon-cases/1.jpg',
		category: 'Amazon Cases',
		description: 'amazon cases management',
		
	},
	{
		title: "Amazon Cases Management",
		image: '/amazon-cases/2.jpg',
		category: 'Amazon Cases',
		description: 'amazon cases management',
		
	},
	{
		title: "Amazon Cases Management",
		image: '/amazon-cases/3.jpg',
		category: 'Amazon Cases',
		description: 'amazon cases management',
		
	},
	{
		title: "Amazon Cases Management",
		image: '/amazon-cases/4.jpg',
		category: 'Amazon Cases',
		description: 'amazon cases management',
		
	},
	{
		title: "Amazon Cases Management",
		image: '/amazon-cases/5.jpg',
		category: 'Amazon Cases',
		description: 'amazon cases management',
		
	},
	{
		title: "Amazon Cases Management",
		image: '/amazon-cases/6.jpg',
		category: 'Amazon Cases',
		description: 'amazon cases management',
		
	},
	{
		title: "Amazon Cases Management",
		image: '/amazon-cases/8.jpg',
		category: 'Amazon Cases',
		description: 'amazon cases management',

	},
	{
		title: "Amazon Cases Management",
		image: '/amazon-cases/9.jpg',
		category: 'Amazon Cases',
		description: 'amazon cases management',

	},
	{
		title: "Amazon Cases Management",
		image: '/amazon-cases/10.jpg',
		category: 'Amazon Cases',
		description: 'amazon cases management',

	},
	{
		title: "Keyword Research Project",
		image: '/keyword-research/1.jpg',
		category: 'Keyword Research',
		description: 'amazon keyword research project',

	},
	{
		title: "Listing Optimization Project",
		image: '/listing-optimization/1.jpg',
		category: 'Listing Optimization',
		description: 'amazon listing optimization project',

	},
	{
		title: "Listing Issues Project",
		image: '/listing-issues/1.jpg',
		category: 'Listing Issues',
		description: 'amazon listing issues project',

	}
	,{
		title: "Listing Issues Project",
		image: '/listing-issues/2.jpg',
		category: 'Listing Issues',
		description: 'amazon listing issues project',
	},
	{
		title: "Listing Issues Project",
		image: '/listing-issues/3.jpg',
		category: 'Listing Issues',
		description: 'amazon listing issues project',
	},
	{
		title: "Listing Issues Project",
		image: '/listing-issues/4.jpg',
		category: 'Listing Issues',
		description: 'amazon listing issues project',
	},
{
		title: "Map Enforcement Project",
		image: '/map-enforcement/1.png',
		category: 'MAP Enforcement',
		description: 'amazon map enforcement project',
	},

];

export default function WorkPage() {
	const [activeCategory, setActiveCategory] = useState('All');
	const [displayedProjects, setDisplayedProjects] = useState(projects.slice(0, 2));
	const categoryRef = useRef<HTMLDivElement>(null);

	const filteredProjects =
		activeCategory === 'All'
			? projects
			: projects.filter((project) => project.category === activeCategory);

	useEffect(() => {
		const onScroll = () => {
			const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
			// Use the latest filteredProjects inside the handler
			const currentFiltered =
				activeCategory === 'All'
					? projects
					: projects.filter((project) => project.category === activeCategory);

			if (
				nearBottom &&
				displayedProjects.length < currentFiltered.length
			) {
				setDisplayedProjects((prev) => {
					if (prev.length < currentFiltered.length) {
						return [...prev, currentFiltered[prev.length]];
					}
					return prev;
				});
			}
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
		// Only depend on displayedProjects.length and activeCategory
	}, [displayedProjects.length, activeCategory]);

	useEffect(() => {
		if (activeCategory === 'All') {
			setDisplayedProjects(projects.slice(0, 2));
		} else {
			setDisplayedProjects(
				projects.filter((project) => project.category === activeCategory).slice(0, 2)
			);
		}
	}, [activeCategory]);

	const scrollCategories = (direction: 'left' | 'right') => {
		if (categoryRef.current) {
			categoryRef.current.scrollBy({
				left: direction === 'left' ? -200 : 200,
				behavior: 'smooth',
			});
		}
	};

	return (
		<section className=" text-white overflow-hidden">
			{/* Background Image */}
			<div className="absolute top-0 inset-0 z-0">
				<Image
					src="/bg-work.jpg"
					alt="Work Background"
					layout="fill"
					objectFit="cover"
					quality={100}
					className="opacity-80"
					priority
				/>
			</div>

			{/* Main Content */}
			<div className="relative z-10 px-4 md:px-10 pt-36 pb-20 max-w-7xl mx-auto">
				{/* Heading Section */}
				<div className="mb-12 pt-32 pl-8 md:pt-40 md:pl-20 text-left max-w-full">
					<h1 className="text-4xl md:text-6xl font-light mb-4">Work</h1>
					<p className="text-base md:text-xl text-gray-200 max-w-3xl">
						We follow a creative step-by-step process to transform your vision into reality by creating a digital identity that integrates diverse marketing elements to resonate with your target audience. Explore our work by clicking on a case study below.
					</p>
				</div>

				{/* Category Filter */}
				<div className="relative mb-12">
					<button
						onClick={() => scrollCategories('left')}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 text-white p-1 rounded-full hover:bg-gray-800"
					>
						<ArrowLeft size={18} />
					</button>
					<div
						className="flex gap-4 overflow-x-auto pb-2 border-b border-gray-700 no-scrollbar mx-10"
						ref={categoryRef}
					>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`text-sm font-medium whitespace-nowrap px-2 py-1 border-b-2 transition-all duration-300 ${
									activeCategory === category
										? 'border-white text-white'
										: 'border-transparent text-gray-400'
								}`}
							>
								{category}
							</button>
						))}
					</div>
					<button
						onClick={() => scrollCategories('right')}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 text-white p-1 rounded-full hover:bg-gray-800"
					>
						<ArrowRight size={18} />
					</button>
				</div>

				{/* Project Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg">
					{displayedProjects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="relative rounded-lg overflow-hidden group cursor-pointer bg-white hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300"
						>
							<Image
								src={project.image}
								alt={project.title}
								width={1000}
								height={1000}
								className="w-full h-auto object-cover rounded-lg"
							/>
							<div className="absolute bottom-6 left-6 text-pink-500 z-10">
								<h3 className="text-xl font-semibold">{project.title}</h3>
								<p className="text-sm text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									{project.description}
								</p>
							</div>
							<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
