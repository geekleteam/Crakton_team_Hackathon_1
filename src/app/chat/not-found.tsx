import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<div>
			<h2>Not Found</h2>
			<p>Sorry! We could not find requested resource</p>
			<Link href="/">Return Home</Link>
		</div>
	);
}
