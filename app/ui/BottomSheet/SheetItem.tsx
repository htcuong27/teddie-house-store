import React, { PropsWithChildren } from 'react';

interface SheetItemProps extends PropsWithChildren {}

const SheetItem = ({ children }: SheetItemProps) => {
  return (
    <div>
      <h4>Phân loại</h4>
      <div>{children}</div>ß
    </div>
  );
};

export default SheetItem;
