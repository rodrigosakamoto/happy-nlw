import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';
import userView from '../views/users_views';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      return response
        .status(401)
        .json({ message: 'Email addres already used' });
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return response.status(201).json(userView.render(user));
  },
};
