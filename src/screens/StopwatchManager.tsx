import {useState }  from "react";
import Stopwatch from "../components/Stopwatch";
import { Button, ScrollView, View } from "react-native";


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
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Add Timer" onPress={addTimer} />
      <Button title="Reset All" onPress={resetAllTimers}/>
     
      <ScrollView>
        {timers.map(id => (
          <Stopwatch key={id} id={id} resetSignal={resetAllSignal} onDelete={() => deleteTimer(id)} />
        ))}
      </ScrollView>
    </View>
  );
}

export default StopwatchManager;