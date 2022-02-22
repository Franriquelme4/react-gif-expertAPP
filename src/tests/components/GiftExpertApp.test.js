
import '@testing-library/jest-dom';
import React from 'react';
//import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import GiftExpertApp from '../../GiftExpertApp';
describe('SE prueba la carga de los componentes',()=>{

    test('Se prueba la carga de los componentes', () => { 
        const wrapper =  shallow(<GiftExpertApp/>);

        expect(wrapper).toMatchSnapshot();
        


     })



})