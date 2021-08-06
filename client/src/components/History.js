import React,{useState,useEffect} from 'react'
import Card2 from './Card2'

const History = () => {

    const [history, setHistory] = useState([]);

    const getHistory = async (req, res) => {
        try {
            const res = await fetch("/getHistory", { 
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setHistory(data)
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            window.alert("Error: " + error)
        }
    }

    useEffect(() => {
        getHistory();
    }, [])

    return (
        <>
            <div className="container">
                <br/>
                <h2 className="text-center">Transcation History</h2>
                <table className="text-center">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Transcation ID</th>
                            <th>FROM</th>
                            <th>TO</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((currEle, Ind) => {
                                return (
                                    <Card2
                                        index={Ind + 1}
                                        id={currEle._id}
                                        from={currEle.from}
                                        to={currEle.to}
                                        amount={currEle.amount+".00"}
                                        date={currEle.date}
                                        time={currEle.time}
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

export default History
