import FeatureElementProps from '@/config/featureElementProps';

export default function FeatureElement({ icon: Icon, subHeading, description }: FeatureElementProps) {
	return (
		<>
			<div className="flex flex-col lg:w-1/3 p-5 xl:px-8">
				<div className="p-2 w-12 aspect-square bg-neutral-300 rounded-lg">
					<Icon className="w-8 h-8 " />
				</div>
				<div className="py-2 text-2xl font-semibold">{subHeading}</div>
				<div className="text-xl text-neutral-600">{description}</div>
			</div>
		</>
	);
}
