export async function orderCreated(ctx: OrderCreated, next: () => Promise<any>) {
    const {
        body: { orderId, currentState }
        } = ctx

        console.log(`New order issued with id ${orderId}. It's state: ${currentState}`)

        await next()
    }
