'use strict';

const alterFile = require('../file-writer');
const logger = require('../logger');

describe('running tests', ()=>{
    it('throws Error on error', ()=>{
        

    });
    it(`logs saved and the filename when file named is passed through `, ()=>{
        let spy = jest.spyOn(console, 'log');
        logger.saved('foo');
        expect(spy).toHaveBeenCalledWith('File Saved foo')
        spy.mockRestore();
    })
    it('does not log filename on saved without filename', ()=>{
        let spy = jest.spyOn(console, 'log');
        logger.saved();
        expect(spy).not.toHaveBeenCalled();
        spy.mockRestore();

    })
})

   
