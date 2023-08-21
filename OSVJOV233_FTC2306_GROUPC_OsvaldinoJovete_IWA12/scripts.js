const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Loop through each book container
for (let i = 1; i <= 3; i++) {
    const book = document.getElementById(`book${i}`);
    const status = book.querySelector('.status');
    const reserve = book.querySelector('.reserve');
    const checkout = book.querySelector('.checkout');
    const checkin = book.querySelector('.checkin');

    const statusText = status.textContent.trim().toLowerCase();
    const statusInfo = STATUS_MAP[statusText];

    // Update status text color
    status.style.color = statusInfo.color;

    // Enable/disable buttons based on status
    reserve.disabled = !statusInfo.canReserve;
    checkout.disabled = !statusInfo.canCheckout;
    checkin.disabled = !statusInfo.canCheckIn;
}
