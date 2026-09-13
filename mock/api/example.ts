import { Request, Response } from 'express';

export function exampleGetFn(_: Request, res: Response) {
  res.json({ piesek: 'elegancki piesek z mocka' });
}
