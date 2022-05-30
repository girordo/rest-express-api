import { Request, Response } from 'express'
import { createUser } from '../service/user.service'
import logger from '../utils/logger'

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body)
  } catch (e) {
    logger.error(e)
    res.status(409)
  }
}
