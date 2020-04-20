import React, {useEffect, useState} from 'react'

export default function Exercises(props) {

    let [exercises, setExercises] = useState([])


    useEffect(() =>{
        fetch(`http://localhost:3000/workouts`)
        .then(res => res.json())
        .then(response => {
            setExercises(response);
        })
        
    }, [])

    return (
        <div>
            <h1>All Exercises</h1>
            <div>
                {
                    exercises.map(exercise => {
                        return <h3 key={`exercise${exercise.id}`}>{exercise.name}</h3>
                    })
                        
                }
            </div>
        </div>
    )
}
