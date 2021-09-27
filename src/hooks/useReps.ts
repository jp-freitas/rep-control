import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type FirebaseReps = Record<string, {
  local: string;
  internet_protocol: number;
  serial_number: number;
}>

export type Rep = {
  id: string;
  local: string;
  internet_protocol: number;
  serial_number: number;
}

export function useReps() {
  const [reps, setReps] = useState<Rep[]>([]);

  useEffect(() => {
    const repRef = database.ref(`reps/`);
    repRef.on('value', rep => {
      const databaseRep = rep.val();
      const firebaseReps: FirebaseReps = databaseRep ?? {};
      const parsedReps = Object.entries(firebaseReps).map(([key, value]) => {
        return {
          id: key,
          local: value.local,
          internet_protocol: value.internet_protocol,
          serial_number: value.serial_number,
        }
      });
      setReps(parsedReps);
    });
  }, []);

  return {
    reps,
  };
}