import { login } from "./login"



describe('login', () => {

    const mockEmail = 'jesus@example.bank'
 
    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja invalido', async () => {
        const response = await login('email@invalido.com')
        expect(response).toBeFalsy()
    })
})

