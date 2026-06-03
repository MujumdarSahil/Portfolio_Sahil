import { Project } from '../types';
import { projectsData } from '../data/portfolioData';

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}
