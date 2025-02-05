import { useState, useEffect } from 'react'
function FetchTest() {

    const [records, setRecords] = useState([]);
    let recordItems: any[] = [];
    useEffect(() => {
        fetch('https://dev-j1s8np4kcjf3ota.api.raw-labs.com/mock/product/sales')
            .then(response => response.json())
            .then(res => {
                setRecords(res.slice(0, 10));
                recordItems = records.map(record => <li>{record}</li>)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <>
            <ul>{recordItems}</ul>
        </>
    )
}

export default FetchTest