import React from 'react';

function useFetch(url) {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
        }, [url]);
        return {data, error, loading};
        
        }
        

export default useFetch;