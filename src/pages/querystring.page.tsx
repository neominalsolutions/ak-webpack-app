import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function QueryStringPage() {
	// virtual domda değişen local state'in güncellenemesi ve okunmasından sorumlu hook.

	const [params] = useSearchParams();

	console.log('search', params.get('search'));
	console.log('language', params.get('lang'));

	const [random, setRandom] = useState<number>(0);

	console.log('...rendering');

	// component içirisindeki yaşam döngüsünden sorumlu hook
	useEffect(() => {
		console.log('Doma ilk giriş');

		// cleap functions
		return () => {
			console.log('Domdan çıkış');
		};
	}, []);

	useEffect(() => {
		if (random > 0) {
			console.log('State değişti', random);
		}
	}, [random]); // state değişimini takip et

	return (
		<>
			QueryString Page
			<p>Random: {random}</p>
			<hr></hr>
			<button onClick={() => setRandom(Math.round(Math.random() * 100))}>
				Random Değer
			</button>
		</>
	);
}

export default QueryStringPage;

// /query?search='deneme'
