export default async function errorHandler(error, req, res, next) {

     res.sendStatus(500)
     console.log(error)
   }

 