import { colors } from '@/const';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<div className="flex flex-col lg:flex-row min-h-screen">
				{/* Left Section - Dark Background */}
				<div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col" style={{ backgroundColor: colors.dark }}>
					{/* Logo and Brand */}
					<Link href="./">
						<div className="text-xl sm:text-2xl font-bold flex gap-2 items-center text-neutral-100 ">
							<Image src="/whiteMessage.svg" alt="Message Icon" width={28} height={28} />
							Parley
						</div>
					</Link>
					{/* Spacer to push tagline to bottom on larger screens */}
					<div className="hidden flex-grow"></div>
					{/* Tagline */}
					<div className="hidden lg:block mt-4 lg:mt-auto text-center md:text-left">
						<p className="text-white text-base lg:text-l leading-relaxed">
							Bringing people together with instant messaging, crystal-clear calls, and seamless file
							sharing.
						</p>
					</div>
				</div>
				{/* Right Section - White Background with Login */}
				<div className="w-full lg:w-1/2 bg-white p-4 md:p-8 flex items-center justify-center">
					<div className="w-full max-w-md">
						{/* Login Header */}
						<div className="text-center mb-4 md:mb-8">
							<h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Login to Parley</h1>
							<p className="text-gray-600">Enter your email to sign in to your account</p>
						</div>
						{/* Login Button */}

						{/* Terms of Service */}
					</div>
				</div>

				{/* When screen is small */}
				<div className="lg:hidden flex flex-col items-center justify-center flex-grow w-full">
					{/* Tagline */}
					<div className="mt-auto text-center text-neutral-600 p-5">
						<p className="text-base leading-relaxed">
							Bringing people together with instant messaging, crystal-clear calls, and seamless file
							sharing.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
