import { useEffect, useState } from "react";

export default function useFetch(url) {
    
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(data => data.json())
        .then(data => setCategories(data))
    }, [url])
    return { categories }
}

