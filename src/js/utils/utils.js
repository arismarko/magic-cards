export default {
    shuffle(array) {
        var randomindex, pick, i;
        for (i = array.length - 1; i > 0; i--) {
            randomindex = Math.floor(Math.random() * (i + 1));
            pick = array[i];
            array[i] = array[randomindex];
            array[randomindex] = pick;
        }
        return array;
    },
    sort(array) {
        return array.sort((a, b) => {
            return a.order-b.order;
        });
    },
    draw(array, n) {
        var result = new Array(n),
            len = array.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = array[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
    
        let left= array.filter((element) => {
            return !result.includes(element)
        });

        return {drawn: result, remained:left};
    }
};