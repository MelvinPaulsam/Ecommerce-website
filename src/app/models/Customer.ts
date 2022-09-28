export class Customer {
    name: string;
    address: string;
    creditCard: string;
    totalPrice: number;

    constructor() {
        this.name = '';
        this.address = '';
        this.creditCard = '';
        this.totalPrice = 0;
    }
}