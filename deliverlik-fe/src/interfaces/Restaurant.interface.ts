export interface IRestaurant {
  id: string;
  name: string;
  rating: number;
  likes: number;

  distance: number;
  deliveryFee: number;
  deliveryTime: number;

  isOurChoice?: boolean;
  tags?: Array<{ description: string; color: string }>;
}
