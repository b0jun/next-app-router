import Link from 'next/link';
import { Suspense } from 'react';

async function getMovies() {
	let res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=`);
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return res.json();
}

const Dashboard = async () => {
	let { results } = await getMovies();

	return (
		<section>
			<Suspense fallback={<p>Loading feed...</p>}>
				{results?.map((index: any) => {
					return <li key={index.id}>{index.title}</li>;
				})}
			</Suspense>
			<Suspense fallback={<p>Loading weather...</p>}>
				<div>weather</div>
			</Suspense>
		</section>
	);
};

export default Dashboard;
