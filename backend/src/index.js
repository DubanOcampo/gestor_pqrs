const express=require("express");
class Server{
    //metodo constructor
    constructor(){
        this.app=express();
        //Indicar el puerto por el que se ejecutara el servidor
        this.app.set('port',process.env.PORT || 3000);
        // indicar que las solicitudes http se trabajaran en JSON
        this.app.use(express.json());
        //rutas
        const router = express.Router();
        router.get('/',(res,req)=>{
            console.log("nueva conexion")
            res.statusCode(200).json({message: "Hola mundo!"});
        })
        this.app.use(router);
        //Levantar el servidor por
        this.app.listen(this.app.get('port'),()=>{
            console.log("Servidor a la escucha por el puerto =>",this.app.get('port'))
        });
    }

}
const objServer = new Server();