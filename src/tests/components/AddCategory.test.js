import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en el archivo AddCategory", () => {
    const setCategories =jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
         wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })
  test("Revisar la creacion del componente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de cambiar la caja de texto', () => { 
      const input = wrapper.find('input');
      const value = 'Hola mundo';
      input.simulate('change',{target:{value}});

      expect(wrapper.find('p').text().trim()).toBe(value);
   });

   test('No debe de postear la informacion', () => { 
       wrapper.find('form').simulate('submit',{preventDefault(){}});
    expect(setCategories).not.toHaveBeenCalled;
    })

    test('Debe de llamar el setCategories y llamar la caja de texto', () => { 
        // 1/ simular el inputChange
        // 2/ simular el Submit
        // 3/setCategories se dede de haber llamado 
        // 3/ el valor de input debe de estar vacio 

        const input = wrapper.find('input');
        const value = 'cat';
        input.simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(input.text()).toBe('');

     })


});
