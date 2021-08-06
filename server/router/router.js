const express = require('express');
const router = new express.Router();


require("../dbconnection/conn");
const customerList = require("../modules/customerSchema");
const historyList = require("../modules/historySchema");

router.get("/getCustomers", async (req, res) => {
    const user = await customerList.find();
    res.status(200).send(user);

},[])

router.post("/oneCustomer",async(req,res)=>{
    const {id} = req.body;
    const user = await customerList.findOne({_id:id});
    res.status(200).send(user);
})

router.post("/sendMoney",async(req,res)=>{
    let {youracc,clientacc,amt} = req.body;
    amt = Number(amt);
    if(youracc !== clientacc){
        const user1 = await customerList.findOne({ account: youracc });
        if(amt > 0){
            if (amt < user1.balance) {
                const user2 = await customerList.findOne({ account: clientacc });
                user1.balance = user1.balance - amt;
                user2.balance = user2.balance + amt;
                user1.save();
                user2.save();

                const history = new historyList({ from: youracc, to: clientacc, amount: amt });
                await history.save();

                res.status(200).send(history);
            } else {
                res.status(422).send({ msg: "You have no enough money in your account." })
            }
        }else{
            res.status(422).send({ msg: "Money can't be zero or less than zero." })
        }
    }else{
        res.status(422).send({ msg: "Money can't be transfered in same account." })
    } 
})

router.get("/getHistory", async (req, res) => {
    const history = await historyList.find().sort({_id:-1});
    res.status(200).send(history);
})

module.exports = router;
