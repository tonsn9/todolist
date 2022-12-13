import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "Ton",
    "Gui",
    "Danilo",
    "Wallace",
    "Charles",
    "Rafa",
    "Matheus",
    "Zeca",
    "Thamyres",
    "Douglas",
    "Rhuan",
    "Dhiego",
    "Dhiogo",
  ];

  function handlePartipantAdd() {
    if (participants.includes("Ton")) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante com esse nome na lista "
      );
    }
  }

  function handleParticipantRemove(name: string) {
    return Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Esse já era"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

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

        <FlatList
          data={participants}
          // data={[]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista
              de presença!
            </Text>
          )}
        />
      </View>
    </>
  );
}
