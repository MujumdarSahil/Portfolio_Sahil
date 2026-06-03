import { Skill } from '../types';
import { skillsData } from '../data/portfolioData';

export async function getSkills(): Promise<Skill[]> {
  return skillsData;
}
