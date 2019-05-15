class Lazyman  {
	constructor (name) {
		this.name = name;
		this.taskList = [];
		setTimeout(() => {
			console.log(`Hi! This is ${name}!`);
			this.next();
		},0)
	}

	next () {
		if (this.taskList.length > 0) {
			this.taskList.shift()();
		}
		return this;
	}

	eat (what) {
		this.taskList.push(() => {
			console.log(`${this.name} eat ${what}!`);
			this.next();
		})
		return this;
	}

	sleep (num) {
        this.taskList.push(() => {
            console.log(`${this.name} sleep ${num} seconds!`);
            setTimeout(() => {
                this.next();
            }, num*1000);
        })
        return this;
	}
	
}

const lazyMan = (name) => new Lazyman(name);

lazyMan('Tom').eat('lunch').sleep(2).eat('dinner');
