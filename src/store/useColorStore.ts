import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface ColorStore {
	color: string;
	setColor: (color: string) => void;
	choiceColor: string;
	setChoiceColor: (color: string) => void;
}

const useColorStore = create<ColorStore>()(
	devtools(
		persist(
			(set) => ({
				color: "",
				setColor: (color: string) => set({ color }),
				choiceColor: "",
				setChoiceColor: (color: string) => set({ choiceColor: color }),
			}),
			{
				name: "color-storage",
			}
		)
	)
);

export default useColorStore;
