import ToDoLayout from "@/components/layout/to-do-layout";

export default function Home() {
	return (
		<main>
			{/* @ts-expect-error Async Server Component, reason: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching */}
			<ToDoLayout />
		</main>
	);
}
