import Video, { IVideo } from '../models/video'

async function searchByParam(req, res): Promise<IVideo[]> {
  const { title, keyword } = req.query

  let query = {}
  if (title) {
    query['title'] = title
  }
  if (keyword) {
    query['keywords'] = keyword
  }

  return Video.find(query)
    .then((data: IVideo[]) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

export default {
  searchByParam,
}
