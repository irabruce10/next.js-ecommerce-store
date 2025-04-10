// 'use client';

// import type { ReactNode } from 'react';
// import { updateCookiesMinus, updateCookiesPlus } from './action';

// // type Props = {
// //   item: number;
// //   quantity: number;
// //   stock: number;
// //   product: any;
// //   children: ReactNode;
// // };

// interface SelectFormProps {
//   item: number;
//   product: {
//     id: number;
//     name: string;
//     price: number;
//     images: string;
//     quantity: number;
//     totalPrice: number;
//     selectedColor: any;
//     selectedSize: any;
//     stock: number;
//   };
//   children: React.ReactNode;
// }

// const SelectForm: React.FC<SelectFormProps> = ({ item, product, children }) => {
//   return (
//     <div>
//       <div className="selectCartBtn">
//         <button
//           value={product.quantity}
//           // type="round"
//           onClick={() => updateCookiesMinus(item, Number(product.quantity))}
//         >
//           -
//         </button>

//         {/* <input value={item.quantity} /> */}
//         <div>{children}</div>
//         <button
//           value={product.quantity}
//           // type="round"
//           onClick={() =>
//             updateCookiesPlus(item, Number(product.quantity), product.stock)
//           }
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectForm;
'use client';

import type { ReactNode } from 'react';
import { updateCookiesMinus, updateCookiesPlus } from './action';

interface SelectFormProps {
  item: number;
  product: {
    id: number;
    name: string;
    price: number;
    images: string;
    quantity: number;
    totalPrice: number;
    selectedColor: any;
    selectedSize: any;
    stock: number;
  };
  children: React.ReactNode;
}

const SelectForm: React.FC<SelectFormProps> = ({ item, product, children }) => {
  return (
    <div className="flex items-center justify-center space-x-4 py-2">
      <button
        value={product.quantity}
        onClick={() =>
          updateCookiesMinus(item, Number(product.quantity), product.stock)
        }
        className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-xl font-semibold text-gray-800 transition duration-200 cursor-pointer"
        aria-label="Decrease quantity"
      >
        −
      </button>

      <div className="min-w-[32px] text-center text-base font-medium text-gray-800">
        {children}
      </div>

      <button
        value={product.quantity}
        onClick={() =>
          updateCookiesPlus(item, Number(product.quantity), product.stock)
        }
        className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-xl font-semibold text-gray-800 transition duration-200 cursor-pointer"
        aria-label="Increase quantity "
      >
        +
      </button>
    </div>
  );
};

export default SelectForm;
