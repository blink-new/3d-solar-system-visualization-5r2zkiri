export interface PlanetData {
  name: string;
  radius: number;
  position: number; // distance from sun
  rotationSpeed: number;
  color: string;
  textureUrl?: string;
}

export const PLANETS: PlanetData[] = [
  {
    name: "Mercury",
    radius: 0.4,
    position: 4,
    rotationSpeed: 0.01,
    color: "#A0522D",
  },
  {
    name: "Venus",
    radius: 0.9,
    position: 7,
    rotationSpeed: 0.008,
    color: "#DEB887",
  },
  {
    name: "Earth",
    radius: 1,
    position: 10,
    rotationSpeed: 0.005,
    color: "#4169E1",
  },
  {
    name: "Mars",
    radius: 0.5,
    position: 13,
    rotationSpeed: 0.004,
    color: "#CD5C5C",
  },
  {
    name: "Jupiter",
    radius: 2.5,
    position: 18,
    rotationSpeed: 0.002,
    color: "#DAA520",
  },
  {
    name: "Saturn",
    radius: 2.2,
    position: 23,
    rotationSpeed: 0.001,
    color: "#F4A460",
  },
  {
    name: "Uranus",
    radius: 1.8,
    position: 28,
    rotationSpeed: 0.0009,
    color: "#87CEEB",
  },
  {
    name: "Neptune",
    radius: 1.7,
    position: 32,
    rotationSpeed: 0.0008,
    color: "#1E90FF",
  },
];