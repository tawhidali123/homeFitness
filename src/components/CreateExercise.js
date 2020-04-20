import React, {useState} from 'react'

export default function CreateExercise(props) {

    let [name, setName] = useState('');


    let handleNameChange = evt => {
        setName(evt.target.value)
    }

    let handleSubmit = evt => {
        fetch(`http://localhost:3000/workouts`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                workout: {name: name}
            })
        })

        
        
    }


    return (
        <div className='container'>
            <div className='wrapper'>

                <div className='formContainer'>
                    <h1>Create an Exercise</h1>

                    <h5>Name of Exercise</h5>
                    <input 
                    type='text' 
                    className={'nameOfExercise'}
                    onChange={handleNameChange} />

                    <br />

                    <button onClick={handleSubmit} >Create Workout</button>
                    
                </div>

            </div>
        </div>
    )
}
