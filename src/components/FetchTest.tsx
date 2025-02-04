import { useState, useEffect } from 'react'
function FetchTest() {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('https://dev-j1s8np4kcjf3ota.api.raw-labs.com/mock/product/sales')
            .then(response => response.json())
            .then(res => setRecords(res.slice(0, 10)))
    },[])

    return (
        <>
            <p>{records}</p>
        </>
    )
}

export default FetchTest