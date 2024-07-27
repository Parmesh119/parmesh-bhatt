import React from "react";
// import AMIComponent from "../components/articles/Article-1/AMIComponent";

function article_1() {
	return {
		date: "31 May 2024",
		title: "Guide to Creating Custom Machine Images on AWS",
		description:
			"Creating custom AMIs in AWS is a powerful way to streamline your infrastructure and ensure consistency across your deployments. By pre-configuring your instances with the necessary software, dependencies, and even your own applications, you can launch new resources quickly and with confidence.",
		keywords: [
			"Cloud Computing",
			"AWS",
			"AMIs",
			"AWS EC2",
			"Learning"
		],
		link: "https://prmes119.hashnode.dev/guide-to-creating-custom-machine-images-on-aws",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "23 March 2024",
		title: "Understanding Next.js: An Introduction to the Superpower of React",
			description:
			"Next.js is a powerful framework that extends the functionality of React.js and makes it easier to build server-side React applications. With features like server-side rendering, static site generation, and built-in API routes, Next.js offers developers a productive and efficient way to create high-performance web applications.",
		style: ``,
		keywords: [
			"NextJs",
			"ReactJs",
			"Development",
			"MERN Stack",
			"Learning"
		],
		link: "https://prmes119.hashnode.dev/understanding-nextjs-an-introduction-to-the-superpower-of-react",
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
