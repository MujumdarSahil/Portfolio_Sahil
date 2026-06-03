import { Certification } from '../types';
import { certificationsData } from '../data/portfolioData';

export async function getCertifications(): Promise<Certification[]> {
  return certificationsData;
}
