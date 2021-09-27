import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type RepType = {
  id: string;
  local: string;
  internet_protocol: number;
  serial_number: number;
  repair_history: FirebaseRepairHistory;
}

type RepairHistory = {
  id: string;
  date: Date;
  description: string;
  situation: string;
}

type FirebaseRepairHistory = Record<string, {
  date: Date;
  description: string;
  situation: string;
}>;

export function useRep(repId: string) {
  const [rep, setRep] = useState<RepType>();
  const [repRepairHistory, setRepRepairHistory] = useState<RepairHistory[]>([]);

  useEffect(() => {
    const repRef = database.ref(`reps/${repId}`);
    const repRepairHistoryRef = database.ref(`reps/${repId}/repair_history`);

    repRef.once('value', rep => {
      const databaseRep = rep.val();
      setRep(databaseRep);
    });

    repRepairHistoryRef.on('value', repRH => {
      const databaseRepairHistory = repRH.val();
      const firebaseRepairHistory: FirebaseRepairHistory = databaseRepairHistory ?? {};
      const parsedRepairHistory = Object.entries(firebaseRepairHistory).map((
        [key, value]) => {
        return {
          id: key,
          date: value.date,
          description: value.description,
          situation: value.situation,
        }
      });
      setRepRepairHistory(parsedRepairHistory);
    });
  }, [repId]);

  return {
    rep,
    repRepairHistory,
  }
}