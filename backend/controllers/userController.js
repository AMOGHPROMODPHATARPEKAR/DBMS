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

const login = async(req,res)=>{
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


export 
{
    createUser,
    login

}