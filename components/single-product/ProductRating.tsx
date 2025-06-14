import { FaStar } from "react-icons/fa";

const ProductRating = async ({ productId }: { productId: string }) => {
  const rating = 42;
  const count = 25;
  const className = "flex gap-1 items-center text-md mt-1 mb-4";
  const countValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <FaStar className="h-3 w-3">
        {rating}
        {countValue}
      </FaStar>
    </span>
  );
};

export default ProductRating;
