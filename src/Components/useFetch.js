import { useState, useEffect } from 'react';

const useFetch = (url, formData = null) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        const fetchData = async () => {
            try {
                const fetchOptions = {
                    method: 'GET',
                    signal: abortCont.signal,
                };

                if (formData) {
                    fetchOptions.method = 'POST';
                    fetchOptions.body = formData;
                }

                const response = await fetch(url, fetchOptions);

                if (!response.ok) {
                    throw Error('Could not fetch the data for that resource!');
                }

                const responseData = await response.json();
                setData(responseData);
                setIsPending(false);
                setError(null);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            }
        };

        fetchData();

        return () => abortCont.abort();
    }, [url, formData]);

    return { data, isPending, error };
};

export default useFetch;
