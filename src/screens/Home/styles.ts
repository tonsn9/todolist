import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    marginTop: 48,
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",
  },

  eventDate: {
    color: "#ffffff",
    fontSize: 15,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 10,
    color: "#ffffff",
    marginRight: 10,
    padding: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: "#86EFAC",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
});
