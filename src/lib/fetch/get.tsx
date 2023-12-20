import { useState, useEffect } from "react"

const useFetch = (url:string) => {

    const [fetchData, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(()=>{
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Failed')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(error => {
                setIsLoading(false)
                setError(error.message)
            })
        }, 100)
    },[url])
    return { fetchData, isLoading, error }
}

export default useFetch