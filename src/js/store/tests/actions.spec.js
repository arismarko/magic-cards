import actions from '../actions';
import  Store from '../store';

jest.mock('../store');

Store.commit = jest.fn();

describe("Gameview", function () {
    it('should call suffle', function () {
        const spy = jest.spyOn(Store, 'commit');
        actions.suffle(Store, {})
        expect(spy).toHaveBeenCalled();
    });

    it('should call sort', function () {
        const spy = jest.spyOn(Store, 'commit');
        actions.sort(Store, {})
        expect(spy).toHaveBeenCalled();
    });

    it('should call reset', function () {
        const spy = jest.spyOn(Store, 'commit');
        actions.reset(Store, {})
        expect(spy).toHaveBeenCalled();
    });

    it('should call initdata', function () {
        const spy = jest.spyOn(Store, 'commit');
        actions.initdata(Store, {})
        expect(spy).toHaveBeenCalled();
    });

    it('should call drawcards', function () {
        const spy = jest.spyOn(Store, 'commit');
        actions.drawcards(Store, {})
        expect(spy).toHaveBeenCalled();
    });
});