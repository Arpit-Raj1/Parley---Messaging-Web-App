import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, MessageSquare, Shield, Github } from 'lucide-react';
import FeatureElement from '@/components/featureElement';
import HomePageChat from '@/components/homePageChat';
import HomeNavbar from '@/components/homeNavbar';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center min-h-screen my-2">
				<div className="w-full">
					{/* Navbar */}
					<HomeNavbar />

					{/* Body */}
					<main className="w-full">
						<section className="p-4 lg:flex flex-1 lg:min-h-[75vh]  lg:items-center lg:px-10 xl:px-30">
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
							<HomePageChat />
						</section>
						<section
							className="flex flex-col items-center bg-neutral-100 min-h-[50vh] px-4 py-16 lg:px-10 xl:px-30 md:py-32 mt-10 lg:mt-0"
							id="features"
						>
							<div className="bg-neutral-900 py-2 px-3 text-white font-semibold rounded-md">Features</div>
							<div className="flex flex-col items-center pt-4 ">
								<div className="text-3xl font-bold py-2">Everything you need to stay connected</div>
								<div className="text-xl text-neutral-600">
									Parley combines the best messaging features with a beautiful, intuitive interface
								</div>
							</div>
							<div className="flex flex-col lg:flex-row w-full sm:items-start py-5">
								<FeatureElement
									icon={MessageSquare}
									subHeading="Instant Messaging"
									description="Chat with your friends instantly and privately."
								/>
								<FeatureElement
									icon={Phone}
									subHeading="Crystal-Clear Calls"
									description="Make voice and video calls with exceptional quality, even on slower connections."
								/>
								<FeatureElement
									icon={Shield}
									subHeading="End-to-End Encryption"
									description="Your conversations are secure with state-of-the-art encryption technology."
								/>
							</div>
						</section>

						{/* Footer */}
						<section>
							<div className="flex flex-row min-h-[25vh] px-4 lg:px-10 xl:px-30 py-10" id="contact">
								{/* logo + Name */}
								<div>
									<Link href={'./'}>
										<div className="text-xl sm:text-2xl font-bold flex gap-2 items-center">
											<Image src="/message.svg" alt="Message Icon" width={28} height={28} />
											Parley
										</div>
									</Link>
									<div className="text-neutral-600">Connect with anyone anywhere</div>
								</div>

								{/* Contacts */}
								<div className="flex justify-end w-full align-bottom ">
									<Link
										href={'https://github.com/Arpit-Raj1/Parley---Messaging-Web-App'}
										className="p-2"
									>
										<Github className="inline align-bottom" height={30} width={30} />
										<div className="underline inline text-2xl p-2">Github</div>
									</Link>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</>
	);
}
