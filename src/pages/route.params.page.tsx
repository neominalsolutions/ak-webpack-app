import React from 'react';
import { useParams } from 'react-router-dom';

function RouteParamsPage() {
	// rota üzerinden dinamik değişen değerleri okuyan hook.
	const params = useParams();

	console.log('params.id', params.id);

	return <>Route Params Page</>;
}

export default RouteParamsPage;

// route üzerinden veri okuma /params:/id
