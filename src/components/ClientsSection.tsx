'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
	{
		quote: 'Overall, loved working with the team at Design in DC and look forward to a continued partnership with them.',
		name: 'Pinakin Patel',
		designation: 'CEO - IT Concept',
		video: '/hero-video.mp4'
	},
	{
		quote: 'Great team to work with, they understood our goals and helped us build a great platform.',
		name: 'Sarah Thomas',
		designation: 'CMO - Finverse',
		video: '/hero-video.mp4'
	},
	{
		quote: 'Fantastic support and execution throughout the entire process.',
		name: 'Jason Lee',
		designation: 'Founder - RetailX',
		video: '/hero-video.mp4'
	}
];

const achievements = [
	'/logos/logo1.png',
	'/logos/logo2.webp',
	'/logos/logo3.webp',
	'/logos/logo4.webp',
	'/logos/logo1.png',
	'/logos/logo2.webp',
	'/logos/logo3.webp',
	'/logos/logo4.webp',
	'/logos/logo1.png',
	'/logos/logo2.webp',
	'/logos/logo3.webp',
	'/logos/logo4.webp',
	'/logos/logo1.png',
	'/logos/logo2.webp',
	'/logos/logo3.webp',
	'/logos/logo4.webp',
	'/logos/logo1.png',
	'/logos/logo2.webp',
	'/logos/logo3.webp',
	'/logos/logo4.webp',
	'/logos/logo1.png',
	'/logos/logo2.webp',
	'/logos/logo3.webp',
	'/logos/logo4.webp'
];

const ClientsSection = () => {
	const [current, setCurrent] = useState(0);
	const [fade, setFade] = useState(true);

	const nextSlide = () => {
		setFade(false);
		setTimeout(() => {
			setCurrent((prev) => (prev + 1) % testimonials.length);
			setFade(true);
		}, 100);
	};

	const prevSlide = () => {
		setFade(false);
		setTimeout(() => {
			setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
			setFade(true);
		}, 100);
	};

	// Auto-slide every 6 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="py-16 bg-[#13141A] text-white">
			<div className="max-w-7xl mx-auto px-6">
				{/* Heading */}
				<h2 className="text-5xl font-semibold text-[#6563ff]">We love our clients</h2>
				<p className="text-lg">And clients love to work with us</p>

				{/* Testimonial Slider */}
				<div className="flex flex-col md:flex-row gap-8 items-center justify-between mt-12">
					{/* Text Section */}
					<div className="md:w-1/2 text-center md:text-left transition-opacity duration-500" style={{ opacity: fade ? 1 : 0 }}>
						<blockquote className="italic text-xl leading-relaxed">“{testimonials[current].quote}”</blockquote>
						<div className="mt-6 text-sm font-semibold uppercase tracking-wide">
							{testimonials[current].name}
							<div className="text-gray-400 text-xs font-normal">{testimonials[current].designation}</div>
						</div>
					</div>

					{/* Video Section */}
					<div className="md:w-1/2 transition-opacity duration-500" style={{ opacity: fade ? 1 : 0 }}>
						<video
							src={testimonials[current].video}
							controls
							className="rounded-md w-full h-[220px] md:h-[280px] object-cover"
						/>
					</div>
				</div>

				{/* Pagination and Arrows */}
				<div className="flex items-center justify-end mt-6 space-x-4">
					<div className="flex space-x-1">
						{testimonials.map((_, i) => (
							<span
								key={i}
								className={`h-[2px] min-w-[400px] transition-all duration-300 ${i === current ? 'bg-[#6563ff]' : 'bg-gray-600'}`}
							></span>
						))}
					</div>
					<button onClick={prevSlide}><ArrowLeft className="text-white w-4 h-4 hover:text-[#6563ff]" /></button>
					<button onClick={nextSlide}><ArrowRight className="text-white w-4 h-4 hover:text-[#6563ff]" /></button>
				</div>

				{/* Achievements */}
				<div className="mt-20">
					<h3 className="text-xl font-medium mb-6">Our Achievements</h3>
					<div className="w-full overflow-hidden">
						<div className="flex space-x-6 animate-scroll">
							{achievements.map((src, index) => (
								<img
									key={index}
									src={src}
									alt={`Achievement ${index + 1}`}
									className="h-16 w-auto"
								/>
							))}
							{/* Duplicate images for seamless scrolling */}
							{achievements.map((src, index) => (
								<img
									key={`duplicate-${index}`}
									src={src}
									alt={`Achievement Duplicate ${index + 1}`}
									className="h-16 w-auto"
								/>
							))}
						</div>
					</div>

					{/* Tailwind Keyframe Styles */}
					<style jsx>{`
						@keyframes scroll {
							from {
								transform: translateX(0%);
							}
							to {
								transform: translateX(-100%);
							}
						}
						.animate-scroll {
							animation: scroll 20s linear infinite;
						}
					`}</style>
				</div>
			</div>
		</section>
	);
};

export default ClientsSection;
