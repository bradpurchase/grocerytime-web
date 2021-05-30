export interface Recipe {
  id: any; // TODO: replace with @types/uuid?
  name: string;
  description: string;
  mealType: string;
  url: string;
  imageUrl: string;
}
