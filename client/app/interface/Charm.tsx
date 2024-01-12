export interface ICharm {
    id: number;
    name: string;
    size: string;
    minPrice: number;
    maxPrice: number;
    imageUrl: string;
    quantity: number;
    items: ISubCharm[];
}

interface ISubCharm {
    capacity: number;
    unit: string;
    special: string;
    price: number;
    quantity: number;
    imageUrl: string;
    name: string;
}

export class Charm implements ICharm {
    
    id: number = 0;
    name: string = '';
    size: string = '';
    imageUrl: string = '';
    minPrice: number = 0;
    maxPrice: number = 0;
    quantity: number = 0;
    items: ISubCharm[] = [];
    
    constructor(data: ICharm) {
        Object.assign(this, data);
    }

    getPriceFormat() {
        const formatter = new Intl.NumberFormat('vi', {
            style: 'currency',
            currency: 'VND',
          
            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
          });
        if (this.minPrice === this.maxPrice) {
            return formatter.format(this.minPrice);
        }
        return `${formatter.format(this.minPrice)} - ${formatter.format(this.maxPrice)}`
    }

}