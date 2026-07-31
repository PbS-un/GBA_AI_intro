import {
  Accessibility,
  Activity,
  AppWindow,
  Building2,
  Clock3,
  HeartHandshake,
  House,
  Landmark,
  LifeBuoy,
  MapPinned,
  MessageCircleHeart,
  Network,
  Route,
  Search,
  ShieldAlert,
  Stethoscope,
  UsersRound,
  Waypoints,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconName } from "../data/content";

export const iconMap: Record<IconName, LucideIcon> = {
  app: AppWindow,
  search: Search,
  route: Route,
  alone: UsersRound,
  voice: MessageCircleHeart,
  landmark: Landmark,
  medical: Stethoscope,
  risk: ShieldAlert,
  emergency: LifeBuoy,
  access: Accessibility,
  service: Building2,
  flow: Waypoints,
  clock: Clock3,
  home: House,
  connect: Network,
};

export const utilityIcons = {
  Activity,
  HeartHandshake,
  MapPinned,
};
