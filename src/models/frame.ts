import mongoose, { Schema, Document } from 'mongoose'

import { Keyword } from './constants'

export interface IFrame extends Document {
  videoName: string
  keyword: string
  img: { data: Buffer; contentType: string }
}

const FrameSchema = new Schema({
  videoName: { type: String, required: true },
  keyword: { type: String, required: true, enum: Object.values(Keyword) },
  img: { data: Buffer, contentType: String },
})

const Frame = mongoose.model<IFrame>('Frame', FrameSchema)

export default Frame
