import express from "express"


const PORT = process.env.PORT ?? 3002;

const app = express();
app.use(express.json())


app.listen(PORT, () => console.log(`Server pedido is runnig on PORT ${PORT}`))