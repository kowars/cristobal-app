'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Status } from './types';

// Estado inicial por defecto
const defaultStatus: Status = {
  type: 'Libre',
  message: '',
  mood: 5,
};

let status: Status = { ...defaultStatus };
let listeners: Array<(status: Status) => void> = [];

const broadcast = () => {
  listeners.forEach((listener) => {
    listener(status);
  });
};

export const statusStore = {
  updateStatus: (newStatus: Status) => {
    status = newStatus;
    broadcast();
  },
  subscribe: (listener: (status: Status) => void): (() => void) => {
    listeners.push(listener);
    // Devuelve una función para desuscribirse
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot: (): Status => {
    return status;
  }
};

// Un custom hook para usar el store fácilmente en los componentes
export function useStatusStore() {
  const [syncedStatus, setSyncedStatus] = useState(statusStore.getSnapshot());

  useEffect(() => {
    // Nos suscribimos a los cambios
    const unsubscribe = statusStore.subscribe(setSyncedStatus);
    // Y nos desuscribimos al desmontar el componente
    return () => unsubscribe();
  }, []);

  const setStatus = useCallback((newStatus: Status) => {
    statusStore.updateStatus(newStatus);
  }, []);

  return [syncedStatus, setStatus] as const;
}
