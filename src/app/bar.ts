export class Bar {
    id: number;
    name: string;
    rating: number;
    address_id: number;
    description: string;

    constructor(values: Object = {})
    {
        Object.assign(this, values);
    }
}
