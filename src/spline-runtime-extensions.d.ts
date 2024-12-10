declare module '@splinetool/runtime' {
  interface Camera {
    states: Array<{ name: string; id: string }>;
    setState: (stateName: string) => void;
    position: { x: number; y: number; z: number };
  }

  interface Application {
    _camera: Camera;
  }
}
