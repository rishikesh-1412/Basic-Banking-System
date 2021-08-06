import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import userImg from "../images/user.png";

const Account = () => {

    const {id} = useParams();

    const [user,setUser] = useState({
        id:"", 
        name:"",
        email:"",
        phone:"",
        account:"",
        balance:""
    })

    const [client,setClient] = useState("");

    const [tra,setTra] = useState({
        youracc:"",
        clientacc : "",
        amt:null
    })

    const [history,setHistory] = useState({
        id:"",
        from:"",
        to:"",
        amount:"",
        date:"",
        time:""
    });

    const setCli = ()=>{
        const val = document.querySelector('#searchBox').value;
        setClient(val);
    }

    const getUser = async()=>{
        try {
            const res = await fetch("/oneCustomer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    id
                })
            });
            const data = await res.json();
            setUser({
                id: data._id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                account:data.account,
                balance: data.balance
            });
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            window.alert("Error: " + error)
        }
    }

    useEffect(()=>{
        getUser();
    },[])

    let name, value;
    const changeEvent = (e) => {
        name = e.target.name;
        value = e.target.value;
        setTra({ ...tra, [name]: value,youracc:user.account,clientacc:client })
    }

    const sendMoney = async(e)=>{
        e.preventDefault();
        const {youracc,clientacc,amt } = tra;
        try {
            const res = await fetch("/sendMoney", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    youracc, clientacc, amt
                })
            })
            const data = await res.json();
            
            if(res.status === 200){
                setHistory({
                    id: data._id,
                    from: data.from,
                    to: data.to,
                    amount: data.amount,
                    date: data.date,
                    time: data.time
                });
                setTra({
                    clientacc: "",
                    amt: ""
                })
                document.getElementById("close").click();
                document.getElementById("open").click();
                getUser();
            }else{
                window.alert(data.msg);
            }    
        } catch (error) {
            window.alert(error);
        }
    }

    return (
        <>
            <div className="container acc-div">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 acc-one">
                        <img className="proImg" src={userImg} alt={user.name} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 acc-one">
                        <br /><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="name">Name : </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{user.name}</strong>
                        </div><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="email">Email : </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{user.email}</strong>
                        </div><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="email">Account No: </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{user.account}</strong>
                        </div><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="phone">Phone : </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{user.phone}</strong>
                        </div><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="phone">Balance:</lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{user.balance}.00</strong>
                        </div><br />
                        <br />
                        <br />
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                            Transfer
                        </button>
                    </div>
                </div>
            </div><br /><br />

            <button type="button" id="open" hidden class="btn btn-primary" data-toggle="modal" data-target="#myModal2">
                Modal
            </button>

            {/* <!-- The Modal --> */}
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h4 class="modal-title">Send Money</h4>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div class="modal-body">
                            <form method="POST">
                                <div className="form-group">
                                    <label className="name-field">
                                        <b>From:</b><br/>
                                        
                                        <input type="text" name="youracc" className="exampleInputText"
                                            value={user.account}
                                            onChange={changeEvent}
                                            aria-describedby="emailHelp"  />
                                    </label>
                                </div><br/>
                                <div className="form-group">
                                    <label className="name-field">
                                        <b>To:</b><br />
                                        <select id="searchBox" onChange={setCli} className="exampleInputText">
                                            <option disabled selected value="none">Receiver's Account</option>
                                            <option  value="1111" >1111</option>
                                            <option  value="1112" >1112</option>
                                            <option value="1113" >1113</option>
                                            <option value="1114" >1114</option>
                                            <option value="1115" >1115</option>
                                            <option value="1116" >1116</option>
                                            <option value="1117" >1117</option>
                                            <option value="1118" >1118</option>
                                            <option value="1119" >1119</option>
                                            <option value="1120" >1120</option>
                                        </select>
                                    </label>
                                </div><br/>
                                <div className="form-group">
                                    <label className="name-field">
                                        <b>Amount:</b><br />
                                        <b>₹ </b>
                                        <input type="number"
                                            name="amt" className="exampleInputText"
                                            value={tra.amt}
                                            onChange={changeEvent}
                                            placeholder="Amount" /><b>.00</b>
                                    </label>
                                </div>   
                                <br />
                                <button onClick={sendMoney} type="submit" className="btn btn-outline-primary">Send</button><br /><br />
                            </form>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div class="modal-footer">
                            <button type="button" id="close" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>




            {/* <!-- The Modal --> */}
            <div class="modal" id="myModal2">
                <div class="modal-dialog">
                    <div class="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h4 class="modal-title">Transaction Successfull</h4>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div class="modal-body">
                            <div className=" col-12 acc-one">
                                
                                <div className="row">
                                    <lable className="col-5 " for="name">Transcation ID : </lable>
                                    <strong className="col-7 ">{history.id}</strong>
                                </div><br />
                                <div className="row">
                                    <lable className="col-5 " for="email">From : </lable>
                                    <strong className="col-7 ">{history.from}</strong>
                                </div><br />
                                <div className="row">
                                    <lable className="col-5 " for="email">To: </lable>
                                    <strong className="col-7 ">{history.to}</strong>
                                </div><br />
                                <div className="row">
                                    <lable className="col-5 " for="phone">Amount Transfered : </lable>
                                    <strong className="col-7 ">₹ {history.amount}.00 /-</strong>
                                </div><br />
                                <div className="row">
                                    <lable className="col-5 " for="phone">Date:</lable>
                                    <strong className="col-7 ">{history.date}</strong>
                                </div><br />
                                <div className="row">
                                    <lable className="col-5 " for="phone">Time:</lable>
                                    <strong className="col-7 ">{history.time}</strong>
                                </div><br />
                                
                            </div>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div class="modal-footer">
                            <button type="button" id="close" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Account
