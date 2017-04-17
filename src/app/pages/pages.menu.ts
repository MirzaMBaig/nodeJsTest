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

          // {
          //   path: ['new'],  // path for our page
          //   data: { // custom menu declaration
          //     menu: {
          //       title: 'New Page', // menu title
          //       icon: 'ion-android-home', // menu icon
          //       pathMatch: 'prefix', // use it if item children not displayed in menu
          //       selected: false,
          //       expanded: false,
          //       order: 0
          //     }
          //   }
          // },
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Category'
              }
            }
          },
          {
            path: ['/register'],
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
                title: 'Product Options'
              }
            }
          }
        ]
      }
    ]
  }
];
