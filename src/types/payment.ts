export type Payment = {
    id: number;
    name: string;
    cardHolder: string | null;
    cardNumber: string | null;
    expDate: string | null;
    cvv: number | null;
}