import Frame from '@/app/ui/frame';
import ProductList from './ProductList';

const Collection = () => {
  return (
    <div className='mt-10'>
      {/* Category */}
      <div className='flex gap-3'>
        <ProductList />
      </div>
    </div >
  );
};

export default Collection;
