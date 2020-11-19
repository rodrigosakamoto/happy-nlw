import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import User from '../models/User';
import userView from '../views/users_views';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      return response.status(400).json({
        message: 'Incorrect email/password combination',
      });
    }
    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      return response.status(400).json({
        message: 'Incorrect email/password combination',
      });
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    const { id, name } = userView.render(user);

    return response.json({
      user: {
        id,
        name,
        email,
      },
      token,
    });
  },
};
