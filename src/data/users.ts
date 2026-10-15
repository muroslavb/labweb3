import type { User } from '@/types/user'

export const users: User[] = [
  {
    "id": 1,
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Emma",
      "last": "Lampi"
    },
    "location": {
      "street": {
        "number": 2304,
        "name": "Siilitie"
      },
      "city": "Hausjärvi",
      "state": "Uusimaa",
      "country": "Finland",
      "postcode": 98555,
      "timezone": {
        "offset": "+8:00",
        "description": "Beijing, Perth, Singapore, Hong Kong"
      }
    },
    "email": "emma.lampi@example.com",
    "dob": {
      "date": "2001-03-08T01:39:19.084Z",
      "age": 25
    },
    "phone": "02-689-410",
    "cell": "043-730-12-94",
    "picture": "/users/1.svg",
    "hobbies": [
      "Travel",
      "Photography",
      "Hiking",
      "Reading",
      "Cooking",
      "Music"
    ],
    "details": "Любить довгі мандрівки та знімає плівкову фотографію."
  },
  {
    "id": 2,
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Liam",
      "last": "Korhonen"
    },
    "location": {
      "street": {
        "number": 12,
        "name": "Mannerheimintie"
      },
      "city": "Helsinki",
      "state": "Uusimaa",
      "country": "Finland",
      "postcode": 10100,
      "timezone": {
        "offset": "+2:00",
        "description": "Kyiv, Helsinki, Riga"
      }
    },
    "email": "liam.korhonen@example.com",
    "dob": {
      "date": "2010-05-14T10:00:00.000Z",
      "age": 16
    },
    "phone": "09-123-456",
    "cell": "045-111-22-33",
    "picture": "/users/2.svg",
    "hobbies": [
      "Gaming",
      "Football",
      "Drawing"
    ],
    "details": "Школяр, грає у шкільній футбольній команді."
  },
  {
    "id": 3,
    "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Olivia",
      "last": "Martin"
    },
    "location": {
      "street": {
        "number": 88,
        "name": "Rue de Rivoli"
      },
      "city": "Lyon",
      "state": "Auvergne-Rhône-Alpes",
      "country": "France",
      "postcode": 69001,
      "timezone": {
        "offset": "+2:00",
        "description": "Kyiv, Helsinki, Riga"
      }
    },
    "email": "olivia.martin@example.com",
    "dob": {
      "date": "1992-07-21T08:30:00.000Z",
      "age": 34
    },
    "phone": "04-72-00-11",
    "cell": "06-12-34-56-78",
    "picture": "/users/3.svg",
    "hobbies": [
      "Yoga",
      "Painting",
      "Cooking"
    ],
    "details": "Графічна дизайнерка, веде кулінарний блог."
  },
  {
    "id": 4,
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Noah",
      "last": "Schmidt"
    },
    "location": {
      "street": {
        "number": 5,
        "name": "Hauptstraße"
      },
      "city": "Leipzig",
      "state": "Saxony",
      "country": "Germany",
      "postcode": 4109,
      "timezone": {
        "offset": "+2:00",
        "description": "Kyiv, Helsinki, Riga"
      }
    },
    "email": "noah.schmidt@example.com",
    "dob": {
      "date": "1974-03-02T12:00:00.000Z",
      "age": 52
    },
    "phone": "0341-555-01",
    "cell": "0171-555-0102",
    "picture": "/users/4.svg",
    "hobbies": [
      "Cycling",
      "Chess",
      "Woodworking"
    ],
    "details": "Інженер, у вихідні майструє меблі."
  },
  {
    "id": 5,
    "gender": "female",
    "name": {
      "title": "Miss",
      "first": "Sofia",
      "last": "Rossi"
    },
    "location": {
      "street": {
        "number": 41,
        "name": "Via Roma"
      },
      "city": "Turin",
      "state": "Piedmont",
      "country": "Italy",
      "postcode": 10121,
      "timezone": {
        "offset": "+2:00",
        "description": "Kyiv, Helsinki, Riga"
      }
    },
    "email": "sofia.rossi@example.com",
    "dob": {
      "date": "1997-09-09T09:09:00.000Z",
      "age": 29
    },
    "phone": "011-555-0199",
    "cell": "333-555-0100",
    "picture": "/users/5.svg",
    "hobbies": [
      "Dancing",
      "Travel",
      "Languages"
    ],
    "details": "Перекладачка, вивчає українську."
  },
  {
    "id": 6,
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Oleksandr",
      "last": "Melnyk"
    },
    "location": {
      "street": {
        "number": 7,
        "name": "Holovna St"
      },
      "city": "Chernivtsi",
      "state": "Chernivtsi Oblast",
      "country": "Ukraine",
      "postcode": 58000,
      "timezone": {
        "offset": "+2:00",
        "description": "Kyiv, Helsinki, Riga"
      }
    },
    "email": "oleksandr.melnyk@example.com",
    "dob": {
      "date": "1985-06-30T07:15:00.000Z",
      "age": 41
    },
    "phone": "0372-55-01-02",
    "cell": "050-555-01-02",
    "picture": "/users/6.svg",
    "hobbies": [
      "Hiking",
      "Photography",
      "Music"
    ],
    "details": "Бекенд-розробник, любить Карпати."
  },
  {
    "id": 7,
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Hanna",
      "last": "Kovalenko"
    },
    "location": {
      "street": {
        "number": 19,
        "name": "Soborna St"
      },
      "city": "Lviv",
      "state": "Lviv Oblast",
      "country": "Ukraine",
      "postcode": 79000,
      "timezone": {
        "offset": "+2:00",
        "description": "Kyiv, Helsinki, Riga"
      }
    },
    "email": "hanna.kovalenko@example.com",
    "dob": {
      "date": "1968-04-11T06:00:00.000Z",
      "age": 58
    },
    "phone": "032-255-01-03",
    "cell": "067-555-01-03",
    "picture": "/users/7.svg",
    "hobbies": [
      "Gardening",
      "Reading",
      "Knitting"
    ],
    "details": "Викладачка літератури на пенсії."
  },
  {
    "id": 8,
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Lucas",
      "last": "Dubois"
    },
    "location": {
      "street": {
        "number": 23,
        "name": "Avenue Foch"
      },
      "city": "Paris",
      "state": "Île-de-France",
      "country": "France",
      "postcode": 75016,
      "timezone": {
        "offset": "+2:00",
        "description": "Kyiv, Helsinki, Riga"
      }
    },
    "email": "lucas.dubois@example.com",
    "dob": {
      "date": "2003-08-17T11:00:00.000Z",
      "age": 23
    },
    "phone": "01-45-55-01",
    "cell": "06-98-76-54-32",
    "picture": "/users/8.svg",
    "hobbies": [
      "Surfing",
      "Music",
      "Cinema"
    ],
    "details": "Студент-кінознавець, грає на гітарі."
  },
  {
    "id": 9,
    "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Mia",
      "last": "Svensson"
    },
    "location": {
      "street": {
        "number": 3,
        "name": "Storgatan"
      },
      "city": "Malmö",
      "state": "Skåne",
      "country": "Sweden",
      "postcode": 21122,
      "timezone": {
        "offset": "+2:00",
        "description": "Kyiv, Helsinki, Riga"
      }
    },
    "email": "mia.svensson@example.com",
    "dob": {
      "date": "1981-05-25T05:45:00.000Z",
      "age": 45
    },
    "phone": "040-555-01",
    "cell": "070-555-01-04",
    "picture": "/users/9.svg",
    "hobbies": [
      "Running",
      "Baking",
      "Board games"
    ],
    "details": "Менеджерка проєктів, бігає марафони."
  },
  {
    "id": 10,
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Daniel",
      "last": "Novak"
    },
    "location": {
      "street": {
        "number": 61,
        "name": "Vodičkova"
      },
      "city": "Prague",
      "state": "Prague",
      "country": "Czechia",
      "postcode": 11000,
      "timezone": {
        "offset": "+2:00",
        "description": "Kyiv, Helsinki, Riga"
      }
    },
    "email": "daniel.novak@example.com",
    "dob": {
      "date": "1959-03-19T04:20:00.000Z",
      "age": 67
    },
    "phone": "222-555-010",
    "cell": "602-555-010",
    "picture": "/users/10.svg",
    "hobbies": [
      "Fishing",
      "History",
      "Gardening"
    ],
    "details": "Колишній пілот, збирає історичні мапи."
  }
]
