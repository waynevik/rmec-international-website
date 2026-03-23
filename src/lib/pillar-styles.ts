import type { PillarAccent } from "@/content/rmec";

const accentMap: Record<PillarAccent, string> = {
  maroon: "border-rmec-maroon bg-rmec-maroon/15 ring-rmec-maroon/30",
  royal: "border-rmec-royal bg-rmec-royal/20 ring-rmec-royal/35",
  gold: "border-rmec-gold-accent bg-rmec-gold-accent/10 ring-rmec-gold-accent/25",
  forest: "border-rmec-forest bg-rmec-forest/15 ring-rmec-forest/30",
  purple: "border-rmec-purple bg-rmec-purple/15 ring-rmec-purple/30",
  compassion: "border-rmec-compassion bg-rmec-compassion/15 ring-rmec-compassion/30",
  missions: "border-rmec-missions bg-rmec-missions/15 ring-rmec-missions/30",
};

const dotMap: Record<PillarAccent, string> = {
  maroon: "bg-rmec-maroon",
  royal: "bg-rmec-royal",
  gold: "bg-rmec-gold-accent",
  forest: "bg-rmec-forest",
  purple: "bg-rmec-purple",
  compassion: "bg-rmec-compassion",
  missions: "bg-rmec-missions",
};

export function pillarCardClass(accent: PillarAccent): string {
  return accentMap[accent];
}

export function pillarDotClass(accent: PillarAccent): string {
  return dotMap[accent];
}
