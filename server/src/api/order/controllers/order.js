'use strict';
// @ts-ignore
const stripe = require("stripe")(process.env.STRAPI_SECRET_KEY, {
    apiVersion: '2023-08-16',
  });





function calcDiscountPrice(price, discount) {
    if(!discount) return price;

    const discountAmount = (price * discount) / 100;
    const result = price - discountAmount;

    return result.toFixed(2); // just two decimals

}
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async paymentOrder (context) {
        const { token, products, idUser, addressShipping } = context.request.body;

        let totalPayment = 0;
        products.forEach((product) => {
            const tempPrice = calcDiscountPrice(product.attributes.price, product.attributes.discount);
            totalPayment += Number(tempPrice) * product.quantity;
        });

        const charge = await stripe.charges.create({
            amount: Math.round(totalPayment * 100),
            currency: "usd",
            source: token.id,
            description: `User ID: ${idUser}`
        });

        const data = {
            products,
            user: idUser,
            totalPayment,
            idPayment: charge.id,
            addressShipping,
        };

        const model = strapi.contentTypes["api::order.order"];
        const validData = await strapi.entityValidator.validateEntityCreation(model, data);

        const entry = await strapi.db
            .query("api::order.order")
            .create({ data: validData });

            return entry;
    },  
}));
