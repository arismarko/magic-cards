import Utils from './utils';

describe("Utils", function () {

    it('should suffles correctly', function () {
       let d = [1, 2, 3, 4];

       let b = Utils.shuffle(d);
       
       // Checking for the size
       expect(d.length === 4).toBe(true);
       
       let found = false;
       for(let i =1; i<5; i++) {
           if(b[i]!== i) {
               found = true;
               break;
           }
       }

       // Checking if it is suffled
       expect(found).toBe(true);

    });

    it('should sorts', () => {
        let d = [{order:1}, {order:4}, {order:2}, {order:3}];
        
        let b = Utils.sort(d);

        let found = true;
        for(let i =1; i<5; i++) {
            if(b[i]=== i) {
                found = false;
                break;
            }
        }

       // Checking if it is suffled
       expect(found).toBe(true);
   
    });

    it('should draw correctly', () => {
        let d = [
                {order:1}, 
                {order:4}, 
                {order:2}, 
                {order:3}
        ];
        
        let b = Utils.draw(d, 1);

        expect(b.drawn.length === 1).toBe(true);
        expect(b.remained.length === 3).toBe(true);
    })
});