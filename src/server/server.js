const express=require('express')
const path=require('path')

const startServer=(options)=>{
    const {port,public_path='public'}=options;
    
    const app=express();

    //Para poder usar middlewares se usa la palabra use
    app.use(express.static(public_path)); //Contenido estático que ponemos disponible

    app.get('*',(req,res)=>{
      //actualmente estamos en la carpeta src/server y tenemos que trabajar con los archivos de la carpeta public
        const indexPath=path.join(__dirname+`../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port,()=>{
        console.log(`Escuchando en el puesto ${port}`)
    })

}

module.exports={
    startServer
}
