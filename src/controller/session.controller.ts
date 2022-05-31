import { Request, Response } from 'express'
import { createSession } from '../service/session.service'
import { validatePassword } from '../service/user.service'

export async function createUserSessionHanlder(req: Request, res: Response) {
  const user = await validatePassword(req.body)

  if (!user) {
    return res.status(401).json({
      message: 'Invalid credentials'
    })
  }

  const session = createSession(user._id, req.get('user-agent') ?? '')
}
