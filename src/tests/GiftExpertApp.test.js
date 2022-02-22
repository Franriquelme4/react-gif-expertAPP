import { shallow } from 'enzyme';
import React from 'react';
import GiftExpertApp from '../GiftExpertApp';


describe('Se realiza prueba GiftExpertApp',()=>{
    let wrapper =  shallow(<GiftExpertApp/>)
    test('Se realiza el snapshot', () => { 

        expect(wrapper).toMatchSnapshot();
     })
     test('Se debe de mostrar la lista de categorias ', () => { 
         const  categories = ['cat','dog'];
        wrapper =  shallow(<GiftExpertApp defaultCategory={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
      })

})