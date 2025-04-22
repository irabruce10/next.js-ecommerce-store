import { cache } from 'react';

import { sql } from './connect';
import type { User } from '../../migrations/00002-createTableUsers';
import type { Session } from '../../migrations/00003-createTableSessions';

type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const getUser = cache(async (sessionToken: Session['token']) => {
  const [user] = await sql<User[]>`
    SELECT
      users.id,
      users.username
    FROM
      users
      INNER JOIN sessions ON (
        sessions.user_id = users.id
        AND sessions.expiry_timestamp > now()
      )
    WHERE
      sessions.token = ${sessionToken}
  `;

  return user;
});

export const getUserInsecure = cache(async (username: User['username']) => {
  const [user] = await sql<User[]>`
    SELECT
      users.id,
      users.username
    FROM
      users
    WHERE
      username = ${username}
  `;

  return user;
});

export const getUserWithPasswordHashInsecure = cache(
  async (email: User['email']) => {
    const [user] = await sql<UserWithPasswordHash[]>`
      SELECT
        users.*
      FROM
        users
      WHERE
        email = ${email}
    `;

    return user;
  },
);

export const createUser = cache(
  async (
    username: User['username'],
    email: User['email'],
    passwordHash: UserWithPasswordHash['passwordHash'],
  ) => {
    const [user] = await sql<User[]>`
      INSERT INTO
        users (
          username,
          email,
          password_hash
        )
      VALUES
        (
          ${username.toLowerCase()},
          ${email},
          ${passwordHash}
        )
      RETURNING
        users.id,
        users.username,
        users.email
    `;

    return user;
  },
);
