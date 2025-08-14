'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import type { Status } from './types';
import { db } from './firebase'; // Import Firestore instance

// Estado inicial por defecto
const defaultStatus: Status = {
  type: 'Libre',
  mood: 5,
};

export const statusStore = {
  updateStatus: async (newStatus: Status) => {
    // For now, using a fixed document ID 'user-status'
    console.log("Starting status update in Firestore...");
    try {    
      await setDoc(doc(db, 'statuses', 'user-status'), newStatus);
      console.log("Status updated successfully in Firestore.");
    } catch (error) {
      console.error("Error updating status in Firestore:", error);
    }
  },
};

// Un custom hook para usar el store fácilmente en los componentes
export function useStatusStore() {
  const [syncedStatus, setSyncedStatus] = useState<Status | null>(null); // Initialize with null
  const [loading, setLoading] = useState(true);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const statusDocRef = doc(db, 'userStatuses', 'main-status');

    // Set up a real-time listener to the Firestore document
    const unsubscribe = onSnapshot(statusDocRef, (docSnap) => {
      if (isInitialLoad.current) {
        isInitialLoad.current = false;
        setLoading(false);
      }
      if (docSnap.exists()) {
        setSyncedStatus(docSnap.data() as Status);
      } else {
        setSyncedStatus({ ...defaultStatus });
      }
    }, (error) => {
      console.error("Error fetching status:", error);
      if (isInitialLoad.current) {
        isInitialLoad.current = false;
        setLoading(false);
      }
    });
    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  const setStatus = useCallback((newStatus: Status) => {
    statusStore.updateStatus(newStatus);
  }, []);

  return [syncedStatus, setStatus] as const;
}
