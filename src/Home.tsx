import {Dispatch, SetStateAction, useReducer, useState} from "react";
import {formInterface, formActionInterface, OptionsData, OptionsAction, SessionData, GenericAction} from "./utilities/interfaces";
import {arrayOfOptions} from "./utilities/sharedFns";
let cc = console.log;

function Home(){
    const defaultOptions: OptionsData = {
        exercises: 2,
        sets: 3,
        reps: 5,
        weights: 100,
    }

    const [optionsState, optionsDispatch] = useReducer(optionsReducer, defaultOptions);

    function optionsReducer(state: OptionsData, action: GenericAction){
        switch (action.type){
            case "exercises":
                return {...state, exercises: action.payload}
            case "reps":
                return {...state, reps: action.payload}
            case "sets":
                return {...state, sets: action.payload}
            case "weights":
                return {...state, weights: action.payload}
            default:
                return state;
        }
    }

    const defaultSession: SessionData = { //TODO Update to useLocalStorage
        title: "Session Title",
        date: "2022-02-02", //TODO Correct this value
        exerciseCount: optionsState.exercises,
        exerciseNames: undefined, //TODO Set an unnamed top Option in DOM.
        sets: optionsState.sets,
        reps: getStartingValuesArray(optionsState.sets, optionsState.reps),
        weights: getStartingValuesArray(optionsState.sets, optionsState.weights),
    }

    const [sessionState, sessionDispatch] = useReducer(sessionReducer, defaultSession);

    function sessionReducer(state: SessionData, action: GenericAction){
        switch (action.type){
            case "exercises":
                return {...state, exerciseCount: action.payload}
            default:
                return state;
        }
    }


    const exerciseOptionElements: JSX.Element[] = arrayOfOptions(12);
    const exerciseDataElements: JSX.Element[] = Array.from({length: +sessionState.exerciseCount}).map((_e, k) => {
        return(
            <div key={k}>
                <ExerciseElements
                    parentInstance = {k}
                />
            </div>
        );
    });

    return (
        <div className={"container"}>
            <Options
                optionsDispatch={optionsDispatch}
                optionsState = {optionsState}
            />
            <select value={+sessionState.exerciseCount || +optionsState.exercises} onChange={(e) => {
                sessionDispatch({type: "exercises", payload: +e.target.value});
                cc(sessionState.exerciseCount)
            }}>
                {exerciseOptionElements}
            </select>
                {exerciseDataElements}
        </div>
    )
}



function Options({optionsDispatch, optionsState}: {optionsDispatch: Dispatch<OptionsAction>, optionsState: OptionsData}) {
    const exerciseOptions: JSX.Element[] = arrayOfOptions(12);
    const setOptions: JSX.Element[] = arrayOfOptions(12);
    const repOptions: JSX.Element[] = arrayOfOptions(20);

    return (
        <div className={"optionsContainer"}>
            <span>Default exercise count</span>
            <select value={optionsState.exercises} onChange={(e) => {
                optionsDispatch({type: "exercises", payload: +e.target.value});
            }}>
                {exerciseOptions}
            </select>
            <span>Default set count</span>
            <select value={optionsState.sets} onChange={(e) => {
                optionsDispatch({type: "sets", payload: +e.target.value});
            }}>
                {setOptions}
            </select>
            <span>Default rep count</span>
            <select value={optionsState.reps} onChange={(e) => {
                optionsDispatch({type: "reps", payload: +e.target.value});
            }}>
                {repOptions}
            </select>
            <span>Default weight</span>
            <input type={"number"} value={optionsState.weights} onChange={(e) => {
                optionsDispatch({type: "weights", payload: +e.target.value});
            }}/>
        </div>
    );
}

function getStartingValuesArray(sets: number, value: number){
    let arrayOfValues: number[][] = [];

    for (let i = 0; i < sets; i++){
        let temp: number[] = Array.from({length: sets}).map((_e) => {
            return value;
        });
        arrayOfValues.push(temp);
    }

    return arrayOfValues;
}

export default Home;

function ExerciseElements({parentInstance}: {parentInstance: number}){

    return (
      <> test</>
    );
}












/*    const [formState, formReducer] = useReducer(formReducer, initialFormValue);


/!*
let initialFormValue: formInterface = {
    reps: [[5, 5, 5], [5, 5, 5]],
    notacounter: 5,
    type: "Default",
    name: "w",
}

function formReducer(formState: formInterface, action: formActionInterface){
    return formState;
*!/}*/



{/*            {formState.counter}
            <button onClick={(e) => {
                formReducer({type: "increment"})
            }}>+</button>
            <br />
            <input type={"text"} value={formState.name} onChange={(e) => {
                formReducer({type: "increment", payload: [5, 5]})
            }}/> Name


            {formState.notacounter }*/}