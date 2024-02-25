import { Helmet } from "react-helmet";

interface ISeoHelmet {
	title: string;
	description: string;
	url: string;
}

export default function SeoHelmet({ title, description, url }: ISeoHelmet) {
	return (
		<Helmet>
			<html lang="en" />
			<meta charset="utf-8" />

			<title>{title}</title>
			<meta property="og:title" content={title} />

			<meta name="description" content={description} />
			<meta property="og:description" content={description} />

			<link rel="canonical" href={url} />
			<meta property="og:url" content={url} />
		</Helmet>
	);
}
