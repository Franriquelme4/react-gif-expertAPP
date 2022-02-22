import { getGifts } from "../../helpers/getGifts"

describe('Pruebas con getGifts', () => { 

    test('Debe de traer 10 elementos', async () => { 

        const gift = await getGifts('cats');
       
        expect(gift.length).toBe(10);
     


     })
     test('Debe de traer 10 elementos', async () => { 

        const gift = await getGifts('');
     //  console.log(gift);
        expect(gift.length).toBe(0);
     
     })
 })