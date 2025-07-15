type SocialName = 'github' | 'linkedin' | 'twitter' | 'instagram' | 'youtube';

export interface Social {
  name: SocialName;
  url: string;
  image: {
    logo: any;
    width: number;
    height: number;
  }
}