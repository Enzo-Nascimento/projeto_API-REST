import app from './src/app.js'
const PORT = process.env.PORT || 3130
 
app.listen(PORT, () =>{
    console.log(`servidor rodando no servidor   local http://localhost:${PORT}`)
})


