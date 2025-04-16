import Image from 'next/image';
import { colors } from '@/const';

export default function Home() {
	return (
		<>
			<div className="flex flex-col md:flex-row min-h-screen">
				{/* Left Section - Dark Background */}
				<div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col" style={{ backgroundColor: colors.dark }}>
					{/* Logo and Brand */}
					<div className="mb-4 md:mb-8 flex items-center justify-center md:justify-start">
						<div className="mr-2 text-2xl text-white font-semibold">LetsChat</div>
					</div>
					{/* Spacer to push tagline to bottom on larger screens */}
					<div className="flex-grow"></div>
					{/* Tagline */}
					<div className="mt-4 md:mt-auto text-center md:text-left">
						<p className="text-white text-base md:text-l leading-relaxed">
							Learn, collaborate, and grow with real-world projects, mentor support, and a community that
							helps you turn learning into impact.
						</p>
					</div>
				</div>
				{/* Right Section - White Background with Login */}
				<div className="w-full md:w-1/2 bg-white p-4 md:p-8 flex items-center justify-center">
					<div className="w-full max-w-md">
						{/* Login Header */}
						<div className="text-center mb-4 md:mb-8">
							<h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Login to CollabNest</h1>
							<p className="text-gray-600">Securely sign in with your Microsoft account</p>
						</div>
						{/* Microsoft Login Button with Loader */}

						{/* Terms of Service */}
					</div>
				</div>
			</div>
		</>
	);
}
