import { prismaClient } from "../../infra/database/prismaClient"





type CreateClientResquest = {
name: string,
password: string,
email: string,
phone: string
}

export class CreateClientUseCase {
  constructor() {}

  async execute(data: CreateClientResquest) {
    const customer = await prismaClient.client.findFirst({
      where: {
        email: data.email
      }
    })

    if (customer) throw new Error('Custumer already exists!')
    const customerCreated = await prismaClient.client.create({
      data: {
        ...data,
      }
    })

    return customerCreated
  }
}