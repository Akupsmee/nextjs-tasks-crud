import Link from "next/link";

import DrinkList from "@/components/DrinkList"

const fetchDrinks = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000))

	const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Failed to fetch drinks")
	}

	return await response.json();
};

const DrinksPage = async () => {
	const data = await fetchDrinks()
	return (
		<div>
			<h1 className="text-7xl">DrinksPage</h1>
			<DrinkList drinks={data.drinks} />
		</div>
	);
};
export default DrinksPage;
