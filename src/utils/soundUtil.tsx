import { Audio } from 'expo-av';

export async function playClickSound() {
  const { sound } = await Audio.Sound.createAsync(
    require('../../assets/sounds//computer-mouse-click-351398.mp3') 
  );
  await sound.playAsync();
}
