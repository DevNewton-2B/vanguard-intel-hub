import { Plane, Ship, Crosshair, Target, Rocket, Shield } from 'lucide-react';

export const navItems = [
  { id: 1, name: 'Jets', path: '/category/jets', icon: Plane },
  { id: 2, name: 'Warships', path: '/category/warships', icon: Ship },
  { id: 3, name: 'Submarines', path: '/category/submarines', icon: Target },
  { id: 4, name: 'Tanks', path: '/category/tanks', icon: Shield },
  { id: 5, name: 'Missiles', path: '/category/missiles', icon: Rocket },
  { id: 6, name: 'Weapons', path: '/category/weapons', icon: Crosshair },
];