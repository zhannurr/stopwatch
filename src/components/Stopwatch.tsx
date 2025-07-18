import React, {useState, useEffect, useRef } from "react";
import { stopwatchStyles } from "../styles/stopwatchStyle";
import { TouchableOpacity, View, Text } from "react-native";


interface StopwatchProps {
    id: string;
    resetSignal: boolean;
    onDelete: () => void;
}
 
function Stopwatch({ onDelete, resetSignal }: StopwatchProps){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() =>{
                setElapsedTime(Date.now()- startTimeRef.current);
            },10);
        }

        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        }
    },[isRunning]);

    useEffect(() => {
        if (resetSignal) {
            reset();
        }
    }, [resetSignal]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }

    function stop() {
        setIsRunning(false);
        
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60)%60);
        let seconds = Math.floor(elapsedTime / (1000) %60);
        let miliseconds = Math.floor(elapsedTime % 1000)/10;

        let newminutes = String(minutes).padStart(2, "0");
        let newseconds = String(seconds).padStart(2, "0");
        let newmiliseconds = String(miliseconds)
        newmiliseconds = newmiliseconds.slice(0, newmiliseconds.length-2);
        newmiliseconds = newmiliseconds.padStart(2, "0");

        return `${newminutes}: ${newseconds} : ${newmiliseconds}`;

    }
    return (
        <View style={stopwatchStyles.stopwatch}>
            <View style={stopwatchStyles.display}>
                {formatTime()}
            </View>
            <View>
                <TouchableOpacity onPress={start} style={stopwatchStyles.button}>
                    <Text>Start</Text>
                </TouchableOpacity>

                  <TouchableOpacity onPress={stop}>
                    <Text>stop</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={reset}>
                    <Text>reset</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onDelete} style={stopwatchStyles.button}>
                    <Text>Delete</Text>
                </TouchableOpacity>


            </View>

            
        </View>
     

);

}



export default Stopwatch;