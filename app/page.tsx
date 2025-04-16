import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, Video } from 'lucide-react';

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center min-h-screen my-2">
				<div className="w-full">
					{/* Navbar */}
					<header className="w-full border-b-1 xl:px-30">
						<div className="container mx-auto">
							<div className="p-3 flex flex-row justify-between">
								<Link href={'./'}>
									<div className="text-xl sm:text-2xl font-bold flex gap-2 items-center">
										<Image src="/message.svg" alt="Message Icon" width={28} height={28} />
										Parley
									</div>
								</Link>

								<nav className="hidden md:flex gap-6 text-l font-semibold items-center">
									<Link href={'/#features'}>Features</Link>
									<Link href={'./#contact'}>Contact</Link>
								</nav>

								<div className="flex gap-2">
									<Link href={'./login'}>
										<Button>LogIn</Button>
									</Link>
									<Link href={'./signup'}>
										<Button>SignUp</Button>
									</Link>
								</div>
							</div>
						</div>
					</header>

					{/* Body */}
					<main className="w-full xl:px-30">
						<section className="p-4 lg:flex flex-1 lg:min-h-[75vh] lg:items-center ">
							<div className="container pt-4 sm:pt-12  lg:pt-2 lg:w-1/2">
								<p className="text-3xl sm:text-5xl font-bold">Connect with anyone, anywhere</p>
								<p className="py-3 text-neutral-600 text-xl">
									Bringing people together with instant messaging, crystal-clear calls, and seamless
									file sharing.
								</p>
								<Link href={'./signup'} className="flex justify-center sm:justify-start">
									<Button className="my-2 text-xl px-8 py-6">Get Started</Button>
								</Link>
							</div>
							<div className="flex flex-2 justify-center items-center">
								<div className="w-100 min-w-75 aspect-square bg-neutral-300 flex justify-center items-center rounded-3xl drop-shadow-2xl">
									<div className="p-4 w-4/5 sm:w-3/4 aspect-square bg-white rounded-3xl flex flex-col">
										<div className="flex items-center gap-3 mb-4">
											<div className="w-10 h-10 rounded-full bg-neutral-400 flex items-center justify-center">
												<span className="font-bold">AR</span>
											</div>
											<div>
												<h3 className="font-medium">Arpit Raj</h3>
												<p className="text-xs">Online</p>
											</div>
										</div>
										<div className="flex-1 overflow-y-auto space-y-3">
											<div className="bg-neutral-100 p-2 rounded-lg rounded-tl-none max-w-[80%]">
												<p className="text-sm">Hey! How&apos;s your day going?</p>
											</div>
											<div className="bg-neutral-300 p-2 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
												<p className="text-sm">
													Pretty good! Just finished that project we talked about.
												</p>
											</div>
											<div className="bg-neutral-100 p-2 rounded-lg rounded-tl-none max-w-[80%]">
												<p className="text-sm">
													That&apos;s awesome! Want to hop on a call to discuss?
												</p>
											</div>
										</div>
										<div className="mt-4 flex items-center gap-2">
											<div className="flex-1 bg-neutral-100 rounded-full px-4 py-2 text-sm">
												Type a message...
											</div>
											<Button size="icon" variant="ghost">
												<Phone className="h-4 w-4" />
											</Button>
											<Button size="icon" variant="ghost">
												<Video className="h-4 w-4" />
											</Button>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="bg-neutral-300" id="features">
							<div>Hello</div>
						</section>
					</main>
				</div>
			</div>
		</>
	);
}
