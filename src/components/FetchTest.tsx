import { useState, useEffect } from 'react'
function FetchTest() {

    const [records, setRecords] = useState<any[]>([]);
    const [dataLoading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://dev-j1s8np4kcjf3ota.api.raw-labs.com/mock/product/sales')
            .then(response => response.json())
            .then(res => {
                setRecords(res);
                setLoading(false);
            })
            .catch(err => console.log(err))
    },[])

    return (
        <>
            <ul>{dataLoading ? <li>loading...</li> : (
                records.map((record) => (<li key={record.productid}>{record.productname} {record.totalsales}</li>)
                ))}</ul>
        </>
    )
}

export default FetchTest