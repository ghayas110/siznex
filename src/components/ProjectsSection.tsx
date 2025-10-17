'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const projectSlides = [
	{
		title: 'World Bank/2030 Water Resources Group',
		image: '/project01.webp',
		description:
			'An interactive global map showcasing water access solutions powered by WebGL, Node.js, and UX research.',
		tags: [
			'WEB DESIGN',
			'WEB DEVELOPMENT',
			'INTERACTIVE MAP',
			'SEO OPTIMIZATION',
			'UX / UI DESIGN',
		],
	},
	{
		title: 'DowntownDC',
		image: '/project02.webp',
		description: 'A description for the second project showcasing innovative solutions.',
		tags: ['APP DESIGN', 'MOBILE DEVELOPMENT', 'UX / UI DESIGN'],
	},
	{
		title: 'Summit Ridge Energy',
		image: '/project03.jpg',
		description: 'Another project description.',
		tags: ['BRANDING', 'WEB DESIGN', 'SEO'],
	},
];

export default function ProjectsSection() {
	const [activeIndex, setActiveIndex] = useState(1);
	const swiperRef = useRef<SwiperClass | null>(null);

	// Helper to get left/right image indices (looping)
	const getIndex = (offset: number) =>
		(activeIndex + offset + projectSlides.length) % projectSlides.length;

	// Marquee tags: repeat tags to fill the row
	const marqueeTags = (tags: string[]) => {
		const repeated = [];
		for (let i = 0; i < 8; i++) {
			repeated.push(...tags);
		}
		return repeated;
	};

	return (
		<section className="py-12 lg:py-24 bg-[#ffff] text-black featured-projects">
			<div className="container flex flex-col items-center justify-center mx-auto px-4">
				<h2 className="text-3xl lg:text-4xl font-semibold text-center mb-8 lg:mb-10">
					Featured Projects
				</h2>
			</div>

			{/* Custom layout: left image | left arrow | center Swiper | right arrow | right image */}
			<div
				className="flex flex-col lg:flex-row items-center justify-center w-full max-w-full mx-auto"
				style={{ minHeight: 400 }}
			>
				{/* Left image */}
				<div className="hidden lg:block w-[20vw] max-w-xs opacity-60 scale-90 transition-all duration-300">
					<Image
						src={projectSlides[getIndex(-1)].image}
						alt={projectSlides[getIndex(-1)].title}
						width={800}
						height={925}
						className="object-cover rounded-lg"
						style={{ width: '100%', height: 700, objectFit: 'cover' }}
					/>
				</div>

				{/* Left arrow */}
				<button
					className="mx-2 z-20 swiper-button-prev-custom hidden lg:block"
					onClick={() => swiperRef.current?.slidePrev()}
				>
					<svg width="40" height="18" viewBox="0 0 40 18">
						<path
							d="M40 9H2M2 9l7-7M2 9l7 7"
							stroke="#000"
							strokeWidth="2"
							fill="none"
						/>
					</svg>
				</button>

				{/* Center image (Swiper for touch/drag) */}
				<div className="w-full lg:w-[60%] mx-2">
					<Swiper
						modules={[Navigation]}
						onSwiper={(swiper) => {
							swiperRef.current = swiper;
						}}
						onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
						initialSlide={activeIndex}
						slidesPerView={1}
						loop
						className="w-full"
					>
						{projectSlides.map((project, index) => (
							<SwiperSlide key={index}>
								<div className="overflow-hidden whitespace-nowrap border-b border-[#fff] mb-8">
									<div className="marquee flex items-center animate-marquee">
										{marqueeTags(projectSlides[activeIndex].tags).map(
											(tag, i) => (
												<span
													key={i}
													className="mx-4 text-sm uppercase tracking-wider text-black font-medium"
												>
													{tag}
												</span>
											)
										)}
									</div>
								</div>
								<div className="relative w-full aspect-[16/10] bg-white rounded-lg overflow-hidden flex items-end">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										priority={index === 0}
									/>
									{/* Overlay Info */}
									<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
										<h3 className="text-xl lg:text-2xl font-bold mb-2">
											{project.title}
										</h3>
										<p className="text-sm lg:text-base text-gray-200">
											{project.description}
										</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Right arrow */}
				<button
					className="mx-2 z-20 swiper-button-next-custom hidden lg:block"
					onClick={() => swiperRef.current?.slideNext()}
				>
					<svg width="40" height="18" viewBox="0 0 40 18">
						<path
							d="M0 9h38M38 9l-7-7M38 9l-7 7"
							stroke="#000"
							strokeWidth="2"
							fill="none"
						/>
					</svg>
				</button>

				{/* Right image */}
				<div className="hidden lg:block w-[20vw] max-w-xs opacity-60 scale-90 transition-all duration-300">
					<Image
						src={projectSlides[getIndex(1)].image}
						alt={projectSlides[getIndex(1)].title}
						width={800}
						height={925}
						className="object-cover rounded-lg"
						style={{ width: '100%', height: 700, objectFit: 'cover' }}
					/>
				</div>
			</div>

			{/* Marquee animation CSS */}
			<style jsx global>{`
				.animate-marquee {
					display: inline-block;
					white-space: nowrap;
					animation: marquee 30s linear infinite;
				}
				@keyframes marquee {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.swiper-button-prev-custom,
				.swiper-button-next-custom {
					background: none;
					border: none;
					padding: 0;
					cursor: pointer;
				}
			`}</style>
		</section>
	);
}