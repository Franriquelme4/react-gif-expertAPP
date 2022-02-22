import { useFetchGifs } from "../../hooks/useFetchGifs";
import React from 'react';

import {renderHook} from '@testing-library/react-hooks'
describe('Pruebas en el hook useFetchGifs', () => { 

    test('Debe de retornar el estado inicial', async () => { 
        const {result,waitForNextUpdate}= renderHook(()=>useFetchGifs('cat'));
        
        const {data,loading}= result.current;
        await waitForNextUpdate();
       // const { data: images, loading } = ;
        console.log(data,loading);

        expect(data).toEqual([]);
        expect(loading).toBe(true);

     })

     test('Debe de retornar imagenes y loading false  ', async () => { 
        const {result, waitForNextUpdate }= renderHook(()=>useFetchGifs('cat'));

            await waitForNextUpdate();

        const {data,loading}= result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

     })

     
 })