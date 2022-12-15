import AsyncStorage from "@react-native-async-storage/async-storage";
import { getParcipants } from "./getParticipants";

export const createParticipants = async (participantName: string) => {
  try {
    const storage = await getParcipants();
    await AsyncStorage.setItem(
      "TodoList",
      JSON.stringify([participantName, ...storage])
    );
  } catch (error) {
    console.error(error);
  }
};
