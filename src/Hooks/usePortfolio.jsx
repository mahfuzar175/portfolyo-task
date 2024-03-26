import { useEffect, useState } from "react";

const usePortfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(() =>{
        fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
        .then(res => res.json())
        .then(data =>{
            setPortfolio(data);
            setIsLoaded(false)
        })
    }, [])

    return [portfolio, isLoaded]
};

export default usePortfolio;