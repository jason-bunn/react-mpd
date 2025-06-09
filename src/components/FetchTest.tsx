
import { useQuery } from "@tanstack/react-query"


type Record = {
    productname: string;
    totalsales: string;
  };
 
  async function fetchPosts(): Promise<Record[]> {
    const response = await fetch('https://dev-j1s8np4kcjf3ota.api.raw-labs.com/mock/product/sales');
    if (!response.ok) {
      throw new Error('Problem fetching posts');
    }
    const posts: Record[] = await response.json();
    return posts;
  }


function FetchTest() {

    const { data, error, isLoading } = useQuery<Record[], Error>({queryKey: ["records"], queryFn: fetchPosts});

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <ul>{isLoading ? <li>loading...</li> : (
                data?.map((record) => (<li key={record.productname}>{record.productname} {record.totalsales}</li>)
                ))}</ul>
        </>
    )
}

export default FetchTest