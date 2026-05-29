export interface BookSection {
  id: string;
  title: { bn: string; en: string };
  content: { bn: string; en: string };
  caption: { bn: string; en: string };
  imageUrl?: string;
}

export interface BookData {
  id: string;
  title: { bn: string; en: string };
  author: string;
  sections: BookSection[];
  imageUrl?: string;
}
