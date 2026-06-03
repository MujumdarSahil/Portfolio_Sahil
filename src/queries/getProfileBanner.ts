import { ProfileBanner } from '../types';
import { profileBannerData } from '../data/portfolioData';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return profileBannerData;
}
