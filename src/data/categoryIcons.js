import { Monitor, Bot, Globe, BarChart2, Shield, Cpu, Rocket, Palette, FlaskConical, Briefcase, DollarSign, Activity, Heart, Gamepad2, GraduationCap, Leaf, Utensils, Film, Trophy, Camera, Landmark } from 'lucide-react';

const ICON_MAP = {
  'technology': Monitor,
  'ai-future': Bot,
  'web-development': Globe,
  'data-science': BarChart2,
  'cybersecurity': Shield,
  'cloud-computing': Cpu,
  'mobile-development': Monitor,
  'devops': Rocket,
  'blockchain': Landmark,
  'design': Palette,
  'science': FlaskConical,
  'business': Briefcase,
  'finance': DollarSign,
  'health': Activity,
  'lifestyle': Heart,
  'gaming': Gamepad2,
  'education': GraduationCap,
  'environment': Leaf,
  'space': Rocket,
  'food-nutrition': Utensils,
  'entertainment': Film,
  'sports': Trophy,
  'photography': Camera,
};

export function getCategoryIcon(slug) {
  return ICON_MAP[slug] || Globe;
}
