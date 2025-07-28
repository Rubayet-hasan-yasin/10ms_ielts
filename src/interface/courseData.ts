export interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface cta_text {
  name: string;
  value: string;
}

export interface CourseData {
  code: number;
  data: {
    slug: string;
    cta_text: cta_text;
    id: number;
    title: string;
    description: string;
    platform: string;
    type: string;
    modality: string;
    media: MediaItem[];
    checklist: ChecklistItem[];
  };
}
