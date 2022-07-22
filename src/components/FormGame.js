import { useForm} from "react-hook-form";
import '../styles/FormGame.css'
import {create} from "../utils/service/GameService";

const FormGame = ({push}) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    async function save(game) {
        const result = await create(game);
        push(result);
        reset();
    }


    return(
        <>
            <h2 className='form-title'><span>Nouveau Jeu</span></h2>

            <form onSubmit={handleSubmit(save)}>
                <div>
                    <label htmlFor='name'>Nom</label>
                    <input id='name'{...register('title', {
                               required: 'Ce jeu doit bien avoir un nom, non ?'
                    })}/>
                    <p style={{color: 'red'}}>{errors.title?.message}</p>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input id='description' {...register('description', {
                        required: 'Une petite description peut-être ?',
                        minLength: {value : 10, message: `C'est un peu court !`}
                    })}/>
                    <p style={{color: 'red'}}>{errors.description?.message}</p>
                </div>
                <div>
                    <label htmlFor='studio'>Studio</label>
                    <input id='studio' {...register('studio', {
                        required: `Rendez à César ce qui appartient à César !`
                    })}/>
                    <p style={{color: 'red'}}>{errors.studio?.message}</p>
                </div>
                <div>
                    <label htmlFor='image'>Image</label>
                    <input id='image' {...register('image', {
                        required: `Un petite illustration pour terminer ?`
                    })}/>
                    <p style={{color: 'red'}}>{errors.image?.message}</p>
                </div>
                <p>
                    <button>Enregistrer</button>
                </p>
            </form>
        </>
    )
}

export default FormGame;