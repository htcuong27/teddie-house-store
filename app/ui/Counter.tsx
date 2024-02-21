import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { Typography } from '@material-tailwind/react';
import { useRef } from 'react';

type CounterProps = {
  quantity: number;
  capacity: number;
  onClickIncrease: () => void;
  onClickDecrease: () => void;
  onChangeQuantity: (value: number) => void;
};

const Counter = ({
  quantity,
  capacity,
  onClickIncrease,
  onClickDecrease,
  onChangeQuantity,
}: CounterProps) => {
  const inputRef = useRef(null);

  const handleBlurInput = (value: number) => {
    if (!value) {
      onChangeQuantity(1);
      return;
    }
    const newValue = value >= capacity ? capacity : value;
    onChangeQuantity(newValue);
  };

  const handleChangeInput = (value: number) => {
    onChangeQuantity(value);
  };

  return (
    <div className="flex flex-row items-center justify-between gap-2 whitespace-nowrap">
      <Typography variant='paragraph'>Số lượng</Typography>
      <div className="flex flex-row items-center justify-center gap-2">
        <button
          className="w-6 h-6 disabled:opacity-25"
          type="button"
          disabled={quantity <= 1 ? true : false}
          onClick={onClickDecrease}
        >
          <MinusCircleIcon />
        </button>
        {/* Input */}

        <input
          inputMode="numeric"
          pattern="[0-9]*"
          type="text"
          ref={inputRef}
          onBlur={({ currentTarget }) =>
            handleBlurInput(Number(currentTarget.value))
          }
          onChange={({ target }) => handleChangeInput(Number(target.value))}
          value={quantity}
          onFocus={({ currentTarget }) =>
            setTimeout(function () {
              currentTarget.selectionStart = currentTarget.selectionEnd = 10000;
            }, 0)
          }
          className="w-[65px] bg-white rounded border border-zinc-200 basis-0 text-center text-gray-500 text-base font-normal leading-normal"
        />
        <button
          className="w-6 h-6 disabled:opacity-25"
          type="button"
          disabled={quantity >= capacity ? true : false}
          onClick={onClickIncrease}
        >
          <PlusCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default Counter;
