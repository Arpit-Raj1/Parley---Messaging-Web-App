import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HomeNavbar() {
	return (
		<>
			<header className="w-full border-b-1 lg:px-10 xl:px-30">
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
		</>
	);
}
