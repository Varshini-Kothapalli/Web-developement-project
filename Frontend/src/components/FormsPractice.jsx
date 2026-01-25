import './FormsPractice.css'
import {useForm} from 'react-hook-form';
function FormsPractice(){
    let {register,handleSubmit,formState:{errors}}=useForm();

    function submiting(obj){
        console.log(obj);
    }
    return(
        <div>
            <form onSubmit={handleSubmit(submiting)}>
                <h1>Form</h1>
                <input type="text" placeholder='Name' name='Name' {...register('name',{required:true})} />
                {errors?.name?.type==='required'&&<p>Username is required</p>}
                
                <input type="email" placeholder='Email' name='Email'  {...register('Email')}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default FormsPractice;