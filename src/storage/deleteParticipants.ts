import AsyncStorage from "@react-native-async-storage/async-storage";

import { getParcipants } from "./getParticipants";
export const deleteParticipants = async (name: string) => {
  try {
    const storage = await getParcipants();
    await AsyncStorage.setItem(
      "TodoList",
      JSON.stringify(storage.filter((item: string) => item !== name))
    );
  } catch (error) {
    console.log(error);
  }
};
