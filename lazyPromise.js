class Lazyman  {
	constructor (name) {
		this.name = name;
		this.taskList = [];
		this.promise = Promise.resolve();
		setTimeout(() => {
			console.log(`Hi! This is ${name}!`);
			while(this.taskList.length > 0) {
				this.promise = this.promise.then(this.taskList.shift())
			}
		},0)
	}

	eat (what) {
		this.taskList.push(() => {
			return  new Promise((resolve,reject) => {
				console.log(`${this.name} eat ${what}!`);
				resolve()
			});
		})
		return this;
	}

	sleep (num) {
		this.taskList.push(() => {
			return  new Promise((resolve,reject) => {
				console.log(`${this.name} sleep ${num} seconds!`);
				setTimeout(() => {
				   resolve();
				}, num*1000);
			});;
		})
        return this;
	}
	
}

const lazyMan = (name) => new Lazyman(name);

lazyMan('Tom').eat('lunch').sleep(2).eat('dinner');
