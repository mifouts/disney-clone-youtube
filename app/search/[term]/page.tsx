import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  // API call for searched movies
  // API call for popular movies

  return <div>Welcome to the Search Page: {termToUse} </div>;
}

export default SearchPage;
