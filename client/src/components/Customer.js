import React,{useState,useEffect} from 'react'
import Card from './Card'

const Customer = () => {

    const [customer, setCustomer] = useState([]);

    const getCustomers = async (req, res) => {
        try {
            const res = await fetch("/getCustomers", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setCustomer(data)
            if (res.status !== 200 ) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            window.alert("Error: "+error)
        }
    }

    useEffect(()=>{
        getCustomers();
    },[]) 

    return (
        <>
            <br/>
            <h1 className="text-center">Customers</h1>
            <br/>
            <div className="container">
                <table className="text-center">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No.</th>
                            <th>Account No.</th>
                            <th>Your Balance</th>
                            <th>Show account</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    customer.map((currEle,Ind)=>{
                        return(
                            <Card
                                index={Ind + 1}
                                id={currEle._id}
                                name={currEle.name}
                                email={currEle.email}
                                phone={currEle.phone}
                                account={currEle.account }
                                balance={ currEle.balance+".00"}
                            />
                        )
                    })
                }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Customer