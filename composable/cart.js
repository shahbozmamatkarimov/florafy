export const useCart = () => {
    const cart1 = ref(1);
    const Cart = () => {
        cart1.value += 1
    } 
    const cart = computed(() => cart1)
    return { cart, Cart, cart1 };
}