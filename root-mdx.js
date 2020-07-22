import React from "react";
import { MDXProvider } from "@mdx-js/react";

const components = {};

export const GlobalMDXWrapper = ({ element }) => {
	return <MDXProvider components={components}>{element}</MDXProvider>;
};
