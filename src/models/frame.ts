import mongoose, { Schema, Document } from 'mongoose'
import fs from 'fs'
import path from 'path'

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

let folder_dir = path.join(__dirname, '/uploads')
let folders = fs.readdirSync(path.join(__dirname, '/uploads'))

folders.map((folder) => {
  let curr_file_dir = path.join(folder_dir, folder)
  let files = fs.readdirSync(curr_file_dir)

  let promises = files.map((file) => {
    const filename = file.split('.').slice(0, -1).join('.')
    const extension = file.split('.').pop()
    return {
      videoName: folder,
      keyword: filename.replace(/\d+/g, ''), // remove numbers from string
      img: {
        data: fs.readFileSync(path.join(curr_file_dir, file)),
        contentType: `image/${extension}`,
      },
    }
  }) // gives an array of promises for each file
  Promise.all(promises).then((data) => {
    Frame.insertMany(data, function (error, docs) {})
  })
})

export default Frame
