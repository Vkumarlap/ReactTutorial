import { useState, useEffect } from "react";

const AsyncComp = () => {

    const [user, setUser] = useState([]);
const userdata = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/products");

        if (!response.ok) {
            throw new Error("Server response was not ok");
        }

        const data = await response.json();
        setUser(data);
        alert("Products fetched successfully");

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch products. Try again.");
    }
};

    useEffect(() => {
        userdata();   //Call the function
    }, []);

    return (
        <div className="maincontainer">
            {
                user.map((item, index) => {
                    return (
                        <div className="container" key={index}>
                            <h2>{item.name}</h2>
                            <h2>{item.id}</h2>
                            <h2>{item.desc}</h2>
                             <h2>{item.availabilty}</h2>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default AsyncComp;
