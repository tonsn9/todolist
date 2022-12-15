import React, { useState } from "react";
import { Participant } from "../../components/Participant";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handlePartipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante com esse nome na lista "
      );
    }
    if (participantName == "") {
      return Alert.alert("Adicione um usuário não existente!");
    }

    if (participantName == "Guilherme Camillo") {
      return Alert.alert("Esse cara é top");
    }
    setParticipants((prevState) => [participantName, ...prevState]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    return Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
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
        <Text style={styles.eventName}>Sua lista Toda</Text>
        <Text style={styles.eventDate}>
          Liste quaqluer coisa com o app Camillo{" "}
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6b6b6b"
            onChangeText={setParticipantName}
            value={participantName}
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
              Sua lista está vazia! Bora encher isso com tudo que desejar!
            </Text>
          )}
        />
      </View>
    </>
  );
}
