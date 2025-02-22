import Card from "@/components/feature/library/Card";
import { libraryData } from "@/consts/libraryData";

const Library = () => {
	// libraryDataの数だけmapしてCardを表示する
	return (
		<div className="flex flex-row gap-2 flex-wrap">
			{libraryData.map((data) => (
				<Card key={data.id} id={data.id} />
			))}
		</div>
	);
};

export default Library;
