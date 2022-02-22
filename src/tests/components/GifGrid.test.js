import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
//jest.mock('../../hooks/useFetchGifs');
describe('Se evalua en el componente GifGrid', () => { 
    const category = 'dog'
    let wrapper=shallow(<GifGrid category={category}/>)  
    test('Se realiza el snapchot',()=>{
    
        expect(wrapper).toMatchSnapshot();
    });


    test('debe de mostrar items  con useFetc ', () => { 
        const imgs = []
        // useFetchGifs.mockReturnValue({
        //     data: [],
        //     loanding: true,
        //   });
        //expect(wrapper).toMatchSnapshot();
          expect(wrapper.find('p').exists()).toBe(true);
            expect(wrapper.find('GiftGridItem').length).toBe(imgs.length)
     })



 })