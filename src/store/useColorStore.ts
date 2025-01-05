import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface ColorStore {
	color: string;
	setColor: (color: string) => void;
}

const useColorStore = create<ColorStore>()(
	devtools(
		persist(
			(set) => ({
				color: "#ffffff",
				setColor: (color: string) => set({ color }),
			}),
			{
				name: "color-storage",
			}
		)
	)
);

export default useColorStore;
