import { Phone, Video } from 'lucide-react';
import { Button } from './ui/button';

export default function HomePageChat() {
	return (
		<>
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
								<p className="text-sm">Pretty good! Just finished that project we talked about.</p>
							</div>
							<div className="bg-neutral-100 p-2 rounded-lg rounded-tl-none max-w-[80%]">
								<p className="text-sm">That&apos;s awesome! Want to hop on a call to discuss?</p>
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
		</>
	);
}
