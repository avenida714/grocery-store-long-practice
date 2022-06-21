import produceData from '../mockData/produce.json'

const ADD_TO_CART = 'cart/ADD';

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            })
            return newState;
        default:
            return state;
    }
}
