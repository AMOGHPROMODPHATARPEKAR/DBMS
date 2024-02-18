import { connection } from "../index.js";

const addDietRequest = async(req,res)=>{
    const {userid} = req.params;
    const {curweight,height,fweight} = req.body;

    try {
        
        connection.query(
            'Insert into DietRequest (userId,curweight,height,finalweight) values (?,?,?,?)',[userid,curweight,height,fweight],
            (err,result)=>{
                if(err){

                    console.error("Error Inserting :", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to insert into database",
                        error: err
                    });
                }else 
                {
                    console.log(result)
                    return res.status(200)
                    .json(
                        {
                            success:true,
                            data:result.insertId,
                            message:"Added succesfully"
                        }
                    )
                }
            }
        )

    } catch (error) {
        console.error(error)
    }

}

const getRequest = async(req,res)=>{
    try {

        connection.query(
            'select d.*,u.username from DietRequest d,user u where d.userid=u.userid;',
            (err,result)=>{
                if(err){

                    console.error("Error fetching :", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to fetch from database",
                        error: err
                    });
                }else 
                {
                    console.log(result)
                    return res.status(200)
                    .json(
                        {
                            success:true,
                            data:result,
                            message:"fetched succesfully"
                        }
                    )
                }
            }
        )
        
    } catch (error) {
        console.error(error)
    }
}


const addDietPlan = async(req,res)=>{
    const {userid} = req.params;
    const {startDate,endDate,caloriesGoal,proteinGoal,carbohydrateGoal,fatGoal} = req.body;

    try {
        
        connection.query(
            'Insert into DietPlan (userId,startDate,endDate,caloriesGoal,proteinGoal,carbohydrateGoal,fatGoal) values (?,?,?,?,?,?,?)',[userid,startDate,endDate,caloriesGoal,proteinGoal,carbohydrateGoal,fatGoal],
            (err,result)=>{
                if(err){

                    console.error("Error Inserting :", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to insert into database",
                        error: err
                    });
                }else 
                {
                    console.log(result)
                    return res.status(200)
                    .json(
                        {
                            success:true,
                            data:result.insertId,
                            message:"Added succesfully"
                        }
                    )
                }
            }
        )

    } catch (error) {
        console.error(error)
    }

}

const deleteReq = async(req,res)=>{
    const {reqId} = req.params;

    try {
        
        connection.query(
            'Delete from DietRequest where reqId=?',[reqId],
            (err,result)=>{
                if(err){

                    console.error("Error Deleting :", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to delete from database",
                        error: err
                    });
                }else 
                {
                    console.log(result)
                    return res.status(200)
                    .json(
                        {
                            success:true,
                            data:result,
                            message:"Deleted succesfully"
                        }
                    )
                }
            }
        )

    } catch (error) {
        console.error(error)
    }

}

const getUserDietPlan = async(req,res)=>{
    const {userid} = req.params;
    
    try {
        
        connection.query(
            'Select * from DietPlan where userId=?',[userid],
            (err,result)=>{
                if(err){

                    console.error("Error Fetchng :", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to fetch from database",
                        error: err
                    });
                }else 
                {
                    console.log(result)
                    return res.status(200)
                    .json(
                        {
                            success:true,
                            data:result,
                            message:"Fetched succesfully"
                        }
                    )
                }
            }
            )

    } catch (error) {
        console.error(error)
    }
}

export {
    addDietRequest,
    getRequest,
    addDietPlan,
    deleteReq,
    getUserDietPlan
}