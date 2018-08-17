import Mutations from '../mutations';
import  Utils from '../../utils/utils';

jest.mock('../../utils/utils');

Utils.sort = jest.fn();
Utils.shuffle = jest.fn();
Utils.draw = jest.fn(() => {
    return {remained: [], drawn: []}
});

describe("Mutations", function () {

    it('should sort', function () {
        const spy = jest.spyOn(Utils, 'sort');
        Mutations.sort(Utils, {})
        expect(spy).toHaveBeenCalled();
    });

    it('should initdata', function () {
        const spy = jest.spyOn(Utils, 'sort');
        Mutations.initdata(Utils, {})
        expect(spy).toHaveBeenCalled();
    });

    it('should drawcards', function () {
        const spy = jest.spyOn(Utils, 'draw');
        Mutations.drawcards(Utils, {})
        expect(spy).toHaveBeenCalled();
    });

    it('should suffle', function () {
        const spy = jest.spyOn(Utils, 'shuffle');
        Mutations.suffle(Utils, {})
        expect(spy).toHaveBeenCalled();
    });



    
});