export interface User {
    userName: string;
    email: string;
    id: number;
    address: Address;
}

interface Address {
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    zipCode: number;
}