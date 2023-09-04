export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<nav>Dashboard Layout</nav>
			{children}
		</section>
	);
}
