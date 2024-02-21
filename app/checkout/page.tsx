'use client';
import { CreditCardIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Card, CardBody, CardHeader, Input, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import Image from 'next/image';
import { PropsWithChildren } from "react";
import { formatCurrency } from "../lib/utils";

interface CheckoutItemProps extends PropsWithChildren {
  header: string;
};

const CheckoutItem = ({ header, children }: CheckoutItemProps) => {
  return (
    <Card>
      <CardHeader
        color="gray"
        floated={true}
        shadow={true}
        className="m-0 flex items-center px-4 py-4 gap-4 rounded-b-none"
      >
        <CreditCardIcon className="h-10 w-10 text-white" />
        <Typography variant="h5" color="white">
          {header}
        </Typography>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};

type FormElementProps = {
  name: string;
  placeholder: string;
  type: 'email' | 'text' | 'password';
};

const FormElement = ({ name, placeholder, type }: FormElementProps) => {
  return (
    <div className="mt-4">
      <Typography
        variant="small"
        color="blue-gray"
        className="mb-2 font-medium"
      >
        {name}
      </Typography>
      <Input
        type={type}
        placeholder={placeholder}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }} crossOrigin={undefined} />
    </div>
  );
};

const Checkout = () => {

  return (
    <div className="flex py-10 sm:px-40 px-4 gap-8 flex-col-reverse sm:flex-row">
      <form className="w-full flex flex-col gap-10 sm:w-3/5">
        <CheckoutItem header="Contacts">
          <FormElement name={"Your Email"} placeholder={"name@email.com"} type={"email"}></FormElement>
        </CheckoutItem>
        <CheckoutItem header="Delivery">
          <div className="grid grid-cols-2 gap-4">
            <FormElement name={"First Name"} placeholder={"Teddie"} type={"text"}></FormElement>
            <FormElement name={"Last Name"} placeholder={"House"} type={"text"}></FormElement>
          </div>
          <FormElement name={"Address"} placeholder={"123 ABC"} type={"text"}></FormElement>
          <div className="grid grid-cols-2 gap-4">
            <FormElement name={"City"} placeholder={"New York"} type={"text"}></FormElement>
            <FormElement name={"Postal Code"} placeholder={"1"} type={"text"}></FormElement>
          </div>
          <FormElement name={"Phone"} placeholder={"0968453367"} type={"text"}></FormElement>
        </CheckoutItem>
        <CheckoutItem header="Shipping Method">
          <FormElement name={"First Name"} placeholder={"Teddie"} type={"text"}></FormElement>
          <FormElement name={"Last Name"} placeholder={"House"} type={"text"}></FormElement>
        </CheckoutItem>
        <Button size="lg">Pay now</Button>
      </form>


      <div className="sm:w-2/5 h-fit w-full flex flex-col justify-start shadow-lg">
        <Card className="p-4">
          <List className="flex gap-4">
            <Badge
              content={<XMarkIcon className="h-4 w-4" />}
              color="gray"
            >
              <ListItem ripple={false} className="flex justify-between shadow-md">
                <ListItemPrefix>
                  <Badge color="yellow" content="5">
                    <Image alt="test" src="/teddiehouse.jpg" width={100} height={100} />
                  </Badge>
                </ListItemPrefix>
                <Typography className="font-medium" variant="paragraph">{formatCurrency(1000)}</Typography>
              </ListItem>
            </Badge>
          </List>

          <div className="mt-5 flex flex-row justify-between gap-2">
            <Input
              type="text"
              placeholder="Discount code or gift card"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }} crossOrigin={undefined} />
            <Button loading={true}>Apply</Button>
          </div>
          <div className="mt-4">
            <div className="flex justify-between font-medium">
              <Typography variant="paragraph">
                Subtotal
              </Typography>
              <Typography variant="h6">
                price
              </Typography>
            </div>
            <div className="flex justify-between font-medium">
              <Typography variant="paragraph">
                Subtotal
              </Typography>
              <Typography variant="h6">
                price
              </Typography>
            </div>
            <div className="flex justify-between font-medium">
              <Typography variant="h4">
                Total
              </Typography>
              <Typography variant="h5">
                price
              </Typography>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
