import Frame, { IFrame } from '../models/frame'

async function retrieve(res, id): Promise<IFrame> {
  return Frame.findById(id)
    .then((data: IFrame) => res.status(200).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

async function retrieveByTitleAndKeyword(res, title, keyword): Promise<IFrame> {
  return Frame.findOne({ videoName: title, keyword })
    .then((data: IFrame) => {
      res.contentType(data.img.contentType)
      return res.status(200).send(data.img.data)
    })
    .catch((error: Error) => res.status(400).send(error))
}

export default {
  retrieve,
  retrieveByTitleAndKeyword,
}
