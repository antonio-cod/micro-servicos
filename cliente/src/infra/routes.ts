import { Router } from "express";
import { CreateCustomerController } from "../model/create-client/create-client.controller";


const router = Router();

router.post('/customers', (request, response) => {
  new CreateCustomerController().handle(request, response)
})

export { router }