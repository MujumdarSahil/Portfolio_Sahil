import { ContactMe } from '../types';
import { contactMeData } from '../data/portfolioData';

export async function getContactMe(): Promise<ContactMe> {
  return contactMeData;
}
