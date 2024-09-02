import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/mockdata.json") // Adjusted path to refer to the public directory
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching the JSON data:', error);
                setLoading(false);
            });
    }, []);

    return [products, loading];
};

export default useProduct;
