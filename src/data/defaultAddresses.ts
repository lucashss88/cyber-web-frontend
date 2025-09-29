import type { Address } from '../types/address';

export const defaultAddresses: Address[] = [
  {
    id: 1,
    country: "United States",
    city: "New York",
    streetAddress: "123 Main St",
    postalCode: "10001",
    number: "123",
    tag: "work"
  },
  {
    id: 2,
    country: "Canada",
    city: "Toronto",
    streetAddress: "456 Queen St",
    postalCode: "M5V 2A1",
    number: "456",
    tag: "home"
  },
  {
    id: 3,
    country: "United Kingdom",
    city: "London",
    streetAddress: "789 High St",
    postalCode: "SW1A 1AA",
    number: "789",
    tag: "office"
  }
];