import React from "react";
import Image from "next/image";
import { libraryData } from "@/consts/libraryData";
import FivePallet from "./FivePallet";
import Link from "next/link";

const Card = ({ id }: { id: number }) => {
	const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(libraryData[id].url);

	return (
		<div className="flex flex-row items-end border border-main rounded-lg p-2 gap-2 shadow">
			<div className="w-24 h-24 flex items-center justify-center rounded-lg overflow-hidden">
				{isImage ? (
					<Image
						src={libraryData[id].url}
						alt="Color Flow"
						width={100}
						height={100}
						className="object-cover"
					/>
				) : (
					<Link
						href={libraryData[id].url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center w-full h-full bg-gray-100 hover:bg-gray-200 transition-colors"
					>
						<span className="text-sm text-gray-600">サイトを開く</span>
					</Link>
				)}
			</div>
			<div style={{ width: "12.5rem" }} className="flex flex-col gap-2">
				<Link
					href={libraryData[id].url}
					target="_blank"
					className="text-sm overflow-hidden text-ellipsis whitespace-nowrap hover:underline text-main"
				>
					{libraryData[id].url}
				</Link>
				<FivePallet id={id} />
			</div>
		</div>
	);
};

export default Card;
