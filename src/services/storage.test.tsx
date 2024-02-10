import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const rtBank = {
    login: false
}
describe('storage', () => {

    it('Deve retornar o objeto no localStorage com a chave rtbank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('rtbank')
    })

    it('Deve criar o objeto no localStorage', () => {
        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('rtbank', JSON.stringify(rtBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
        changeLocalStorage(rtBank)
        expect(mockSetItem).toHaveBeenCalledWith('rtbank', JSON.stringify(rtBank))
    })
})