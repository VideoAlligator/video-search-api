import Video, { IVideo } from '../models/video'
import { CreateQuery } from 'mongoose'

async function create(
  res,
  { name, duration, labels }: CreateQuery<IVideo>
): Promise<IVideo> {
  return Video.create({
    name,
    duration,
    labels,
  })
    .then((data: IVideo) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

async function list(res): Promise<IVideo[]> {
  return Video.find()
    .then((data: IVideo[]) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

async function retrieve(res, id): Promise<IVideo> {
  return Video.findById(id)
    .then((data: IVideo) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

export default {
  create,
  list,
  retrieve,
}
