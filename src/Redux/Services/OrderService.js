import { baseService } from "./baseService";

export class OrderService extends baseService {
    constructor() {
        super();
    }
    createOrder = (data) => {
        return this.post("/order/create", data);
    };
    getAllOrder = () => {
        return this.get(`/order/get-all-order`);
    };
    getOrderById = (id) => {
        return this.get(`/order/get-order-by-id?orderId=${id}`);
    };
}

export const orderService = new OrderService();
