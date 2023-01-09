import { Customer, CustomerProps } from "@application/entities/customer";

type Override = Partial<CustomerProps>;


export function makeCustomerFactory(override: Override = {}){
  const customer = new Customer({
    id: 'customer_id',
    createdAt: new Date(),

    name: 'John Doe',
    email: 'john_doe@gmail.com',
    ...override
  });

  return customer;
}
