import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<div className="fixed top-0 left-0 w-full  bg-white border-b border-main">
			<div className="flex flex-row justify-between py-1 px-2  items-end">
				<div className="flex items-end ">
					<Image src="/big-logo.svg" alt="Color Flow" width={24} height={24} />
					<p className="text-main text-sm">Color Flow</p>
				</div>
				<Link href="/library" className="flex  items-end justify-center">
					<p className="text-main text-sm">Library</p>
				</Link>
			</div>
		</div>
	);
};

export default Header;
