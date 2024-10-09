'use client';

import removeProductFromCookie from './action';

export default function DeleteButton({ item }) {
  // const dispatch = useDispatch();
  // const removeFromCartHandler = (id) => {
  //   dispatch(removeFromCart(id));
  // };
  return (
    <div>
      {/* <button onClick={() => removeFromCartHandler(item.id)}>Remove</button> */}
      <button onClick={() => removeProductFromCookie(item)}>Remove</button>
    </div>
  );
}
