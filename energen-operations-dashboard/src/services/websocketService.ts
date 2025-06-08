import { io, Socket } from 'socket.io-client';

// TODO: Replace with the actual WebSocket server URL from project specifications
const WEBSOCKET_URL = 'wss://mobile-bid-tool-888909920.development.catalystserverless.com/server/realtime';
// Using wss protocol and assuming a /realtime endpoint. This needs confirmation.

let socket: Socket | null = null;

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  // Define more specific event types based on application needs
  technicianLocationUpdate: (data: { technicianId: string; latitude: number; longitude: number; timestamp: number }) => void;
  equipmentStatusAlert: (data: { equipmentId: string; status: string; message: string }) => void;
  serviceAppointmentUpdate: (data: { appointmentId: string; status: string; details: any }) => void;
  performanceMetricStream: (data: { metricName: string; value: number; unit: string }) => void;
  emergencyDispatchNotification: (data: { incidentId: string; location: string; details: string }) => void;
}

interface ClientToServerEvents {
  hello: () => void;
  // Define client-side event types
  subscribeToTechnicianLocation: (technicianId: string) => void;
  requestEquipmentStatus: (equipmentId: string) => void;
}

export const getWebSocket = (): Socket<ServerToClientEvents, ClientToServerEvents> | null => {
  return socket;
};

export const connectWebSocket = (): Socket<ServerToClientEvents, ClientToServerEvents> => {
  if (socket && socket.connected) {
    console.log('WebSocket already connected');
    return socket;
  }

  console.log('Attempting to connect to WebSocket server at:', WEBSOCKET_URL);
  socket = io(WEBSOCKET_URL, {
    // reconnectionAttempts: 5, // Example: Configure reconnection attempts
    // reconnectionDelay: 3000, // Example: Configure reconnection delay
    transports: ['websocket'], // Prefer WebSocket transport
  });

  socket.on('connect', () => {
    console.log('WebSocket connected successfully. Socket ID:', socket?.id);
  });

  socket.on('disconnect', (reason) => {
    console.log('WebSocket disconnected:', reason);
    if (reason === 'io server disconnect') {
      // The server has forcefully disconnected the socket with socket.disconnect()
      // Potentially, you might not want to reconnect automatically here.
    }
    // else the socket will automatically try to reconnect
  });

  socket.on('connect_error', (error) => {
    console.error('WebSocket connection error:', error);
  });

  // Example: Generic listener for all events (for debugging)
  // socket.onAny((event, ...args) => {
  //   console.log(`WebSocket event received: ${event}`, args);
  // });

  return socket;
};

export const disconnectWebSocket = () => {
  if (socket && socket.connected) {
    console.log('Disconnecting WebSocket...');
    socket.disconnect();
    socket = null;
  } else {
    console.log('WebSocket not connected or already disconnected.');
  }
};

// Example of how to use specific event types (optional, for illustration)
/*
if (socket) {
  socket.emit('subscribeToTechnicianLocation', 'tech-123');

  socket.on('technicianLocationUpdate', (data) => {
    console.log('Technician Location:', data);
  });
}
*/
