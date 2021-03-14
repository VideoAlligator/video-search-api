import Frame, { IFrame } from '../models/frame'
import { CreateQuery } from 'mongoose'

async function create(res, { img }: CreateQuery<IFrame>): Promise<IFrame> {
  return Frame.create({ img })
    .then((data: IFrame) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

async function findAll(res): Promise<IFrame> {
  return Frame.find()
    .then((data: IFrame[]) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

async function retrieve(res, id): Promise<IFrame> {
  return Frame.findById(id)
    .then((data: IFrame) => res.status(201).send(data))
    .catch((error: Error) => res.status(400).send(error))
}

export default {
  create,
  findAll,
  retrieve,
}
