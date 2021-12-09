const { request } = require('express');
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());


var sqlConnection = mysql.createConnection({
    host: "34.123.142.54",
    user: "user",
    password: "user",
    database: "fitness_app",
  });

sqlConnection.connect();

const info = (req, res) => {   
    // console.log(req);
    const clientid = req.body.clientid;

    const values = [clientid];
  
    const query ="SELECT * FROM fitness_app.clientProgress where clientid =?";

                                sqlConnection.query(query,values,(err,rows,fields)=>{
                                    if(!err){
                                            console.log("No Error");
                                            return res.status(200).json({
                                            status: "success",
                                            data:rows
                                            });
                                      }
                                    else{
                                    console.log(err);
                                    }
                                });
                            };
                       
const trainerrecommend = (req, res) => {   
    console.log(req.body);
    const recommendedmeal = req.body.recommendedmeal;
    const meal = req.body.meal;
    const clientid = req.body.clientid;

    const values = [recommendedmeal, clientid, meal];
    
    const query ="Update fitness_app.clientProgress set trainerRecommendedMeal = ? where clientId=? and meal=?";

                                sqlConnection.query(query,values,(err,rows,fields)=>{
                                    if(!err){
                                            console.log("No Error");
                                            return res.status(200).json({
                                            status: "success",
                                            data:rows
                                            });
                                        }
                                    else{
                                    console.log(err);
                                    }
                                });
                            };

const updateclientmealtaken = (req,res) => {
    console.log(req.body);
    const mealType = req.body.mealType;
    const mealTaken = JSON.stringify(req.body.mealTaken); 
        
    const query = "Update fitness_app.clientProgress set clientMealTaken = ? where clientId=1 and meal =?"

    sqlConnection.query(query,[mealTaken,mealType],(err,rows,fields)=>{
        if(!err){
            console.log("No Error");
            return res.status(200).json({
                status: "success",
                data:rows
            });
        }else{
            console.log(err);
        }
    })

}

const updateClientLunchTaken = (req,res) => {

    const lunchTaken = req.body.lunchTaken;
    const query = "Update fitness_app.clientProgress set clientMealTake = ? where clientId=1 and meal =?"

    sqlConnection.query(query,[lunchTaken,"Lunch"],(err,row,fields)=>{
        if(!err){
            console.log("No Error");
            return res.status(200).json({
                status: "success",
                data:rows
            });
        }else{
            console.log(err);
        }
    })

}

const updateClientDinnerTaken = (req,res) => {

    const dinnerTaken = req.body.dinnerTaken;
    const query = "Update fitness_app.clientProgress set clientMealTake = ? where clientId=1 and meal =?"

    sqlConnection.query(query,[dinnerTaken,"Dinner"],(err,row,fields)=>{
        if(!err){
            console.log("No Error");
            return res.status(200).json({
                status: "success",
                data:rows
            });
        }else{
            console.log(err);
        }
    })

}
const trainerrecommendcalorie = (req, res) => {   
    console.log(req.body);

    const targetCalorie = req.body.targetCalorie;

    const values = [targetCalorie];
    
    const query ="Update fitness_app.clientProgress set targetCalorie = ? where clientId=1";

                                sqlConnection.query(query,values,(err,rows,fields)=>{
                                    if(!err){
                                            console.log("No Error");
                                            return res.status(200).json({
                                            status: "success",
                                            data:rows
                                            });
                                        }
                                    else{
                                    console.log(err);
                                    }
                                });
                            };

module.exports = {
    info,
    trainerrecommend,
    trainerrecommendcalorie,
    updateclientmealtaken
  };
  