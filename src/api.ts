const conta = {
    email: 'jesus@example.bank',
    password:  '12345',
    name: 'Jesus Tamba',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})