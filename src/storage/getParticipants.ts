import AsyncStorage from "@react-native-async-storage/async-storage";

export const getParcipants = async () => {
  try {
    const storage = await AsyncStorage.getItem("TodoList");
    const value = storage ? JSON.parse(storage) : [];
    return value;
  } catch (error) {
    console.error(error);
  }
};
