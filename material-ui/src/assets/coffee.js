import Espresso from './images/espresso.jpg';
import Latte from './images/latte.jpg';
import ColdBrew from './images/cold-brew.jpg';

const products = [
    {
        id: 1,
        title: 'Espresso Coffee',
        image: Espresso,
        price: 5.99,
        description: 'A strong and bold coffee made by forcing hot water through finely-ground coffee beans.'
    },
    {
        id: 2,
        title: 'Latte Coffee',
        image: Latte,
        price: 4.99,
        description: 'A creamy coffee made with espresso and steamed milk, topped with a small amount of foam.'
    },
    {
        id: 3,
        title: 'Cold Brew Coffee',
        image: ColdBrew,
        price: 7.99,
        description: 'A smooth and refreshing coffee made by steeping coarsely ground coffee beans in cold water for an extended period.'
    }
]

export default products;