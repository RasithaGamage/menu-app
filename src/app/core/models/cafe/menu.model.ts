export class Menu {
  isEnabled: boolean;
  organizationId: string;
  locationId: string;
  menuId: string;
  publishedVersionId: string;
  draftVersionId: string;
  publishedVersion: {
    id: string;
    imageUrl: string;
    localizations: {
      [key: string]: {
        name: string;
        description: string;
        availability: string;
      };
    };
    categories: Category[];
  };
};

export class Category {
  id: string;
  isEnabled: boolean;
  imageUrl: string;
  localizations: {
    [key: string]: {
      name: string;
      description: string;
      availability: string;
    };
  };
  items: MenuItem[];
}

export class MenuItem {
  id: string;
  isEnabled: boolean;
  imageUrl: string;
  basePrice: string;
  localizations: {
    [key: string]: {
      name: string;
      description: string;
    };
  };
  optionGroups: OptionGroup[];
}

export class OptionGroup {
  isEnabled: boolean;
  imageUrl: string;
  minRequiredSelections: number;
  maxAllowedSeelections: number;
  localizations: {
    [key: string]: {
      name: string;
      description: string;
    };
  };
  items: OptionItem[];
}

export class OptionItem {
  isEnabled: boolean;
  price: string;
  localizations: {
    [key: string]: {
      name: string;
      description: string;
    };
  };
}
