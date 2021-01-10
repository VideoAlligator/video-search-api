import mongoose, { Schema, Document } from 'mongoose'

interface VideoDetail {
  keyword: string
  timestamp: string
}

export interface IVideo extends Document {
  title: string
  duration: number
  overview?: string
  genres?: [string]
  keywords?: [string]
  posterUrl: string
  details?: [VideoDetail]
}

const videoDetailSchema = new Schema({
  keyword: { type: String, required: true },
  timestamp: { type: String, required: true },
})

const VideoSchema: Schema = new Schema({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  overview: { type: String },
  genres: { type: [String] },
  keywords: { type: [String] },
  posterUrl: { type: String, required: true },
  details: { type: [videoDetailSchema] },
})

// Export the model and return your IVideo interface
export default mongoose.model<IVideo>('Video', VideoSchema)
