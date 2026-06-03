import { TimelineItem } from '../types';
import { timelineData } from '../data/portfolioData';

export async function getTimeline(): Promise<TimelineItem[]> {
  return timelineData;
}
