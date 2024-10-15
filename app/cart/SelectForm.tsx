'use client';

import type { ReactNode } from 'react';
import { updateCookiesMinus, updateCookiesPlus } from './action';

type Props = {
  item: number;
  quantity: number;
  children: ReactNode;
};

export default function SelectForm(props: Props) {
  return (
    <div>
      <div className="selectCartBtn">
        <button
          value={props.quantity}
          // type="round"
          onClick={() => updateCookiesMinus(props.item, Number(props.quantity))}
        >
          -
        </button>

        {/* <input value={item.quantity} /> */}
        <div>{props.children}</div>
        <button
          value={props.quantity}
          // type="round"
          onClick={() => updateCookiesPlus(props.item, Number(props.quantity))}
        >
          +
        </button>
      </div>
    </div>
  );
}
