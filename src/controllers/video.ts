import User, { IVideo } from '../models/video'
import { CreateQuery } from 'mongoose'

async function createVideo({
  name,
  duration,
  labels,
}: CreateQuery<IVideo>): Promise<IVideo> {
  return User.create({
    name,
    duration,
    labels,
  })
    .then((data: IVideo) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

export default {
  createVideo,
}
