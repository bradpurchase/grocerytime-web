import Head from "next/head";
import * as React from "react";
import PageContainer from "../components/PageContainer";
import PageHeading from "../components/PageHeading";

const Home = React.memo(() => (
	<>
		<Head>
			<title>GroceryTime: Shut Down</title>
		</Head>

		<PageContainer pageStyle="mini">
			<PageHeading title="A note about GroceryTime" />

			<p className="leading-relaxed mb-4">
				GroceryTime was shut down on April 15, 2026.
			</p>

			<p className="leading-relaxed mb-4">
				I chose to shut down GroceryTime because I&apos;ve had to rededicate my
				time to my full-time job, life commitments, and other projects.
			</p>

			<p className="leading-relaxed mb-4">
				I built GroceryTime in 2020 to learn iOS development, and I&apos;ve
				really enjoyed the unexpected amount of support along the way - whether
				it was feedback, tips, or just regular usage from people all over the
				world, especially the Nordic region. It saddens me to have shut the app
				down, but it was time.
			</p>

			<h3 className="text-2xl mt-8 mb-4">Looking for alternatives?</h3>

			<p className="leading-relaxed mb-4">
				If you are looking for another grocery list app, here are a few great
				options to check out:
			</p>

			<ul
				className="mb-4 leading-relaxed"
				style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
			>
				<li className="mb-2">
					Apple Reminders - as of iOS 18, the built-in Reminders app includes
					basic grocery list functionality.
				</li>
				<li className="mb-2">
					<a
						className="text-red-600"
						href="https://apps.apple.com/us/app/crouton-recipe-manager/id1461650987"
						target="_blank"
						rel="noreferrer noopener"
					>
						Crouton
					</a>
				</li>
				<li className="mb-2">
					<a
						className="text-red-600"
						href="https://apps.apple.com/us/app/anylist-grocery-shopping-list/id522167641"
						target="_blank"
						rel="noreferrer noopener"
					>
						AnyList
					</a>
				</li>
			</ul>

			<h3 className="text-2xl mt-8 mb-4">What&apos;s next for me?</h3>

			<p className="leading-relaxed mb-4">
				If you&apos;re interested in what I&apos;m working on these days, check
				out{" "}
				<a
					className="text-red-600"
					href="https://headlines.fm"
					target="_blank"
					rel="noreferrer noopener"
				>
					Headlines
				</a>
				. It&apos;s a fantastic reader app for iOS and web. I&apos;m really
				quite proud of it!
			</p>

			<h3 className="text-2xl mt-8 mb-4">Thank you</h3>

			<p className="leading-relaxed mb-4">
				To everyone who used GroceryTime: thank you. An even bigger thanks if
				you threw a tip my way or shared the app with someone.
			</p>

			<p className="leading-relaxed mb-4">
				If you have any questions, feel free to email{" "}
				<a className="text-red-600" href="mailto:support@groceryti.me">
					support@groceryti.me
				</a>
				. I&apos;d be happy to help out in any way I can.
			</p>

			<p className="leading-relaxed">
				All the best,
				<br /> Brad from GroceryTime
			</p>
		</PageContainer>
	</>
));

export default Home;
