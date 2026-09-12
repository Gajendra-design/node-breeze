import { app } from "./app/app.js";
import { connectDb } from "./configs/database.config.js";
import { config } from "./configs/env.config.js";


try {
    const port = config.PORT;

    await connectDb()

    app.listen(port,()=>{
        console.log('server started sucessfully on port',port);
        
    })
} catch (error) {
    console.log('error in connecting mongo DB',error);
    
}