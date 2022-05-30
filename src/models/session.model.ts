import mongoose from 'mongoose'

export interface UserDocument extends mongoose.Document {
  user: UserDocument['_id']
  valid: boolean
  userAgent: string
  createdAt: Date
  updatedAt: Date
  comparePassword: (candidatePassword: string) => Promise<boolean>
}

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    valid: {
      type: Boolean,
      default: true
    },
    userAgent: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const SessionModel = mongoose.model('Session', sessionSchema)

export default SessionModel
