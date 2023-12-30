export class OpeningHours {
  type: 'daysAndHours' | 'customText';
  sortValue: number;
  daysOfWeekText?: string;
  hoursText?: string;
  text?: string;
}

export class Address {
  type: 'addressLine';
  sortValue: number;
  text: string;
}

export class Social {
  type: 'instagram' | 'facebook' | 'twitter' | 'linkedin';
  accountName: string;
}

export class Venue {
  displayName: string;
  venueId: string;
  openingHours: OpeningHours[];
  address: Address[];
  socials: Social[];
}

export class Cafe {
    isEnabled: boolean;
    organizationId: string;
    displayName: string;
    shortCode: string;
    isSingleLocation: boolean;
    socialUrlFormats: {
      instagram: {
        main: string;
        qr: string;
      };
      facebook: {
        main: string;
        qr: string;
      };
      twitter: {
        main: string;
        qr: string;
      };
      linkedin: {
        main: string;
        qr: string;
      };
    };
    themeId: string;
    venues: Venue[];
  };