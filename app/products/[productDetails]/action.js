'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../lib/cookies.js';
import { parseJson } from '../../../lib/json.js';

export default async function createOrUpdateCookie(fruitId, comment) {
  // 1. get current cookie!
  const fruitsCommentsCookie = await getCookie('cart');

  // 2. parse the cookie value
  const fruitsComments =
    fruitsCommentsCookie === undefined
      ? // Case A: cookie undefined
        []
      : parseJson(fruitsCommentsCookie);

  // 3. edit the cookie value
  const fruitToUpdate = fruitsComments.find((fruitComment) => {
    return fruitComment.id === fruitId;
  });

  // Case B: cookie set, id doesn't exist
  fruitsComments.push({ id: fruitId, comment: comment });
  if (!fruitToUpdate) {
  } else {
    // Case C: cookie set, id exists already
    fruitToUpdate.comment = comment;
  }

  // 4. we override the cookie
  (await cookies()).set('cart', JSON.stringify(fruitsComments));
}
