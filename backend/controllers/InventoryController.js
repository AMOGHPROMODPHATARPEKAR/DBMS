import { connection } from "../index.js";

const getInventory = async(req,res)=>{

    
    try {
        
        connection.query(
            'select * from Inventory ;',
            (err,result)=>{
                if (err) {

                    console.error("Error  getting inventory:", err);
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
                            message:"Inventory fecthed successfull"
                        }
                    )
                }
            }
        )

    } catch (error) {
        console.error("Error while  fetching inventory")

    }

}

const  deleteItem = async(req,res)=>{

    const {inventoryid} = req.params;

    try {

        connection.query(
            'DELETE from Inventory where inventoryId=?',[inventoryid],
            (err,result)=>{
                if (err) {

                    console.error("Error  deleteing inventory:", err);
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
                            message:"Inventory item deleted successfull"
                        }
                    )
                }
            }
        )
        
    } catch (error) {
        console.error(error)
    }

}

const addInventory = async(req,res)=>{
    const {itemName,qty,purchase,update}= req.body;

    try {
        
        connection.query(
            'Insert into Inventory (itemname,qauntity,purchaseDate,updated) values (?,?,?,?)',[itemName,qty,purchase,update],
            (err,result)=>{
                if (err) {

                    console.error("Error  Inserting inventory:", err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to insert to database",
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
                            message:"Inventory item Added successfull"
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
    getInventory,
    deleteItem,
    addInventory
}