import { connection } from "../index.js";

const createUser = async(req,res)=>{

    try {
        
        const { email, username, password } = req.body;

        connection.query(
            'INSERT INTO User (email, password, username) VALUES (?, ?, ?)',
            [email, password, username],
            (err, result) => {
                if (err) {

                    console.error("Error adding user:", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to add to database",
                        error: err
                    });

                } else {
                    console.log('New user added:', result.insertId);

                    return res.status(200).json({
                        success: true,
                        data: result.insertId,
                        message: "User created successfully"
                    });
                }
            }
        );


    } catch (error) {
        console.error("Error adding user:", error);

        return res.status(500).json({
            success: false,
            message: "Error adding user",
            error: err  // Include the actual error object for debugging purposes
        });
    }

}

const Userlogin = async(req,res)=>{
    const {email,password} = req.body;
    console.log(email,password)
    try {
        
        connection.query(
            'SELECT *from User WHERE email=? AND password =?',[email,password],
            (err,results)=>{
                if (err) {

                    console.error("Error adding user:", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to add to database",
                        error: err
                    });
                }else 
                {
                    console.log(results[0])
                    return res.status(200)
                    .json(
                        {
                            success:true,
                            data:results[0],
                            message:"Logged in successfull"
                        }
                    )
                }
            }
        )

    } catch (error) {
        console.log(error.message)
    }

}
const AdminLogin = async(req,res)=>{
    const {email,password} = req.body;
    console.log(email,password)
    try {
        
        connection.query(
            'SELECT *from Admin WHERE email=? AND password =?',[email,password],
            (err,results)=>{
                if (err) {

                    console.error("Error adding user:", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to add to database",
                        error: err
                    });
                }else 
                {
                    console.log(results[0])
                    return res.status(200)
                    .json(
                        {
                            success:true,
                            data:results[0],
                            message:"Logged in successfull"
                        }
                    )
                }
            }
        )

    } catch (error) {
        console.log(error.message)
    }

}

const AddTrainer = async(req,res)=>{

    const {username,experience,speciality} = req.body
console.log(username)
    try {
        
        connection.query(
            'Insert into Trainer (trainerName,experience,speciality) values (?,?,?)',[username,experience,speciality],
            (err,result)=>{
                if (err) {

                    console.error("Error adding user:", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to add to database",
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
                            message:"Added trianer successfull"
                        }
                    )
                }
            }
        )

    } catch (error) {
        console.error("Error while adding trainer")

    }

}

const getTrainers = async(req,res) =>{
    try {
        
        connection.query(
            'select * from Trainer',
            (err,result)=>{
                if(err){

                    console.error("Error Fetching Trainer:", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to fetch to database",
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
        console.error("Error while getting trainers")
    }
}

const AddWorkout = async(req,res)=>{

    const {planName,description,duration,difficulty,trainerId} = req.body
    try {
        
        connection.query(
            'Insert into WorkoutPlan (planName,duration,description,difficulty,trainerId) values (?,?,?,?,?)',[planName,duration,description,difficulty,trainerId],
            (err,result)=>{
                if (err) {

                    console.error("Error adding workout:", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to add to database",
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
                            message:"Added Workout Plan successfull"
                        }
                    )
                }
            }
        )

    } catch (error) {
        console.error("Error while adding trainer")

    }

}



export 
{
    createUser,
    Userlogin,
    AdminLogin,
    AddTrainer,
    AddWorkout,
    getTrainers,

}