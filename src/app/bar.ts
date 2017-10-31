export class Bar {
    id: number;
    name: string;
    rating: number;
    address_id: number;
    description: string;
    price_range: number;
    average_cost_for_two: number;

    constructor(values: Object = {})
    {
        Object.assign(this, values);
    }
}
