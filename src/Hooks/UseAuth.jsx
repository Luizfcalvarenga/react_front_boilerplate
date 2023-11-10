import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';

export function UseAuth() {
	const value = useContext(AuthContext);

	return value;
}
