import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiResult } from '../../../core/models/http/http.model';

@Injectable({
  providedIn: 'root',
})
export class CafeService {
  constructor(private http: HttpClient) {}

  fetchSiteData(resturantCode: string): Observable<ApiResult> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('ResturantCode', resturantCode);
    // return this.http.get<ApiResult>(`${environment.apiUrl}/site/getSiteBySiteCode`,{params:queryParams});

    return of({
      isSuccessResponse: true,
      message: '',
      data: this.sampleSiteData,
    });
  }

  fetchMenuData(resturantId: string): Observable<ApiResult> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('ResturantId', resturantId);
    // return this.http.get<ApiResult>(`${environment.apiUrl}/menu/getMenuBySiteId`,{params:queryParams});
    return of({
      isSuccessResponse: true,
      message: '',
      data: this.sampleMenuData
    });
  }

  sampleSiteData: any = {
    entityType: 'website.customization',
    entitySchemaVersion: 1,
    entity: {
      isEnabled: true,
      organizationId: 'FTlN0Sia2kmSMvUo/JFqXw==',
      displayName: 'The Block Cafe',
      shortCode: 'CAFENAME',
      isSingleLocation: true,
      socialUrlFormats: {
        // NOTE 1: the interpolated variables in the following strings should all be url escaped (i.e. let escapedVenueId = encodeURIComponent(venueId); )
        // NOTE 2: while the strings are provided in a format that resembles a template literal, they are string literals and will need to be processed using String.replace e.g.
        //          let interpolatedString = stringFromAPI.replace("${escapedAccountName}", escapedAccountName).replace("${escapedVenueId}", escapedVenueId);
        // NOTE 3: you can assume that the property names of instagram, facebook, etc will be exactly the same as the name of the social type (further down in the venue specific fields)
        instagram: {
          main: 'https://instagram.com/${escapedAccountName}',
          qr: 'https://menus.swiftserve.me/system/assets/social/${escapedVenueId}-ig-qr.png',
        },
        facebook: {
          main: 'https://facebook.com/${escapedAccountName}',
          qr: 'https://menus.swiftserve.me/system/assets/social/${escapedVenueId}-fb-qr.png',
        },
        twitter: {
          main: 'https://twitter.com/${escapedAccountName}',
          qr: 'https://menus.swiftserve.me/system/assets/social/${escapedVenueId}-tw-qr.png',
        },
        linkedin: {
          main: 'https://linkedin.com/company/${escapedAccountName}',
          qr: 'https://menus.swiftserve.me/system/assets/social/${escapedVenueId}-li-qr.png',
        },
      },
      themeId: 'TheBlock-v0-1',
      venues: [
        {
          displayName: 'Blockhouse Bay',
          venueId: 'ehgWYAHKLUuwb+McWF8k6w==',
          openingHours: [
            {
              type: 'daysAndHours',
              sortValue: 1,
              daysOfWeekText: 'Mon - Fri',
              hoursText: '6:30am - 8:30pm',
            },
            {
              type: 'daysAndHours',
              sortValue: 2,
              daysOfWeekText: 'Sat',
              hoursText: '6:30am - late',
            },
            {
              type: 'daysAndHours',
              sortValue: 3,
              daysOfWeekText: 'Sun',
              hoursText: 'Closed',
            },
            {
              type: 'customText',
              sortValue: 4,
              text: 'Closed on Fri the 25th.',
            },
          ],
          address: [
            {
              type: 'addressLine',
              sortValue: 1,
              text: '405 Blockhouse Bay Rd',
            },
            {
              type: 'addressLine',
              sortValue: 2,
              text: 'Blockhouse Bay',
            },
          ],
          socials: [
            {
              type: 'instagram',
              accountName: 'theblockcafe',
            },
            {
              type: 'facebook',
              accountName: 'theblockcafe',
            },
            {
              type: 'twitter',
              accountName: 'theblockcafe',
            },
            {
              type: 'linkedin',
              accountName: 'theblockcafe',
            },
          ],
        },
      ],
    },
  };

  sampleMenuData: any = {
    entityType: 'menu',
    entity: {
      isEnabled: true,
      organizationId: 'FTlN0Sia2kmSMvUo/JFqXw==',
      locationId: '',
      menuId: 'bJ4moaclUUWZN2iFb87sCg==',
      publishedVersionId: 'TrjIx0NqOE61vvmZllw1UA==',
      draftVersionId: 'wOgwB4ae70CTXSbYezrJKg==',
      publishedVersion: {
        id: 'MV#bJ4moaclUUWZN2iFb87sCg==#TrjIx0NqOE61vvmZllw1UA==#',
        imageUrl: '/something/something/menu-image.png',
        localizations: {
          'H4UElElrwk6kDAKY1NaAWw==': {
            name: 'Spring Menu 2023',
          },
        },
        categories: [
          {
            id: 'MV#bJ4moaclUUWZN2iFb87sCg==#TrjIx0NqOE61vvmZllw1UA==#C#RPnQqyKS2Eyln4lQudFAcQ==#',
            isEnabled: true,
            imageUrl: '/something/something/category-image.png',
            localizations: {
              'H4UElElrwk6kDAKY1NaAWw==': {
                name: 'Burgers',
                description: 'Delicious burgers, comes with fries.',
                availability: '10am till late',
              },
            },
            items: [
              {
                id: 'MV#bJ4moaclUUWZN2iFb87sCg==#TrjIx0NqOE61vvmZllw1UA==#C#RPnQqyKS2Eyln4lQudFAcQ==#I#9ri/C4f5dUukSVxMAavlIw==#',
                isEnabled: true,
                imageUrl: '/assets/images/product_2.webp',
                basePrice: '15.95',
                localizations: {
                  'H4UElElrwk6kDAKY1NaAWw==': {
                    name: 'Ring of Fire',
                    description:
                      'This spicy chicken burger will light up your life... and your ring',
                  },
                },
                optionGroups: [
                  {
                    isEnabled: true,
                    imageUrl: '/something/something/sauces.png',
                    minRequiredSelections: 0,
                    maxAllowedSeelections: 2,
                    localizations: {
                      'H4UElElrwk6kDAKY1NaAWw==': {
                        name: 'Additional Sauces',
                        description: 'Bam it up a notch with extra sauces',
                      },
                    },
                    items: [
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Mayo',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Sweet Chili',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Hot Chili',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Garlic Aioli',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Tzatziki',
                            description: '',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: 'MV#bJ4moaclUUWZN2iFb87sCg==#TrjIx0NqOE61vvmZllw1UA==#C#RPnQqyKS2Eyln4lQudFAcQ==#I#9ri/C4f5dUukSVxMAavlIw==#',
                isEnabled: true,
                imageUrl: '/assets/images/product_2.webp',
                basePrice: '15.95',
                localizations: {
                  'H4UElElrwk6kDAKY1NaAWw==': {
                    name: 'Ring of Fire',
                    description:
                      'This spicy chicken burger will light up your life... and your ring',
                  },
                },
                optionGroups: [
                  {
                    isEnabled: true,
                    imageUrl: '/something/something/sauces.png',
                    minRequiredSelections: 0,
                    maxAllowedSeelections: 2,
                    localizations: {
                      'H4UElElrwk6kDAKY1NaAWw==': {
                        name: 'Additional Sauces',
                        description: 'Bam it up a notch with extra sauces',
                      },
                    },
                    items: [
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Mayo',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Sweet Chili',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Hot Chili',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Garlic Aioli',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Tzatziki',
                            description: '',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: 'MV#bJ4moaclUUWZN2iFb87sCg==#TrjIx0NqOE61vvmZllw1UA==#C#RPnQqyKS2Eyln4lQudFAcQ==#I#9ri/C4f5dUukSVxMAavlIw==#',
                isEnabled: true,
                imageUrl: '/assets/images/product_2.webp',
                basePrice: '15.95',
                localizations: {
                  'H4UElElrwk6kDAKY1NaAWw==': {
                    name: 'Ring of Fire',
                    description:
                      'This spicy chicken burger will light up your life... and your ring',
                  },
                },
                optionGroups: [
                  {
                    isEnabled: true,
                    imageUrl: '/something/something/sauces.png',
                    minRequiredSelections: 0,
                    maxAllowedSeelections: 2,
                    localizations: {
                      'H4UElElrwk6kDAKY1NaAWw==': {
                        name: 'Additional Sauces',
                        description: 'Bam it up a notch with extra sauces',
                      },
                    },
                    items: [
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Mayo',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Sweet Chili',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Hot Chili',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Garlic Aioli',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Tzatziki',
                            description: '',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: 'MV#bJ4moaclUUWZN2iFb87sCg==#TrjIx0NqOE61vvmZllw1UA==#C#RPnQqyKS2Eyln4lQudFAcQ==#I#9ri/C4f5dUukSVxMAavlIw==#',
                isEnabled: true,
                imageUrl: '/assets/images/product_2.webp',
                basePrice: '15.95',
                localizations: {
                  'H4UElElrwk6kDAKY1NaAWw==': {
                    name: 'Ring of Fire',
                    description:
                      'This spicy chicken burger will light up your life... and your ring',
                  },
                },
                optionGroups: [
                  {
                    isEnabled: true,
                    imageUrl: '/something/something/sauces.png',
                    minRequiredSelections: 0,
                    maxAllowedSeelections: 2,
                    localizations: {
                      'H4UElElrwk6kDAKY1NaAWw==': {
                        name: 'Additional Sauces',
                        description: 'Bam it up a notch with extra sauces',
                      },
                    },
                    items: [
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Mayo',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Sweet Chili',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Hot Chili',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Garlic Aioli',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Tzatziki',
                            description: '',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'GfjJ4moaclUUWZN2iFb87sCg==#TrjIx0NqOE61vvmZllw1UA==#C#RPnQqyKS2Eyln4lQudFAcQ==#',
            isEnabled: true,
            imageUrl: '/something/something/category-image.png',
            localizations: {
              'H4UElElrwk6kDAKY1NaAWw==': {
                name: 'Coffee',
                description: 'Tasty Cappuccino',
                availability: '10am till late',
              },
            },
            items: [
              {
                id: 'MV#bJ4moaclUUWZN2iFb87sCg==#TrjIx0NqOE61vvmZllw1UA==#C#RPnQqyKS2Eyln4lQudFAcQ==#I#9ri/C4f5dUukSVxMAavlIw==#',
                isEnabled: true,
                imageUrl: '/assets/images/product_1.webp',
                basePrice: '15.95',
                localizations: {
                  'H4UElElrwk6kDAKY1NaAWw==': {
                    name: 'Cappuccino',
                    description:
                      'This spicy chicken burger will light up your life... and your ring',
                  },
                },
                optionGroups: [
                  {
                    isEnabled: true,
                    imageUrl: '/something/something/sauces.png',
                    minRequiredSelections: 0,
                    maxAllowedSeelections: 2,
                    localizations: {
                      'H4UElElrwk6kDAKY1NaAWw==': {
                        name: 'Additional Sauces',
                        description: 'Bam it up a notch with extra sauces',
                      },
                    },
                    items: [
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Mayo',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Sweet Chili',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Hot Chili',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Garlic Aioli',
                            description: '',
                          },
                        },
                      },
                      {
                        isEnabled: true,
                        price: '2.00',
                        localizations: {
                          'H4UElElrwk6kDAKY1NaAWw==': {
                            name: 'Tzatziki',
                            description: '',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  };
}

