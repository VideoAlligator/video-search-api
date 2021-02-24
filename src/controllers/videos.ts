import Video, { IVideo } from '../models/video'
import { CreateQuery } from 'mongoose'

async function create(
  res,
  {
    title,
    runtime,
    overview,
    genres,
    posterUrl,
    releaseDate,
    annotations,
    segments,
  }: CreateQuery<IVideo>
): Promise<IVideo> {
  return Video.create({
    title,
    runtime,
    overview,
    genres,
    posterUrl,
    releaseDate,
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

  let query = {}
  if (keyword) {
    query['annotations.keyword'] = keyword
  }

  return Video.find(query)
    .then((data: IVideo[]) => {
      if (keyword) {
        const keywordScores = data.reduce((acc, val) => {
          const relatedAnnotations = val['annotations'].filter(
            (annotation) => annotation.keyword === keyword
          )
          acc.push({ score: relatedAnnotations[0].score, data: val })
          return acc
        }, [])
        // descending order
        keywordScores.sort((a, b) =>
          a.score > b.score ? -1 : a.score < b.score ? 1 : 0
        )
        return res.status(201).send(keywordScores.map((item) => item.data))
      }
      return res.status(201).send(data)
    })
    .catch((error: Error) => res.status(400).send(error))
}

export default {
  create,
  retrieve,
  remove,
  removeAll,
  query,
}
