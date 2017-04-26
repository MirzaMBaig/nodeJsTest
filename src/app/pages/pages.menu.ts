export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'pages',
        data: {
          menu: {
            title: 'Catalog',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Category',
                selected: false,
                expanded: false,
              }
            }
          },
          {
            path: ['productDetail'],
            data: {
              menu: {
                title: 'Product'
              }
            }
          },
          {
            path: ['productOptionsTable'],
            data: {
              menu: {
                title: 'Product Options',
                selected: false,
                expanded: false,
              }
            }
          }
        ]
      }
    ]
  }
];
