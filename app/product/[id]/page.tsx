'use client';
import { formatCurrency } from "@/app/lib/utils";
import { useCartStore } from "@/app/store/cart";
import Counter from "@/app/ui/Counter";
import type { Product } from "@/app/models/Product";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Alert, Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function getData(id: string | null): Promise<any> {
    if (!id) return;
    const res = await fetch(`/api/product/${id}`);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();
    const [quantity, setQuantity] = useState(1);
    const [isError, setIsError] = useState(false);
    const [isClickedButton, setIsClickedButton] = useState(false);

    const { cart, update, remove, add } = useCartStore();

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const response = await fetch(`/api/products/${id}`, {
                    headers: {
                        Accept: 'application/json',
                        method: 'GET',
                    },
                });
                if (response) {
                    const data = await response.json();
                    setProduct(data);
                }
            } catch (error) {
                console.log(error);
            } finally {
            }
        };
        fetchDataFromApi();
    }, [id]);

    function handleClickAddToCart() {
        if (!product) {
            return;
        }

        if (cart && cart.length > 0) {
            const currentProductOnCart = cart?.filter(item => item.id === product.id)[0];
            if (currentProductOnCart && currentProductOnCart.capacity === currentProductOnCart.quantity) {
                setIsError(true);
                setTimeout(() => setIsError(false), 1000);
                return;
            }
        }
        add(product, quantity);
    }

    if (!product) return null;

    return (
        <>
            {
                <AnimatePresence>
                    {isError && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Alert icon={<InformationCircleIcon className="w-6" />} >Quantity is Reach the Capacity</Alert>
                        </motion.div>
                    )}
                </AnimatePresence>
            }
            <main className="flex px-4 lg:px-28 py-10 gap-8 justify-center flex-col-reverse lg:flex-row">
                <Image className="lg:w-2/5 w-full rounded-2xl shadow-md lg:p-2" width={400} height={400} src={product.imageUrl} alt="test" />
                <Card className="mt-6 ">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {product.name}
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            {formatCurrency(product.price)}
                        </Typography>
                        <Counter
                            quantity={quantity}
                            capacity={product.capacity}
                            onClickIncrease={() => setQuantity(pre => pre + 1)}
                            onClickDecrease={() => setQuantity(pre => pre - 1)}
                            onChangeQuantity={(value) => setQuantity(value)}
                        />
                    </CardBody>
                    <CardFooter className="pt-0 mt-auto self-end">
                        <Button loading={isClickedButton} onClick={() => handleClickAddToCart()} size="lg">ADD TO CART</Button>
                    </CardFooter>
                </Card>
            </main>

        </>
    );
};

export default Product;