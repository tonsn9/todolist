import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  function handlePartipantAdd() {}
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Segunda, 12 de Dezembro de 2022 </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6b6b6b"
          />

          <TouchableOpacity style={styles.button} onPress={handlePartipantAdd}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
        <Participant />
      </View>
    </>
  );
}
