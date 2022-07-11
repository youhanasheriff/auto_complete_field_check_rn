export interface StoryDetail {
  id: string;
  description: string;
  imageUrl: string;
}

export interface Story {
  id: string;
  imageUrl: string;
  title: string;
  details: StoryDetail[];
}
