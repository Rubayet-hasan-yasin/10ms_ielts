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

interface SectionValue {
    // Common fields
    id?: string;

    // Instructor values
    description?: string;
    has_instructor_page?: boolean;
    image?: string;
    name?: string;
    short_description?: string;
    slug?: string;

    // Feature values
    icon?: string;
    subtitle?: string;
    title?: string;

    // Engagement values
    background?: {
        image: string;
        primary_color: string;
        secondary_color: string;
    };
    cta?: {
        clicked_url: string;
        color: string;
        text: string;
    };
    description_color?: string;
    thumbnail?: string;
    title_color?: string;
    top_left_icon_img?: string;
}


interface Section {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: SectionValue[];
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
    sections: Section[];
    modality: string;
    media: MediaItem[];
    checklist: ChecklistItem[];
  };
}
