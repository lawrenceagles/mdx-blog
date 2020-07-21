import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export const query = graphql`
	{
		allMdx {
			distinct(field: frontmatter___category)
		}
	}
`;

const Categories = () => {
	const { allMdx: { distinct } } = useStaticQuery(query);
	return (
		<ul className='catogries'>
			{distinct.map((category, index) => {
				return (
					<Link key={index} to={`/category/${category}`} className='category'>
						{category}
					</Link>
				);
			})}
		</ul>
	);
};

export default Categories;
