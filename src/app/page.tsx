"use client";
import ToDoLayout from "@/components/layout/to-do-layout";
import { QueryClient, QueryClientProvider } from "react-query";
// Initialze the client
const queryClient = new QueryClient();

export default function Home() {
	return (
		<main>
			<QueryClientProvider client={queryClient}>
				<ToDoLayout />
			</QueryClientProvider>
		</main>
	);
}
