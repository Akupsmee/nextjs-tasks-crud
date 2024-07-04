"use client";

import { useState } from "react";

const ClientPage = () => {
	const [count, setCount] = useState(0);

	const increaseCount = (count) => {
		setCount(count + 1);
	};
	const decreaseCount = (count) => {
		if (count < 1) return 0;
		setCount(count - 1);
	};

	return (
		<div>
			<h1 className="text-7xl font-bold mb-4">{count}</h1>
			<button className="btn btn-primary" onClick={() => increaseCount(count)}>
				{" "}
				Increase Count
			</button>
			<button className="btn btn-primary ml-2" onClick={() => decreaseCount(count)}>
				{" "}
				Decrease Count
			</button>
		</div>
	);
};
export default ClientPage;
