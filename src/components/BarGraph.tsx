
interface BarGraphProps {
	data: { label: string; value: number }[];
	title?: string;
}

const BarGraph: React.FC<BarGraphProps> = ({ data, title }) => {
	const maxValue = Math.max(...data.map((item) => item.value));

	return (
		<div className="space-y-4">
			{title && <h2 className="text-lg font-semibold">{title}</h2>}
			<div className="space-y-2">
				{data.map((item, index) => (
					<div key={index} className="flex items-center">
						<span className="w-20 text-sm">{item.label}</span>
						<div className="relative flex-1 bg-gray-200 h-6 rounded-md">
							<div
								className="absolute bg-blue-500 h-6 rounded-md"
								style={{ width: `${(item.value / maxValue) * 100}%` }}
							/>
						</div>
						<span className="ml-2 text-sm">{item.value}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default BarGraph;
