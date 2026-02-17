import { useState, useEffect } from "react";

const AsyncComp = () => {

    const [user, setUser] = useState([]);

    const userdata = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/products");
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        userdata();   //Call the function
    }, []);

    return (
        <div className="asyncCont">
            {
                user.map((item, index) => {
                    return (
                        <div className="async" key={index}>
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
