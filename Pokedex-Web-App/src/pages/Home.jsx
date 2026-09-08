import {useState, useEffect} from 'react';
import axios from 'axios';
import Pokemon from '../containers/Pokemon';
import { toast } from 'react-toastify';
import { apiBaseUrl } from '../config';

function Home() {

    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPokemon = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${apiBaseUrl}/pokemon`);
            setPokemon(response.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    }

     useEffect(() => {
         getPokemon(); 
     }, []);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8">Pokédex</h1>
            <Pokemon pokemon={pokemon} isLoading={isLoading} getPokemon={getPokemon} />
        </div>
  );
}

export default Home;