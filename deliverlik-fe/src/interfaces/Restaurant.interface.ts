export interface IRestaurant {
  id: string;
  name: string;
  rating: number;
  likes: number;
  type: string;
  backgroundImg?: string;

  distance: number;
  deliveryFee: number;
  deliveryTime: number;

  isOurChoice?: boolean;
  tags?: Array<{ description: string; color: string }>;
}
