import mongoose, { Schema, Document } from 'mongoose'

export interface IFrame extends Document {
  img: File
}

const FrameSchema = new Schema({
  img: { data: Buffer, contentType: String },
})

const Frame = mongoose.model<IFrame>('Frame', FrameSchema)

export default Frame
