import mongoose, { Schema, Document } from 'mongoose'

export interface IVideo extends Document {
  title: string
  duration: number
  overview?: string
  genres?: [string]
  keywords?: [string]
  posterUrl: string
}

const VideoSchema: Schema = new Schema({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  overview: { type: String },
  genres: { type: [String] },
  keywords: { type: [String] },
  posterUrl: { type: String, required: true },
})

// Export the model and return your IVideo interface
export default mongoose.model<IVideo>('Video', VideoSchema)
