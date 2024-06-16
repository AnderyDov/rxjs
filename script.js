import { Observable } from 'rxjs';

const but = document.querySelector('.but');
const observable = new Observable(subscriber => {
	subscriber.next(1);
	subscriber.next(2);
	subscriber.next(3);
	setTimeout(() => {
		subscriber.next(4);
		subscriber.complete();
	}, 1000);
});

but.onclick = () => {
	observable.subscribe({
		next(x) {
			console.log('got value ' + x);
		},
		error(err) {
			console.error('something wrong occurred: ' + err);
		},
		complete() {
			console.log('done');
		},
	});
};
