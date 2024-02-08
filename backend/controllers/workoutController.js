import { connection } from "../index.js";

const getWorkoutPlan = async(req,res)=>{
    try {
        
        connection.query(
            'SELECT  wp.planId, wp.planName,wp.duration,t.trainerName,t.experience,wp.description,wp.difficulty FROM WorkoutPlan wp LEFT JOIN Trainer t ON wp.trainerId = t.trainerId;',
            (err,result)=>{
                if(err)
                {
                    console.error("Error  fetching from workout plan", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to fetching from database",
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
                            message:"workout plan fetched successfull"
                        }
                    )
                }
            }
        )

    } catch (error) {
        console.error(error)
    }
} 

const enrooled= async(req,res)=>{
    
}
const enrollUser = async(req,res)=>{
    const {planId,userId} = req.body;
    try {
        
        connection.query(
            'INSERT INTO Enrollment (userId,planId) values (?,?)',[userId,planId],
            (err,result)=>{
                if(err)
                {
                    console.error("Error  inserting into enrollment", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to inserting into database",
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
                            message:"Inserted in enrollment successfull"
                        }
                    )
                }
            }
        )

    } catch (error) {
        console.error(error)
    }
}

const  enrolled = async(req,res)=>{
    const  {userId,planId} = req.body;
    try {
         connection.query(
            'select enrollmentId from Enrollment where userId=? and planId=?',[userId,planId],
            (err,result)=>{
                if(err)
                {
                    console.error("Error  fetching enrollment", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to get from database",
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
                            message:"fetched enrollment successfull"
                        }
                    )
                }
            }
         )
    } catch (error) {
        console.error(error)
    }
}
const  unroll = async(req,res)=>{
    const  {userId,planId} = req.body;
    try {
         connection.query(
            'delete from Enrollment where userId=? and planId=?',[userId,planId],
            (err,result)=>{
                if(err)
                {
                    console.error("Error  deleting enrollment", err);
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
                            message:"Deleted successfull"
                        }
                    )
                }
            }
         )
    } catch (error) {
        console.error(error)
    }
}

const getUserWorkout = async(req,res)=>{

    const {userId} = req.params;
    console.log(userId)
    try {
        connection.query(
            'CREATE OR REPLACE VIEW UserWorkoutPlans AS SELECT wp.*FROM Enrollment e JOIN WorkoutPlan wp ON e.planId = wp.planId WHERE e.userId = ?;',[userId],
            (err,result)=>{
                if(err)
                {
                    console.error("Error fetching Enrollment", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to fetch from database",
                        error: err
                    });
                }else 
                {
                    
                    connection.query('SELECT * FROM UserWorkoutPlans;',
                    (err,result)=>{
                        if(err)
                {
                    console.error("Error  enrollment", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to fetching from database",
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
                            message:"user workout plan fethced successfull"
                        }
                    )
                }
                    }
                    
                    )

                }
            }
        )
    } catch (error) {
        console.log(error)
    }

}

export {
    getWorkoutPlan,
    enrollUser,
    enrolled,
    unroll,
    getUserWorkout
}