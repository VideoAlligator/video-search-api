import Video, { IVideo } from '../models/video'
import { CreateQuery } from 'mongoose'

async function create(
  res,
  {
    title,
    duration,
    overview,
    genres,
    posterUrl,
    annotations,
    segments,
  }: CreateQuery<IVideo>
): Promise<IVideo> {
  return Video.create({
    title,
    duration,
    overview,
    genres,
    posterUrl,
    annotations,
    segments,
  })
    .then((data: IVideo) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

async function retrieve(res, id): Promise<IVideo> {
  return Video.findById(id)
    .then((data: IVideo) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

async function removeAll(res): Promise<IVideo[]> {
  return Video.remove({})
    .then(() =>
      res.status(201).send({ message: 'All data have been removed.' })
    )
    .catch((error: Error) => res.status(400).send(error))
}

async function remove(res, id): Promise<IVideo[]> {
  return Video.findByIdAndRemove(id)
    .then(() =>
      res.status(201).send({ message: `Video ${id} have been removed.` })
    )
    .catch((error: Error) => res.status(400).send(error))
}

async function query(req, res): Promise<IVideo[]> {
  const { keyword } = req.query

  return Video.find({ 'annotations.keyword': keyword })
    .then((data: IVideo[]) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

export default {
  create,
  retrieve,
  remove,
  removeAll,
  query,
}
