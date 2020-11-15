import mongoose, { Schema, Document } from 'mongoose'

export interface IVideo extends Document {
  name: string
  duration: number
  labels?: string[]
}

const VideoSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  duration: { type: Number, required: true },
  labels: { type: [String] },
})

// Export the model and return your IVideo interface
export default mongoose.model<IVideo>('Video', VideoSchema)
