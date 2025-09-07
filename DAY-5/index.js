

// / Day 5  ///////////////////

const p1 = {
    fname: "Muhammad",
    lname: "Hussain",
    age: 20,
}

const p1Proxy = new Proxy(p1, {
    get(target, prop){
        // if(prop in target) return target[prop];
        if(prop in target) return Reflect.get(target, prop);
        return false;
    },
    set(target, prop, value){
        if(!(prop in target)) throw new Error(`${prop} does not exist`);
        switch(prop){
            case "fname":
            case "lname":
                if(typeof value !== "string") throw new Error(`${prop} must be a string`);
                break;
            case "age":
                if(typeof value !== "number") throw new Error(`${prop} must be a number`);
               if(value <= 0) throw new Error(`${prop} must be > Zero`);   
            }

            Reflect.set(target, prop, value);
            // Default Action
            // target[prop] = value;
    },
});

p1Proxy.age = 20;

console.log(p1Proxy);

// / Day 5  ///////////////////