import React, {useState, useEffect, useRef } from "react";
import { stopwatchStyles } from "./styles/stopwatchStyle";
import { TouchableOpacity, View, Text } from "react-native";

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {


    },[isRunning]);

    function start(){

    }

    function stop() {
        
    }
    function reset() {
        
    }
    function formatTime(){
        return '00:00:00';

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


            </View>

            
        </View>
     

);

}



export default Stopwatch;