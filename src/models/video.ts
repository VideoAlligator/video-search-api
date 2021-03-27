import mongoose, { Schema, Document } from 'mongoose'
import videos from './mockData/videos.json'
import { Genres, Keyword } from './constants'

interface Annotation {
  keyword: string
  score: number
}

interface Segment {
  keyword: string
  start: number
  end: number
}

export interface IVideo extends Document {
  title: string
  runtime: number
  overview?: string
  genres?: [string]
  posterUrl: string
  trailerUrl: string
  releaseDate: string
  annotations: [Annotation]
  segments: [Segment]
}

const AnnotationSchema = new Schema({
  keyword: { type: String, required: true, enum: Object.values(Keyword) },
  score: { type: Number, required: true },
})

const SegmentSchema = new Schema({
  keyword: { type: String, required: true, enum: Object.values(Keyword) },
  start: { type: Number, required: true },
  end: { type: Number, required: true },
})

const VideoSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  runtime: { type: Number, required: true },
  overview: { type: String },
  genres: { type: [String], enum: Object.values(Genres) },
  posterUrl: { type: String, required: true, unique: true },
  trailerUrl: { type: String },
  releaseDate: { type: String },
  annotations: { type: [AnnotationSchema] },
  segments: { type: [SegmentSchema] },
})

const Video = mongoose.model<IVideo>('Video', VideoSchema)

Video.insertMany(videos, function (error, docs) {})

// Export the model and return your IVideo interface
export default Video
