type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  return <div>Welcome to the Search Page: {term} </div>;
}

export default SearchPage;
