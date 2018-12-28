'use strict';

const alterFile = require('../file-writer');
const logger = require('../logger');

// describe('running tests on alterFile', ()=>{
//     it('test', ()=>{
//         let expected =jest.spyOn( console, 'text.txt saved' ); 
//         let result = alterFile('text.txt');
//         // console.log(result, 'HERE💀💀💀💀💀💀💀💀💀💀');
//         expect(result).toHaveLogged(expected);
//     });
// })

describe('running tests on event handlers', ()=>{
    it('test', ()=>{

        let errorHandlerSpy;
  let savedSpy;
  let successSpy;

  beforeAll(() => {
    errorHandlerSpy = jest.spyOn(logger, 'errorHandler');
    successSpy = jest.spyOn(logger, 'success');
    savedSpy = jest.spyOn(logger, 'saved');
  });

  //happy path
  it('reads a file', () => {
    alterFile(__dirname+'/test.file.txt');
    expect(successSpy).toHaveBeenCalled();
  })

  it('changes a file to upper case', () => {
    
  })

  it('writes a file', () => {
    
  })

  it('requires a file name to read', () => {
    
  })

  afterAll(() => {
    errorHandlerSpy.mockRestore();
    successSpy.mockRestore();
    savedSpy.mockRestore();
  });
        
        // // expect.assertions(1);
        // // console.log( 'xsLOGER HEREEEEEEEEEEEEEEEE');
        // const spy = jest.spyOn(logger, 'savedd');
        // let result = logger.savedd();


        // expect(spy).toHaveBeenCalled();
        // expect(result).toBe(true);
    });
})