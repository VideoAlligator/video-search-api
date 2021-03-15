import Frame, { IFrame } from '../models/frame'

async function query(req, res): Promise<IFrame> {
  const { videoName } = req.query

  let query = {}
  if (videoName) {
    query['videoName'] = videoName
  }
  return Frame.find(query)
    .then((data: IFrame[]) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

async function retrieve(res, id): Promise<IFrame> {
  return Frame.findById(id)
    .then((data: IFrame) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

export default {
  query,
  retrieve,
}
