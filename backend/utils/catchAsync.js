// Para evitar o uso do try/catch várias vezes, vamos criar uma função para lidar com try/catch
module.exports=(fn)=> {
  return (req,res,next)=>{
    fn(req,res,next).catch(next)
  }
}