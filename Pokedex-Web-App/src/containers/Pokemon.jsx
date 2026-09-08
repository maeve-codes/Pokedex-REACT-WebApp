import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { apiBaseUrl } from '../config';
import Swal from 'sweetalert2';


function Pokemon({ pokemon, isLoading, getPokemon }) {

    const deletePokemon = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure you want to delete this pokemon?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        });
        if (result.isConfirmed){
            try{
                await axios.delete(`${apiBaseUrl}/pokemon/${id}`);
                toast.success('Pokemon Deleted Successfully');
            } catch (error) {
                toast.error(error.message);
            }
            getPokemon();
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div>
                <Link to={`/pokemon/create/new`} className="inline-block mt-4 text-center shadow-md text-sm bg-blue-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-blue-600 hover:cursor-pointer">Add Pokémon</Link>
                <div className="mt-2"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {isLoading && <p>Loading...</p>}
                {pokemon.map((poke) => (
                    <div key={poke.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src={poke.sprite} alt={poke.name} className="mx-auto" />
                        <h2 className="text-2xl font-bold text-center">{poke.name}</h2>
                        <p className="text-center">Number: #{poke.number}</p>
                        <div className='mt-2 flex gap-4'>
                            <Link to={`/pokemon/edit/${poke.id}`} className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer">Edit</Link>
                            <button onClick={() => deletePokemon(poke.id)} className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer">Delete</button>
                        </div>  
                    </div>
                ))}
            </div>
        </div>
    );
}

// PropTypes
Pokemon.propTypes = {
    pokemon: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getPokemon: PropTypes.func.isRequired,
};

export default Pokemon;