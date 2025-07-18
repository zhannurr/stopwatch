import {useState }  from "react";
import Stopwatch from "../components/Stopwatch";
import { Button, ScrollView, View, Text, Touchable, TouchableOpacity } from "react-native";
import { stopwatchStyles } from "../styles/stopwatchStyle";
import { playClickSound } from "../utils/soundUtil";


function StopwatchManager(){
    const [timers, setTimers] = useState<string[]>([]);
    const [resetAllSignal, setResetAllSignal] = useState(false);


    function addTimer(){
        const newID = Date.now().toString();
        setTimers(prev => [...prev, newID]);
    }

    function deleteTimer( idTimer: string){
        setTimers(prev => prev.filter(id => id != idTimer));

    }

    function resetAllTimers() {
        setResetAllSignal(true);
        setTimeout(() => setResetAllSignal(false), 100);
  }

    return (
    <View style={stopwatchStyles.container}>
      <Text style={stopwatchStyles.titleMain}> STOPWATCH MANAGER</Text>
      
      <View style={stopwatchStyles.addAndReset}>
        <TouchableOpacity style={[stopwatchStyles.button, stopwatchStyles.addButton]} onPress={() => { playClickSound();addTimer();}}>
          <Text style={stopwatchStyles.textStyle}>Add Timer</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[stopwatchStyles.button, stopwatchStyles.resetAllButton]} onPress={() => { playClickSound();resetAllTimers();}}>
          <Text style={stopwatchStyles.textStyle}>Reset All</Text>

        </TouchableOpacity>
      </View>
     
      <ScrollView>
        {timers.map(id => (
          <Stopwatch key={id} id={id} resetSignal={resetAllSignal} onDelete={() => deleteTimer(id)}/>
        ))}
      </ScrollView>
    </View>
  );
}

export default StopwatchManager;