document.addEventListener('DOMContentLoaded', () => {
    const orderList = JSON.parse(localStorage.getItem('order')) || [];
    const orderListElement = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');
    
    let totalPrice = 0;
    
    orderList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        orderListElement.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });
    
    totalPriceElement.textContent = `Total: ${totalPrice.toFixed(2)}`;
    
    // Clear order after showing details
    localStorage.removeItem('order');
});
