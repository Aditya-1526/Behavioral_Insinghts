import {
  LayoutDashboard,
  Lightbulb,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/insights", label: "Insight Explorer", icon: Lightbulb },
  { href: "/timeline", label: "Narrative Timeline", icon: Clock },
];
