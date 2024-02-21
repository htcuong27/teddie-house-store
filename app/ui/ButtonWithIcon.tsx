import React, { PropsWithChildren, ReactNode } from 'react';

type ColorType =
  | 'normal'
  | 'blur'
  | 'success'
  | 'action'
  | 'danger'
  | 'alert'
  | 'invisible'
  | 'orange'
  | 'yellow';

interface ButtonWithIconProps extends PropsWithChildren {
  color: ColorType;
  onClick: () => void;
}

const ButtonWithIcon = ({
  children,
  onClick,
  color = 'normal',
}: ButtonWithIconProps) => {
  const listColor: Record<ColorType, string> = {
    normal: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    blur: 'bg-gray-100 text-gray-500 hover:bg-gray-200',
    success: 'bg-teal-100 text-teal-800 hover:bg-teal-200',
    action: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    danger: 'bg-red-100 text-red-800 hover:bg-red-200 ',
    alert: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    invisible: 'text-black',
    orange:
      'bg-gray-50 opacity-90 text-third-color hover:opacity-100 border-t-zinc-200 first:border-r-zinc-200',
    yellow:
      'bg-gray-50 opacity-90 text-fifth-color hover:opacity-100 border-t-zinc-200 first:border-r-zinc-200',
  };
  const defaultStyleButton =
    'w-full py-2 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none';
  const flexText =
    'flex flex-col-reverse justify-center items-center gap-2 text-nowrap';
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${defaultStyleButton} ${listColor[color]} ${flexText} first:rounded-tl-none last:rounded-tr-none first:rounded-tr-none first:rounded-br-none last:rounded-tl-none last:rounded-bl-none `}
    >
      {children}
    </button>
  );
};

export default ButtonWithIcon;
