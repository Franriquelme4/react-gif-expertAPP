import '@testing-library/jest-dom';
import React from 'react';
//import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import { GiftGridItem } from '../../components/GiftGridItem';
 '../../GiftExpertApp';
describe('SE prueba la carga de los componentes',()=>{
    const title = 'titulo';
    const url = 'http://localhost/algo.jpg';
    const wrapper =  shallow(<GiftGridItem title={title} url={url}/>);

    test('Se prueba la carga de los componentes', () => { 
        expect(wrapper).toMatchSnapshot();
     })
     test('debe de tener un parrafo con el title',  ()=>{
         const p= wrapper.find('p');
         expect(p.text().trim()).toBe(title);
     } )


     test('Debe tener la imagen igual al props', () => { 
        const img =  wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
      })

      test('Debe tener animate_fadeIn', () => { 
          const div =  wrapper.find('div');
        console.log(div.prop('className'));
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
       })


GiftGridItem
})