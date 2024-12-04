
const fs = require('fs')
const filmsKinopoisk = {
  "Film:535341": {
    "__typename": "Film",
    "id": 535341,
    "contentId": "4127663ed234fa8584aeb969ceb02cd8",
    "title": {
      "__typename": "Title",
      "russian": "1+1",
      "original": "Intouchables"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 8,
        "name": "Франция"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:6"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Philippe",
          "person": {
            "__typename": "Person",
            "name": "Франсуа Клюзе",
            "originalName": "François Cluzet"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Driss",
          "person": {
            "__typename": "Person",
            "name": "Омар Си",
            "originalName": "Omar Sy"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Yvonne",
          "person": {
            "__typename": "Person",
            "name": "Анн Ле Ни",
            "originalName": "Anne Le Ny"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Оливье Накаш",
            "originalName": "Olivier Nakache"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/535341/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.84,
        "isActive": true,
        "count": 2338378
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 62802,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2012-04-26",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2011-09-23",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2012-04-26",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2011,
    "duration": 112,
    "isShortFilm": false,
    "top250": 1
  },

  "Film:258687": {
    "__typename": "Film",
    "id": 258687,
    "contentId": "4b6323adfb04e652a9b88f6096d01ae9",
    "title": {
      "__typename": "Title",
      "russian": "Интерстеллар",
      "original": "Interstellar"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      },
      {
        "__typename": "Country",
        "id": 6,
        "name": "Канада"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:2"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:10"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Cooper",
          "person": {
            "__typename": "Person",
            "name": "Мэттью Макконахи",
            "originalName": "Matthew McConaughey"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Brand",
          "person": {
            "__typename": "Person",
            "name": "Энн Хэтэуэй",
            "originalName": "Anne Hathaway"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Murph",
          "person": {
            "__typename": "Person",
            "name": "Джессика Честейн",
            "originalName": "Jessica Chastain"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Кристофер Нолан",
            "originalName": "Christopher Nolan"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/258687/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.647,
        "isActive": true,
        "count": 1016176
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 100619,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2014-11-06",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2014-10-26",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2014-11-06",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2014,
    "duration": 169,
    "isShortFilm": false,
    "top250": 2
  },
  "Film:326": {
    "__typename": "Film",
    "id": 326,
    "contentId": "49bf154f0dea2d53b169846a284469cd",
    "title": {
      "__typename": "Title",
      "russian": "Побег из Шоушенка",
      "original": "The Shawshank Redemption"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Andy Dufresne",
          "person": {
            "__typename": "Person",
            "name": "Тим Роббинс",
            "originalName": "Tim Robbins"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Ellis Boyd 'Red' Redding",
          "person": {
            "__typename": "Person",
            "name": "Морган Фриман",
            "originalName": "Morgan Freeman"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Warden Norton",
          "person": {
            "__typename": "Person",
            "name": "Боб Гантон",
            "originalName": "Bob Gunton"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Фрэнк Дарабонт",
            "originalName": "Frank Darabont"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/326/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 9.109,
        "isActive": true,
        "count": 1053029
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 12799,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2019-10-24",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1994-09-10",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2019-10-24",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1994,
    "duration": 142,
    "isShortFilm": false,
    "top250": 3
  },

  "Film:435": {
    "__typename": "Film",
    "id": 435,
    "contentId": "42e511a460839b298d96effd8de60c68",
    "title": {
      "__typename": "Title",
      "russian": "Зеленая миля",
      "original": "The Green Mile"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:5"
      },
      {
        "__ref": "Genre:16"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Paul Edgecomb",
          "person": {
            "__typename": "Person",
            "name": "Том Хэнкс",
            "originalName": "Tom Hanks"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Brutus 'Brutal' Howell",
          "person": {
            "__typename": "Person",
            "name": "Дэвид Морс",
            "originalName": "David Morse"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Jan Edgecomb",
          "person": {
            "__typename": "Person",
            "name": "Бонни Хант",
            "originalName": "Bonnie Hunt"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Фрэнк Дарабонт",
            "originalName": "Frank Darabont"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/435/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 9.076,
        "isActive": true,
        "count": 1014193
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 13494,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2000-04-18",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1999-12-06",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2000-04-18",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1999,
    "duration": 189,
    "isShortFilm": false,
    "top250": 4
  },

  "Film:397667": {
    "__typename": "Film",
    "id": 397667,
    "contentId": "443c9a2dee446db0b8d3a6d7f930528e",
    "title": {
      "__typename": "Title",
      "russian": "Остров проклятых",
      "original": "Shutter Island"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/4303601/617303b7-cfa7-4273-bd1d-63974bf68927"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:4"
      },
      {
        "__ref": "Genre:17"
      },
      {
        "__ref": "Genre:8"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Teddy Daniels",
          "person": {
            "__typename": "Person",
            "name": "Леонардо ДиКаприо",
            "originalName": "Leonardo DiCaprio"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Chuck Aule",
          "person": {
            "__typename": "Person",
            "name": "Марк Руффало",
            "originalName": "Mark Ruffalo"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Dr. Cawley",
          "person": {
            "__typename": "Person",
            "name": "Бен Кингсли",
            "originalName": "Ben Kingsley"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Мартин Скорсезе",
            "originalName": "Martin Scorsese"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/397667/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.54,
        "isActive": true,
        "count": 1115448
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 174789,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2010-02-18",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2010-02-13",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2010-02-18",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2009,
    "duration": 138,
    "isShortFilm": false,
    "top250": 5
  },
  "Film:361": {
    "__typename": "Film",
    "id": 361,
    "contentId": "44f2da0d8ace7b0ab1889e03a6a52d37",
    "title": {
      "__typename": "Title",
      "russian": "Бойцовский клуб",
      "original": "Fight Club"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/4716873/85b585ea-410f-4d1c-aaa5-8d242756c2a4"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 3,
        "name": "Германия"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:4"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:16"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "рассказчик",
          "person": {
            "__typename": "Person",
            "name": "Эдвард Нортон",
            "originalName": "Edward Norton"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Tyler Durden",
          "person": {
            "__typename": "Person",
            "name": "Брэд Питт",
            "originalName": "Brad Pitt"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Marla Singer",
          "person": {
            "__typename": "Person",
            "name": "Хелена Бонем Картер",
            "originalName": "Helena Bonham Carter"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Дэвид Финчер",
            "originalName": "David Fincher"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/361/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.672,
        "isActive": true,
        "count": 1093138
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 13830,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2000-01-13",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1999-09-10",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2000-01-13",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1999,
    "duration": 139,
    "isShortFilm": false,
    "top250": 6
  },

  "Film:448": {
    "__typename": "Film",
    "id": 448,
    "contentId": "46a0706f3a37eb52b933f510ae5c7d21",
    "title": {
      "__typename": "Title",
      "russian": "Форрест Гамп",
      "original": "Forrest Gump"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:7"
      },
      {
        "__ref": "Genre:23"
      },
      {
        "__ref": "Genre:19"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Forrest Gump",
          "person": {
            "__typename": "Person",
            "name": "Том Хэнкс",
            "originalName": "Tom Hanks"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Jenny Curran",
          "person": {
            "__typename": "Person",
            "name": "Робин Райт",
            "originalName": "Robin Wright"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Mrs. Gump",
          "person": {
            "__typename": "Person",
            "name": "Салли Филд",
            "originalName": "Sally Field"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Роберт Земекис",
            "originalName": "Robert Zemeckis"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/448/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.921,
        "isActive": true,
        "count": 930865
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 9824,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2020-02-13",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1994-06-23",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2020-02-13",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1994,
    "duration": 142,
    "isShortFilm": false,
    "top250": 7
  },

  "Film:3498": {
    "__typename": "Film",
    "id": 3498,
    "contentId": "469dd100cdfca80d94219646f6731e78",
    "title": {
      "__typename": "Title",
      "russian": "Властелин колец: Возвращение короля",
      "original": "The Lord of the Rings: The Return of the King"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/4303601/e410c71f-baa1-4fe5-bb29-aedb4662f49b"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 35,
        "name": "Новая Зеландия"
      },
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:5"
      },
      {
        "__ref": "Genre:10"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:3"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Frodo",
          "person": {
            "__typename": "Person",
            "name": "Элайджа Вуд",
            "originalName": "Elijah Wood"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Aragorn",
          "person": {
            "__typename": "Person",
            "name": "Вигго Мортенсен",
            "originalName": "Viggo Mortensen"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Sam",
          "person": {
            "__typename": "Person",
            "name": "Шон Эстин",
            "originalName": "Sean Astin"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Питер Джексон",
            "originalName": "Peter Jackson"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/3498/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.67,
        "isActive": true,
        "count": 608546
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 41444,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2004-01-22",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2003-12-01",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2004-01-22",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2003,
    "duration": 201,
    "isShortFilm": false,
    "top250": 8
  },

  "Film:370": {
    "__typename": "Film",
    "id": 370,
    "contentId": "4726854ee2be6d928a2d852281fa18f9",
    "title": {
      "__typename": "Title",
      "russian": "Унесённые призраками",
      "original": "Sen to Chihiro no kamikakushi"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/10812607/ee04f3d4-6e87-4b34-93f8-95b4f33954a5"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 9,
        "name": "Япония"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:1750"
      },
      {
        "__ref": "Genre:14"
      },
      {
        "__ref": "Genre:5"
      },
      {
        "__ref": "Genre:10"
      },
      {
        "__ref": "Genre:11"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Chihiro Ogino / Sen, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Руми Хиираги",
            "originalName": "Rumi Hiiragi"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Haku, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Мию Ирино",
            "originalName": "Miyu Irino"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Yubaba / Zeniba, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Мари Нацуки",
            "originalName": "Mari Natsuki"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Хаяо Миядзаки",
            "originalName": "Hayao Miyazaki"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/370/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.532,
        "isActive": true,
        "count": 651082
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 198242,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2002-12-31",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2001-07-20",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2002-12-31",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2001,
    "duration": 124,
    "isShortFilm": false,
    "top250": 9
  },
  "Film:328": {
    "__typename": "Film",
    "id": 328,
    "contentId": "4b1c140be7efc668a518bb8718ba159f",
    "title": {
      "__typename": "Title",
      "russian": "Властелин колец: Братство Кольца",
      "original": "The Lord of the Rings: The Fellowship of the Ring"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/6201401/a2d5bcae-a1a9-442f-8195-f5373a5ba77f"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 35,
        "name": "Новая Зеландия"
      },
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:5"
      },
      {
        "__ref": "Genre:10"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:3"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Frodo",
          "person": {
            "__typename": "Person",
            "name": "Элайджа Вуд",
            "originalName": "Elijah Wood"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Gandalf",
          "person": {
            "__typename": "Person",
            "name": "Иэн Маккеллен",
            "originalName": "Ian McKellen"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Sam",
          "person": {
            "__typename": "Person",
            "name": "Шон Эстин",
            "originalName": "Sean Astin"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Питер Джексон",
            "originalName": "Peter Jackson"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/328/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.617,
        "isActive": true,
        "count": 684223
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 173773,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2002-02-07",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2001-12-10",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2002-02-07",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2001,
    "duration": 178,
    "isShortFilm": false,
    "top250": 10
  },
  "Film:1143242": {
    "__typename": "Film",
    "id": 1143242,
    "contentId": "47649cf90de74aca8da7eb5b17fc8a8a",
    "title": {
      "__typename": "Title",
      "russian": "Джентльмены",
      "original": "The Gentlemen"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:16"
      },
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:3"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Michael Pearson",
          "person": {
            "__typename": "Person",
            "name": "Мэттью Макконахи",
            "originalName": "Matthew McConaughey"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Ray",
          "person": {
            "__typename": "Person",
            "name": "Чарли Ханнэм",
            "originalName": "Charlie Hunnam"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Dry Eye",
          "person": {
            "__typename": "Person",
            "name": "Генри Голдинг",
            "originalName": "Henry Golding"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Гай Ричи",
            "originalName": "Guy Ritchie"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/1143242/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.61,
        "isActive": true,
        "count": 2040497
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 163500,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2020-02-13",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2019-12-03",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2020-02-13",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2019,
    "duration": 113,
    "isShortFilm": false,
    "top250": 11
  },
  "Film:389": {
    "__typename": "Film",
    "id": 389,
    "contentId": "72f1f473e29a4442aade016a3b8036d5",
    "title": {
      "__typename": "Title",
      "russian": "Леон",
      "original": "Léon"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8662d92a-5881-4600-a7ae-549e6fd53b03"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 8,
        "name": "Франция"
      },
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:3"
      },
      {
        "__ref": "Genre:4"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:16"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Leon",
          "person": {
            "__typename": "Person",
            "name": "Жан Рено",
            "originalName": "Jean Reno"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Mathilda",
          "person": {
            "__typename": "Person",
            "name": "Натали Портман",
            "originalName": "Natalie Portman"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Stansfield",
          "person": {
            "__typename": "Person",
            "name": "Гари Олдман",
            "originalName": "Gary Oldman"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Люк Бессон",
            "originalName": "Luc Besson"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/389/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.674,
        "isActive": true,
        "count": 842836
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 12346,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1995-02-27",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1994-09-14",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1995-02-27",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1994,
    "duration": 133,
    "isShortFilm": false,
    "top250": 12
  },
  "Film:444": {
    "__typename": "Film",
    "id": 444,
    "contentId": "490d0db81856de5cab659f678081db27",
    "title": {
      "__typename": "Title",
      "russian": "Терминатор 2: Судный день",
      "original": "Terminator 2: Judgment Day"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1704946/ade65029-952f-488d-87b2-20c676970151"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:2"
      },
      {
        "__ref": "Genre:3"
      },
      {
        "__ref": "Genre:4"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "The Terminator",
          "person": {
            "__typename": "Person",
            "name": "Арнольд Шварценеггер",
            "originalName": "Arnold Schwarzenegger"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Sarah Connor",
          "person": {
            "__typename": "Person",
            "name": "Линда Хэмилтон",
            "originalName": "Linda Hamilton"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "John Connor",
          "person": {
            "__typename": "Person",
            "name": "Эдвард Ферлонг",
            "originalName": "Edward Furlong"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Джеймс Кэмерон",
            "originalName": "James Cameron"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/444/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.382,
        "isActive": true,
        "count": 639916
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 141591,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1994-07-11",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1991-07-01",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1994-07-11",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1991,
    "duration": 137,
    "isShortFilm": false,
    "top250": 13
  },
  "Film:312": {
    "__typename": "Film",
    "id": 312,
    "contentId": "4edfc8baf73a662bbcff2aee028c3e5f",
    "title": {
      "__typename": "Title",
      "russian": "Властелин колец: Две крепости",
      "original": "The Lord of the Rings: The Two Towers"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/6201401/772093e4-7f68-49aa-a805-d654693aee26"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 35,
        "name": "Новая Зеландия"
      },
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:5"
      },
      {
        "__ref": "Genre:10"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:3"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Frodo",
          "person": {
            "__typename": "Person",
            "name": "Элайджа Вуд",
            "originalName": "Elijah Wood"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Gandalf",
          "person": {
            "__typename": "Person",
            "name": "Иэн Маккеллен",
            "originalName": "Ian McKellen"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Aragorn",
          "person": {
            "__typename": "Person",
            "name": "Вигго Мортенсен",
            "originalName": "Viggo Mortensen"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Питер Джексон",
            "originalName": "Peter Jackson"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/312/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.613,
        "isActive": true,
        "count": 593606
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 67117,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2003-01-22",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2002-12-05",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2003-01-22",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2002,
    "duration": 179,
    "isShortFilm": false,
    "top250": 14
  },
  "Film:447301": {
    "__typename": "Film",
    "id": 447301,
    "contentId": "42d5ba8f195451fda78fe0ce899a964a",
    "title": {
      "__typename": "Title",
      "russian": "Начало",
      "original": "Inception"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1629390/8ab9a119-dd74-44f0-baec-0629797483d7"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:2"
      },
      {
        "__ref": "Genre:3"
      },
      {
        "__ref": "Genre:4"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:17"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Cobb",
          "person": {
            "__typename": "Person",
            "name": "Леонардо ДиКаприо",
            "originalName": "Leonardo DiCaprio"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Arthur",
          "person": {
            "__typename": "Person",
            "name": "Джозеф Гордон-Левитт",
            "originalName": "Joseph Gordon-Levitt"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Ariadne (в титрах: Ellen Page)",
          "person": {
            "__typename": "Person",
            "name": "Эллиот Пейдж",
            "originalName": "Elliot Page"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Кристофер Нолан",
            "originalName": "Christopher Nolan"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/447301/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.667,
        "isActive": true,
        "count": 1011619
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 29893,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2010-07-22",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2010-07-08",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2010-07-22",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2010,
    "duration": 148,
    "isShortFilm": false,
    "top250": 15
  },
  "Film:32898": {
    "__typename": "Film",
    "id": 32898,
    "contentId": "4261bfa5447761298397bd57fe0341fb",
    "title": {
      "__typename": "Title",
      "russian": "Достучаться до небес",
      "original": "Knockin' on Heaven's Door"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/4483445/df6c9527-c2cb-4a17-b4bd-1ed05d2e733d"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 3,
        "name": "Германия"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:16"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Martin Brest",
          "person": {
            "__typename": "Person",
            "name": "Тиль Швайгер",
            "originalName": "Til Schweiger"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Rudi Wurlitzer",
          "person": {
            "__typename": "Person",
            "name": "Ян Йозеф Лиферс",
            "originalName": "Jan Josef Liefers"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Henk - der Belgier",
          "person": {
            "__typename": "Person",
            "name": "Тьерри Ван Вервеке",
            "originalName": "Thierry Van Werveke"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Томас Ян",
            "originalName": "Thomas Jahn"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/32898/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.644,
        "isActive": true,
        "count": 787076
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 182150,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1997-11-01",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1997-02-20",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1997-11-01",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1997,
    "duration": 87,
    "isShortFilm": false,
    "top250": 16
  },

  "Film:1108577": {
    "__typename": "Film",
    "id": 1108577,
    "contentId": "436bd5d28aa8fdfca558e95fb58993fe",
    "title": {
      "__typename": "Title",
      "russian": "Зеленая книга",
      "original": "Green Book"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/4b27e219-a8a5-4d85-9874-57d6016e0837"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 31,
        "name": "Китай"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:22"
      },
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:8"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Tony Lip",
          "person": {
            "__typename": "Person",
            "name": "Вигго Мортенсен",
            "originalName": "Viggo Mortensen"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Dr. Donald Shirley",
          "person": {
            "__typename": "Person",
            "name": "Махершала Али",
            "originalName": "Mahershala Ali"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Dolores",
          "person": {
            "__typename": "Person",
            "name": "Линда Карделлини",
            "originalName": "Linda Cardellini"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Питер Фаррелли",
            "originalName": "Peter Farrelly"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/1108577/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.499,
        "isActive": true,
        "count": 1209993
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 154529,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2019-01-24",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2018-09-11",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2019-01-24",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2018,
    "duration": 130,
    "isShortFilm": false,
    "top250": 17
  },
  "Film:342": {
    "__typename": "Film",
    "id": 342,
    "contentId": "45e8f29f25fe31a59be88301baa5caa1",
    "title": {
      "__typename": "Title",
      "russian": "Криминальное чтиво",
      "original": "Pulp Fiction"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:16"
      },
      {
        "__ref": "Genre:8"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Vincent Vega",
          "person": {
            "__typename": "Person",
            "name": "Джон Траволта",
            "originalName": "John Travolta"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Jules Winnfield",
          "person": {
            "__typename": "Person",
            "name": "Сэмюэл Л. Джексон",
            "originalName": "Samuel L. Jackson"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Butch Coolidge",
          "person": {
            "__typename": "Person",
            "name": "Брюс Уиллис",
            "originalName": "Bruce Willis"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Квентин Тарантино",
            "originalName": "Quentin Tarantino"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/342/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.652,
        "isActive": true,
        "count": 799664
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 12597,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1995-09-29",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1994-05-21",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1995-09-29",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1994,
    "duration": 154,
    "isShortFilm": false,
    "top250": 18
  },
  "Film:474": {
    "__typename": "Film",
    "id": 474,
    "contentId": "4964f658870ba92086f5bc1f7d675331",
    "title": {
      "__typename": "Title",
      "russian": "Гладиатор",
      "original": "Gladiator"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/7c3460dc-344d-433f-8220-f18d86c8397d"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      },
      {
        "__typename": "Country",
        "id": 111,
        "name": "Мальта"
      },
      {
        "__typename": "Country",
        "id": 43,
        "name": "Марокко"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:23"
      },
      {
        "__ref": "Genre:3"
      },
      {
        "__ref": "Genre:8"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Maximus",
          "person": {
            "__typename": "Person",
            "name": "Рассел Кроу",
            "originalName": "Russell Crowe"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Commodus",
          "person": {
            "__typename": "Person",
            "name": "Хоакин Феникс",
            "originalName": "Joaquin Phoenix"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Lucilla",
          "person": {
            "__typename": "Person",
            "name": "Конни Нильсен",
            "originalName": "Connie Nielsen"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Ридли Скотт",
            "originalName": "Ridley Scott"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/474/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.586,
        "isActive": true,
        "count": 707330
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 16467,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2000-05-18",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2000-05-01",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2000-05-18",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2000,
    "duration": 155,
    "isShortFilm": false,
    "top250": 19
  },

  "Film:679486": {
    "__typename": "Film",
    "id": 679486,
    "contentId": "49e57db5137c7ed0829715a09db575f6",
    "title": {
      "__typename": "Title",
      "russian": "Тайна Коко",
      "original": "Coco"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1946459/6e11a16e-c9e7-491f-9162-01098a7d8dd9"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 17,
        "name": "Мексика"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:14"
      },
      {
        "__ref": "Genre:5"
      },
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:10"
      },
      {
        "__ref": "Genre:11"
      },
      {
        "__ref": "Genre:21"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Miguel, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Энтони Гонсалес",
            "originalName": "Anthony Gonzalez"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Héctor, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Гаэль Гарсиа Берналь",
            "originalName": "Gael García Bernal"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Ernesto de la Cruz, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Бенджамин Брэтт",
            "originalName": "Benjamin Bratt"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Ли Анкрич",
            "originalName": "Lee Unkrich"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/679486/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.723,
        "isActive": true,
        "count": 747492
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 141641,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2017-11-23",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2017-10-20",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2017-11-23",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2017,
    "duration": 105,
    "isShortFilm": false,
    "top250": 20
  },
  "Film:111543": {
    "__typename": "Film",
    "id": 111543,
    "contentId": "4426da496a131d27a6546e16128f2080",
    "title": {
      "__typename": "Title",
      "russian": "Темный рыцарь",
      "original": "The Dark Knight"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:2"
      },
      {
        "__ref": "Genre:3"
      },
      {
        "__ref": "Genre:4"
      },
      {
        "__ref": "Genre:16"
      },
      {
        "__ref": "Genre:8"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Bruce Wayne / Batman",
          "person": {
            "__typename": "Person",
            "name": "Кристиан Бэйл",
            "originalName": "Christian Bale"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Joker",
          "person": {
            "__typename": "Person",
            "name": "Хит Леджер",
            "originalName": "Heath Ledger"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Harvey Dent",
          "person": {
            "__typename": "Person",
            "name": "Аарон Экхарт",
            "originalName": "Aaron Eckhart"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Кристофер Нолан",
            "originalName": "Christopher Nolan"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/111543/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.529,
        "isActive": true,
        "count": 743964
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 7499,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2008-08-14",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2008-07-14",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2008-08-14",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2008,
    "duration": 152,
    "isShortFilm": false,
    "top250": 21
  },
  "Film:329": {
    "__typename": "Film",
    "id": 329,
    "contentId": "464e95b73e7d1e219ab9fb3783cda8cb",
    "title": {
      "__typename": "Title",
      "russian": "Список Шиндлера",
      "original": "Schindler's List"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/6201401/1e1ac6d9-c658-4f5f-937e-d080bca0d893"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:22"
      },
      {
        "__ref": "Genre:23"
      },
      {
        "__ref": "Genre:19"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Oskar Schindler",
          "person": {
            "__typename": "Person",
            "name": "Лиам Нисон",
            "originalName": "Liam Neeson"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Itzhak Stern",
          "person": {
            "__typename": "Person",
            "name": "Бен Кингсли",
            "originalName": "Ben Kingsley"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Amon Goeth",
          "person": {
            "__typename": "Person",
            "name": "Рэйф Файнс",
            "originalName": "Ralph Fiennes"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Стивен Спилберг",
            "originalName": "Steven Spielberg"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/329/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.848,
        "isActive": true,
        "count": 521619
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 7653,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1994-05-21",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1993-11-30",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1994-05-21",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1993,
    "duration": 195,
    "isShortFilm": false,
    "top250": 22
  },
  "Film:42664": {
    "__typename": "Film",
    "id": 42664,
    "contentId": "490bbf023060c574abeccac74e8ae98b",
    "title": {
      "__typename": "Title",
      "russian": "Иван Васильевич меняет профессию",
      "original": null
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/6201401/a7ef44b8-1983-4992-a889-da6f87a3f559"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 13,
        "name": "СССР"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:2"
      },
      {
        "__ref": "Genre:10"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Александр Тимофеев, инженер-изобретатель",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Александр Демьяненко"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "царь Иван Васильевич Грозный / управдом Иван Васильевич Бунша",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Юрий Яковлев"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Жорж Милославский",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Леонид Куравлёв"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Леонид Гайдай"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/42664/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.789,
        "isActive": true,
        "count": 1089548
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 5120,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": []
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1973-09-17",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2009-06-09",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1973,
    "duration": 88,
    "isShortFilm": false,
    "top250": 23
  },
  "Film:430": {
    "__typename": "Film",
    "id": 430,
    "contentId": "4ad80bb0eadac154a255cbd395e093e9",
    "title": {
      "__typename": "Title",
      "russian": "Шрэк",
      "original": "Shrek"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1946459/7ade06a8-4178-4386-9ee2-87fec5a172eb"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:14"
      },
      {
        "__ref": "Genre:5"
      },
      {
        "__ref": "Genre:7"
      },
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:10"
      },
      {
        "__ref": "Genre:11"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Shrek / Blind Mouse / Opening Narration, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Майк Майерс",
            "originalName": "Mike Myers"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Donkey, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Эдди Мерфи",
            "originalName": "Eddie Murphy"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Princess Fiona, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Кэмерон Диас",
            "originalName": "Cameron Diaz"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Эндрю Адамсон",
            "originalName": "Andrew Adamson"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/430/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.183,
        "isActive": true,
        "count": 860492
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 5436,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2001-10-31",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2001-04-22",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2001-10-31",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2001,
    "duration": 90,
    "isShortFilm": false,
    "top250": 24
  },
  "Film:41519": {
    "__typename": "Film",
    "id": 41519,
    "contentId": "492c446642bf8dc88f0abcb9a4b02f7f",
    "title": {
      "__typename": "Title",
      "russian": "Брат",
      "original": null
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1704946/e9008e2f-433f-43b0-b9b8-2ea8e3fb6c9b"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 2,
        "name": "Россия"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:16"
      },
      {
        "__ref": "Genre:3"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Данила Багров",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Сергей Бодров мл."
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Виктор Сергеевич Багров",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Виктор Сухоруков"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Света",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Светлана Письмиченко"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Алексей Балабанов"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/41519/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.331,
        "isActive": true,
        "count": 1522811
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 62958,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1997-12-12",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1997-05-17",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1997-12-12",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1997,
    "duration": 100,
    "isShortFilm": false,
    "top250": 25
  },
  "Film:41520": {
    "__typename": "Film",
    "id": 41520,
    "contentId": "4e2111b36611a21e87e293af0b7e7ee1",
    "title": {
      "__typename": "Title",
      "russian": "Брат 2",
      "original": null
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1704946/80eab631-346c-4c29-b14d-1fa1438158f9"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 2,
        "name": "Россия"
      },
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:3"
      },
      {
        "__ref": "Genre:16"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Данила",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Сергей Бодров мл."
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Виктор",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Виктор Сухоруков"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Белкин",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Сергей Маковецкий"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Алексей Балабанов"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/41520/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.237,
        "isActive": true,
        "count": 1161673
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 10360,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2000-05-11",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2000-08-30",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2000-05-11",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2000,
    "duration": 127,
    "isShortFilm": false,
    "top250": 26
  },
  "Film:462682": {
    "__typename": "Film",
    "id": 462682,
    "contentId": "4d05a2c799d34ac9bb644af70c8e5dc1",
    "title": {
      "__typename": "Title",
      "russian": "Волк с Уолл-стрит",
      "original": "The Wolf of Wall Street"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1946459/5c758ac0-7a5c-4f00-a94f-1be680a312fb"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:16"
      },
      {
        "__ref": "Genre:22"
      },
      {
        "__ref": "Genre:6"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Jordan Belfort",
          "person": {
            "__typename": "Person",
            "name": "Леонардо ДиКаприо",
            "originalName": "Leonardo DiCaprio"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Donnie Azoff",
          "person": {
            "__typename": "Person",
            "name": "Джона Хилл",
            "originalName": "Jonah Hill"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Naomi Lapaglia",
          "person": {
            "__typename": "Person",
            "name": "Марго Робби",
            "originalName": "Margot Robbie"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Мартин Скорсезе",
            "originalName": "Martin Scorsese"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/462682/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.03,
        "isActive": true,
        "count": 1443128
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 86872,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2014-02-06",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2013-12-09",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2014-02-06",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2013,
    "duration": 180,
    "isShortFilm": false,
    "top250": 27
  },
  "Film:476": {
    "__typename": "Film",
    "id": 476,
    "contentId": "468d3b0de3fd9aeba85fad1010196b86",
    "title": {
      "__typename": "Title",
      "russian": "Назад в будущее",
      "original": "Back to the Future"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:2"
      },
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:10"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Marty McFly",
          "person": {
            "__typename": "Person",
            "name": "Майкл Дж. Фокс",
            "originalName": "Michael J. Fox"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Dr. Emmett Brown",
          "person": {
            "__typename": "Person",
            "name": "Кристофер Ллойд",
            "originalName": "Christopher Lloyd"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Lorraine Baines",
          "person": {
            "__typename": "Person",
            "name": "Лиа Томпсон",
            "originalName": "Lea Thompson"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Роберт Земекис",
            "originalName": "Robert Zemeckis"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/476/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.646,
        "isActive": true,
        "count": 672025
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 76952,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2013-06-27",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1985-07-03",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2013-06-27",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1985,
    "duration": 116,
    "isShortFilm": false,
    "top250": 28
  },
  "Film:77335": {
    "__typename": "Film",
    "id": 77335,
    "contentId": "4e97b28f7683415a9efebcff1fa239df",
    "title": {
      "__typename": "Title",
      "russian": "Собачье сердце",
      "original": null
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/a477f092-e2ed-4a9d-a5f1-001438e88ab5"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 13,
        "name": "СССР"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:2"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "профессор Филипп Преображенский",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Евгений Евстигнеев"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Шариков",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Владимир Толоконников"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "доктор Борменталь",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Борис Плотников"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Владимир Бортко"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/77335/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.405,
        "isActive": true,
        "count": 429077
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 188431,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2023-03-16",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1988-11-20",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2023-03-16",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1988,
    "duration": 136,
    "isShortFilm": false,
    "top250": 29
  },
  "Film:526": {
    "__typename": "Film",
    "id": 526,
    "contentId": "47cf35a5d38ad7b5aaf5e51fbb1e7867",
    "title": {
      "__typename": "Title",
      "russian": "Большой куш",
      "original": "Snatch"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/4303601/47fe48f6-ff17-4411-a12f-d337bea2639d"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      },
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:16"
      },
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:3"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Turkish",
          "person": {
            "__typename": "Person",
            "name": "Джейсон Стэйтем",
            "originalName": "Jason Statham"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Tommy",
          "person": {
            "__typename": "Person",
            "name": "Стивен Грэм",
            "originalName": "Stephen Graham"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Mickey O'Neil",
          "person": {
            "__typename": "Person",
            "name": "Брэд Питт",
            "originalName": "Brad Pitt"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Гай Ричи",
            "originalName": "Guy Ritchie"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/526/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.554,
        "isActive": true,
        "count": 608706
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 19027,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2001-05-10",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2000-08-23",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2001-05-10",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2000,
    "duration": 104,
    "isShortFilm": false,
    "top250": 30
  },
  "Film:456": {
    "__typename": "Film",
    "id": 456,
    "contentId": "448b07c154950175ba84ee717a68daa5",
    "title": {
      "__typename": "Title",
      "russian": "Унесённые ветром",
      "original": "Gone with the Wind"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/4774061/0e8db812-35c1-4650-8c76-654f6eed9535"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:7"
      },
      {
        "__ref": "Genre:23"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:19"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Scarlett O'Hara - Their Daughter",
          "person": {
            "__typename": "Person",
            "name": "Вивьен Ли",
            "originalName": "Vivien Leigh"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Rhett Butler - Visitor from Charleston",
          "person": {
            "__typename": "Person",
            "name": "Кларк Гейбл",
            "originalName": "Clark Gable"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Ashley Wilkes - John's Son",
          "person": {
            "__typename": "Person",
            "name": "Лесли Говард",
            "originalName": "Leslie Howard"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Виктор Флеминг",
            "originalName": "Victor Fleming"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/456/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.414,
        "isActive": true,
        "count": 232597
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 77329,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": []
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1939-12-15",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2002-08-07",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1939,
    "duration": 222,
    "isShortFilm": false,
    "top250": 31
  },
  "Film:42782": {
    "__typename": "Film",
    "id": 42782,
    "contentId": "4212be238fbf9f488dad28df6ddd60a9",
    "title": {
      "__typename": "Title",
      "russian": "Операция «Ы» и другие приключения Шурика",
      "original": null
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/4774061/ccd69a69-7405-4b41-89a8-60dd6dc2a3ee"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 13,
        "name": "СССР"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:7"
      },
      {
        "__ref": "Genre:16"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Шурик",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Александр Демьяненко"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Лида, новелла «Наваждение»",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Наталья Селезнёва"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "верзила, новелла «Напарник» / недовольный покупатель, новелла «Операция «Ы»",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Алексей Смирнов"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "режиссер-постановщик",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Леонид Гайдай"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/42782/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.711,
        "isActive": true,
        "count": 1021166
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 183604,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": []
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1965-07-23",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2011-01-11",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1965,
    "duration": 95,
    "isShortFilm": false,
    "top250": 32
  },
  "Film:5457899": {
    "__typename": "Film",
    "id": 5457899,
    "contentId": null,
    "title": {
      "__typename": "Title",
      "russian": "Дикий робот",
      "original": "The Wild Robot"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/10893610/39d6ce73-5ec5-443c-8173-d790c1088201"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 9,
        "name": "Япония"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:14"
      },
      {
        "__ref": "Genre:2"
      },
      {
        "__ref": "Genre:10"
      },
      {
        "__ref": "Genre:11"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Roz / Rummage, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Лупита Нионго",
            "originalName": "Lupita Nyong'o"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Fink, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Педро Паскаль",
            "originalName": "Pedro Pascal"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Brightbill, озвучка",
          "person": {
            "__typename": "Person",
            "name": "Кит Коннор",
            "originalName": "Kit Connor"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Крис Сандерс",
            "originalName": "Chris Sanders"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/5457899/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.426,
        "isActive": true,
        "count": 43839
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 196686,
      "isEmbedded": false
    },
    "viewOption": null,
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": []
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2024-09-08",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": []
      }
    },
    "productionYear": 2024,
    "duration": 102,
    "isShortFilm": false,
    "top250": 33
  },
  "Film:324": {
    "__typename": "Film",
    "id": 324,
    "contentId": "4ba3dd505807f37b9644e902e4c5a9f6",
    "title": {
      "__typename": "Title",
      "russian": "Поймай меня, если сможешь",
      "original": "Catch Me If You Can"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1704946/e38dd6f9-610e-4c90-8540-dc48560cb9cc"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 6,
        "name": "Канада"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:16"
      },
      {
        "__ref": "Genre:22"
      },
      {
        "__ref": "Genre:6"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Frank Abagnale Jr.",
          "person": {
            "__typename": "Person",
            "name": "Леонардо ДиКаприо",
            "originalName": "Leonardo DiCaprio"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Carl Hanratty",
          "person": {
            "__typename": "Person",
            "name": "Том Хэнкс",
            "originalName": "Tom Hanks"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Frank Abagnale",
          "person": {
            "__typename": "Person",
            "name": "Кристофер Уокен",
            "originalName": "Christopher Walken"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Стивен Спилберг",
            "originalName": "Steven Spielberg"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/324/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.529,
        "isActive": true,
        "count": 780387
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 138541,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2003-02-13",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2002-12-16",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2003-02-13",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2002,
    "duration": 141,
    "isShortFilm": false,
    "top250": 34
  },
  "Film:387556": {
    "__typename": "Film",
    "id": 387556,
    "contentId": "4430771befced023a44c3c4176879d6c",
    "title": {
      "__typename": "Title",
      "russian": "Хатико: Самый верный друг",
      "original": "Hachi: A Dog's Tale"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1629390/82f8a2dc-a439-4832-9f0f-dc599e6e78d2"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:11"
      },
      {
        "__ref": "Genre:22"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Parker Wilson",
          "person": {
            "__typename": "Person",
            "name": "Ричард Гир",
            "originalName": "Richard Gere"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Cate Wilson",
          "person": {
            "__typename": "Person",
            "name": "Джоан Аллен",
            "originalName": "Joan Allen"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Ken",
          "person": {
            "__typename": "Person",
            "name": "Кэри-Хироюки Тагава",
            "originalName": "Cary-Hiroyuki Tagawa"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Лассе Халльстрём",
            "originalName": "Lasse Hallström"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/387556/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.369,
        "isActive": true,
        "count": 649073
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 16997,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2009-10-22",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2009-06-13",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2009-10-22",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2008,
    "duration": 89,
    "isShortFilm": false,
    "top250": 35
  },
  "Film:689": {
    "__typename": "Film",
    "id": 689,
    "contentId": "4df0fe0d1c7bc66e88bb6848a1e926fd",
    "title": {
      "__typename": "Title",
      "russian": "Гарри Поттер и философский камень",
      "original": "Harry Potter and the Sorcerer's Stone"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1898899/27ed5c19-a045-49dd-8624-5f629c5d96e0"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      },
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:5"
      },
      {
        "__ref": "Genre:10"
      },
      {
        "__ref": "Genre:11"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Harry Potter",
          "person": {
            "__typename": "Person",
            "name": "Дэниэл Рэдклифф",
            "originalName": "Daniel Radcliffe"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Ron Weasley",
          "person": {
            "__typename": "Person",
            "name": "Руперт Гринт",
            "originalName": "Rupert Grint"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Hermione Granger",
          "person": {
            "__typename": "Person",
            "name": "Эмма Уотсон",
            "originalName": "Emma Watson"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Крис Коламбус",
            "originalName": "Chris Columbus"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/689/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.282,
        "isActive": true,
        "count": 1020531
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 5782,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2002-03-21",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2001-11-04",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2002-03-21",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2001,
    "duration": 152,
    "isShortFilm": false,
    "top250": 36
  },
  "Film:725190": {
    "__typename": "Film",
    "id": 725190,
    "contentId": "47cdb4a90fc23fe1a4a7863b4d9f62ac",
    "title": {
      "__typename": "Title",
      "russian": "Одержимость",
      "original": "Whiplash"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/6201401/16af46be-bcfe-461e-af54-ff17b905b82e"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:21"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Andrew",
          "person": {
            "__typename": "Person",
            "name": "Майлз Теллер",
            "originalName": "Miles Teller"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Fletcher",
          "person": {
            "__typename": "Person",
            "name": "Дж.К. Симмонс",
            "originalName": "J.K. Simmons"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Jim Neimann",
          "person": {
            "__typename": "Person",
            "name": "Пол Райзер",
            "originalName": "Paul Reiser"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Дэмьен Шазелл",
            "originalName": "Damien Chazelle"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/725190/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.363,
        "isActive": true,
        "count": 536886
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 107781,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2014-10-23",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2014-01-16",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2014-10-23",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2013,
    "duration": 106,
    "isShortFilm": false,
    "top250": 37
  },
  "Film:522": {
    "__typename": "Film",
    "id": 522,
    "contentId": "4b6cb2aed31a095ab8e862ec76108f21",
    "title": {
      "__typename": "Title",
      "russian": "Карты, деньги, два ствола",
      "original": "Lock, Stock and Two Smoking Barrels"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/6492653f-11d5-4087-a1d2-ec7a74f161d3"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      },
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:3"
      },
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:16"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Tom",
          "person": {
            "__typename": "Person",
            "name": "Джейсон Флеминг",
            "originalName": "Jason Flemyng"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Soap",
          "person": {
            "__typename": "Person",
            "name": "Декстер Флетчер",
            "originalName": "Dexter Fletcher"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Eddy",
          "person": {
            "__typename": "Person",
            "name": "Ник Моран",
            "originalName": "Nick Moran"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Гай Ричи",
            "originalName": "Guy Ritchie"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/522/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.559,
        "isActive": true,
        "count": 541582
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 86205,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1999-05-06",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1998-08-23",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1999-05-06",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1998,
    "duration": 107,
    "isShortFilm": false,
    "top250": 38
  },
  "Film:44168": {
    "__typename": "Film",
    "id": 44168,
    "contentId": "41b7a3248bca8b40b66079ea65f4dae3",
    "title": {
      "__typename": "Title",
      "russian": "Девчата",
      "original": null
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/4303601/d5ee73ae-82af-4f60-af5e-f080bed523d8"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 13,
        "name": "СССР"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:7"
      },
      {
        "__ref": "Genre:6"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Тося",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Надежда Румянцева"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Илья",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Николай Рыбников"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Катя",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Люсьена Овчинникова"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Юрий Чулюкин"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/44168/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.439,
        "isActive": true,
        "count": 693978
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 10053,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": []
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1962-03-07",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": []
      }
    },
    "productionYear": 1962,
    "duration": 92,
    "isShortFilm": false,
    "top250": 39
  },
  "Film:195334": {
    "__typename": "Film",
    "id": 195334,
    "contentId": "4a1b9b7ca81e26789bdd29fdf3c424db",
    "title": {
      "__typename": "Title",
      "russian": "Престиж",
      "original": "The Prestige"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1773646/0e1384ae-6367-4bba-9e5d-d91c6625371e"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      },
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:4"
      },
      {
        "__ref": "Genre:2"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:17"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Robert Angier",
          "person": {
            "__typename": "Person",
            "name": "Хью Джекман",
            "originalName": "Hugh Jackman"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Alfred Borden",
          "person": {
            "__typename": "Person",
            "name": "Кристиан Бэйл",
            "originalName": "Christian Bale"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Cutter",
          "person": {
            "__typename": "Person",
            "name": "Майкл Кейн",
            "originalName": "Michael Caine"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Кристофер Нолан",
            "originalName": "Christopher Nolan"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/195334/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.516,
        "isActive": true,
        "count": 630991
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 82219,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2007-01-18",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2006-10-17",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2007-01-18",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2006,
    "duration": 130,
    "isShortFilm": false,
    "top250": 40
  },
  "Film:2213": {
    "__typename": "Film",
    "id": 2213,
    "contentId": "467e936285361ab78c3ed4061d3cc363",
    "title": {
      "__typename": "Title",
      "russian": "Титаник",
      "original": "Titanic"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/10592371/7f0e6761-4635-46ad-b804-59d5cf1ae85c"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 17,
        "name": "Мексика"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:7"
      },
      {
        "__ref": "Genre:23"
      },
      {
        "__ref": "Genre:4"
      },
      {
        "__ref": "Genre:8"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Jack Dawson",
          "person": {
            "__typename": "Person",
            "name": "Леонардо ДиКаприо",
            "originalName": "Leonardo DiCaprio"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Rose Dewitt Bukater",
          "person": {
            "__typename": "Person",
            "name": "Кейт Уинслет",
            "originalName": "Kate Winslet"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Cal Hockley",
          "person": {
            "__typename": "Person",
            "name": "Билли Зейн",
            "originalName": "Billy Zane"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Джеймс Кэмерон",
            "originalName": "James Cameron"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/2213/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.386,
        "isActive": true,
        "count": 883899
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 56701,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1998-02-20",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1997-11-01",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1998-02-20",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1997,
    "duration": 194,
    "isShortFilm": false,
    "top250": 41
  },
  "Film:46225": {
    "__typename": "Film",
    "id": 46225,
    "contentId": "4fd4720e46d437b28d753e86808c8fb6",
    "title": {
      "__typename": "Title",
      "russian": "Бриллиантовая рука",
      "original": null
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/10893610/32ef92db-5cbb-426d-acf9-2327b695edf8"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 13,
        "name": "СССР"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:16"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Семен Горбунков",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Юрий Никулин"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Геннадий Козодоев",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Андрей Миронов"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Лёлик",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Анатолий Папанов"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Леонид Гайдай"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/46225/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.529,
        "isActive": true,
        "count": 806897
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 41034,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2024-04-25",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1969-04-28",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2024-04-25",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1968,
    "duration": 94,
    "isShortFilm": false,
    "top250": 42
  },
  "Film:301": {
    "__typename": "Film",
    "id": 301,
    "contentId": "4824a95e60a7db7e86f14137516ba590",
    "title": {
      "__typename": "Title",
      "russian": "Матрица",
      "original": "The Matrix"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf1970bc-3f08-4e0e-a095-2fb57c3aa7c6"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 25,
        "name": "Австралия"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:2"
      },
      {
        "__ref": "Genre:3"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Neo",
          "person": {
            "__typename": "Person",
            "name": "Киану Ривз",
            "originalName": "Keanu Reeves"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Morpheus",
          "person": {
            "__typename": "Person",
            "name": "Лоренс Фишбёрн",
            "originalName": "Laurence Fishburne"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Trinity",
          "person": {
            "__typename": "Person",
            "name": "Кэрри-Энн Мосс",
            "originalName": "Carrie-Anne Moss"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Лана Вачовски",
            "originalName": "Lana Wachowski"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/301/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.498,
        "isActive": true,
        "count": 747199
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 162901,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1999-10-14",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1999-03-24",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "1999-10-14",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1999,
    "duration": 136,
    "isShortFilm": false,
    "top250": 43
  },
  "Film:4540126": {
    "__typename": "Film",
    "id": 4540126,
    "contentId": "1b753427594d4be9a67bd4238be2e7b0",
    "title": {
      "__typename": "Title",
      "russian": "Дюна: Часть вторая",
      "original": "Dune: Part Two"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/9784475/0c67265b-6631-4e25-b89c-3ddf4e5a1ee7"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 6,
        "name": "Канада"
      },
      {
        "__typename": "Country",
        "id": 119,
        "name": "ОАЭ"
      },
      {
        "__typename": "Country",
        "id": 49,
        "name": "Венгрия"
      },
      {
        "__typename": "Country",
        "id": 14,
        "name": "Италия"
      },
      {
        "__typename": "Country",
        "id": 35,
        "name": "Новая Зеландия"
      },
      {
        "__typename": "Country",
        "id": 154,
        "name": "Иордания"
      },
      {
        "__typename": "Country",
        "id": 1040,
        "name": "Гамбия"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:2"
      },
      {
        "__ref": "Genre:3"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:10"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Paul Atreides",
          "person": {
            "__typename": "Person",
            "name": "Тимоти Шаламе",
            "originalName": "Timothée Chalamet"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Chani",
          "person": {
            "__typename": "Person",
            "name": "Зендея",
            "originalName": "Zendaya"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Jessica",
          "person": {
            "__typename": "Person",
            "name": "Ребекка Фергюсон",
            "originalName": "Rebecca Ferguson"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Дени Вильнёв",
            "originalName": "Denis Villeneuve"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/4540126/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.233,
        "isActive": true,
        "count": 171845
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 194970,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": []
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2024-02-06",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": []
      }
    },
    "productionYear": 2024,
    "duration": 166,
    "isShortFilm": false,
    "top250": 44
  },
  "Film:322": {
    "__typename": "Film",
    "id": 322,
    "contentId": "4319afe5d620cda19b8d2588e9081849",
    "title": {
      "__typename": "Title",
      "russian": "Гарри Поттер и узник Азкабана",
      "original": "Harry Potter and the Prisoner of Azkaban"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/4303601/3eabac99-fb98-4b12-ba9f-6172782d54c6"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      },
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:5"
      },
      {
        "__ref": "Genre:10"
      },
      {
        "__ref": "Genre:11"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Harry Potter",
          "person": {
            "__typename": "Person",
            "name": "Дэниэл Рэдклифф",
            "originalName": "Daniel Radcliffe"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Ron Weasley",
          "person": {
            "__typename": "Person",
            "name": "Руперт Гринт",
            "originalName": "Rupert Grint"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Hermione Granger",
          "person": {
            "__typename": "Person",
            "name": "Эмма Уотсон",
            "originalName": "Emma Watson"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Альфонсо Куарон",
            "originalName": "Alfonso Cuarón"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/322/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.237,
        "isActive": true,
        "count": 692608
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 605,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2004-06-03",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2004-05-23",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2004-06-03",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2004,
    "duration": 142,
    "isShortFilm": false,
    "top250": 45
  },
  "Film:355": {
    "__typename": "Film",
    "id": 355,
    "contentId": "46fe62ed35c336a8a8ff14792d338473",
    "title": {
      "__typename": "Title",
      "russian": "Пианист",
      "original": "The Pianist"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1946459/6d71694e-3796-4e1c-96aa-0e982c2bc03d"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-ott/2419418/2a0000017eb9b60b5f8bd4d200217535fe5e"
        }
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 8,
        "name": "Франция"
      },
      {
        "__typename": "Country",
        "id": 32,
        "name": "Польша"
      },
      {
        "__typename": "Country",
        "id": 11,
        "name": "Великобритания"
      },
      {
        "__typename": "Country",
        "id": 3,
        "name": "Германия"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:19"
      },
      {
        "__ref": "Genre:22"
      },
      {
        "__ref": "Genre:21"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Wladyslaw Szpilman",
          "person": {
            "__typename": "Person",
            "name": "Эдриан Броуди",
            "originalName": "Adrien Brody"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Dorota",
          "person": {
            "__typename": "Person",
            "name": "Эмилия Фокс",
            "originalName": "Emilia Fox"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Majorek",
          "person": {
            "__typename": "Person",
            "name": "Даниэль Кальтаджироне",
            "originalName": "Daniel Caltagirone"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Роман Полански",
            "originalName": "Roman Polanski"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/355/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.47,
        "isActive": true,
        "count": 425115
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 7814,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": "//avatars.mds.yandex.net/get-ott/2419418/2a0000017eb9b60b5f8bd4d200217535fe5e",
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2003-05-08",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2002-05-24",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2003-05-08",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2002,
    "duration": 149,
    "isShortFilm": false,
    "top250": 46
  },
  "Film:44386": {
    "__typename": "Film",
    "id": 44386,
    "contentId": "4e674f4389d244b185ee6c8f13794bc2",
    "title": {
      "__typename": "Title",
      "russian": "Джентльмены удачи",
      "original": null
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1946459/218102a7-96be-4d7e-8029-815de0f37cfa"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 13,
        "name": "СССР"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:6"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:16"
      },
      {
        "__ref": "Genre:17"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Евгений Трошкин / Доцент",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Евгений Леонов"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Хмырь / Гаврила Петрович Шереметьев",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Георгий Вицин"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Василий Алибабаевич / Али-Баба",
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Раднэр Муратов"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": null,
            "originalName": "Александр Серый"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/44386/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.553,
        "isActive": true,
        "count": 828690
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 4050,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": []
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1971-12-13",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2011-01-11",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1971,
    "duration": 84,
    "isShortFilm": false,
    "top250": 47
  },
  "Film:81314": {
    "__typename": "Film",
    "id": 81314,
    "contentId": "117557102fa84bc5aaa7434ddfa9740a",
    "title": {
      "__typename": "Title",
      "russian": "Отступники",
      "original": "The Departed"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1898899/f2c70176-43c8-4ca6-8f67-7119a2b73f19"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      },
      {
        "__typename": "Country",
        "id": 28,
        "name": "Гонконг"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:16"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:4"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Billy",
          "person": {
            "__typename": "Person",
            "name": "Леонардо ДиКаприо",
            "originalName": "Leonardo DiCaprio"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Colin",
          "person": {
            "__typename": "Person",
            "name": "Мэтт Дэймон",
            "originalName": "Matt Damon"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Costello",
          "person": {
            "__typename": "Person",
            "name": "Джек Николсон",
            "originalName": "Jack Nicholson"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Мартин Скорсезе",
            "originalName": "Martin Scorsese"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/81314/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.457,
        "isActive": true,
        "count": 487479
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 2257,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2006-10-05",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2006-09-26",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2006-10-05",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2006,
    "duration": 151,
    "isShortFilm": false,
    "top250": 48
  },
  "Film:63912": {
    "__typename": "Film",
    "id": 63912,
    "contentId": "409e059dff510795bceb839b5f25437a",
    "title": {
      "__typename": "Title",
      "russian": "Укрощение строптивого",
      "original": "Il bisbetico domato"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1599028/76df764b-1c8b-4bc2-a822-fb2cf1afe2e3"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 14,
        "name": "Италия"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:7"
      },
      {
        "__ref": "Genre:6"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Elia Codogno",
          "person": {
            "__typename": "Person",
            "name": "Адриано Челентано",
            "originalName": "Adriano Celentano"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Lisa Silvestri",
          "person": {
            "__typename": "Person",
            "name": "Орнелла Мути",
            "originalName": "Ornella Muti"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Haushälterin Mamie",
          "person": {
            "__typename": "Person",
            "name": "Эдит Питерс",
            "originalName": "Edith Peters"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Франко Кастеллано",
            "originalName": "Franco Castellano"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/63912/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.405,
        "isActive": true,
        "count": 517197
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 47277,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": "По подписке Яндекс Плюс",
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": true,
      "purchasabilityStatus": "PURCHASABLE",
      "type": "SUBSCRIPTION",
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": []
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "1980-12-20",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2011-12-05",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 1980,
    "duration": 107,
    "isShortFilm": false,
    "top250": 49
  },

  "Film:586397": {
    "__typename": "Film",
    "id": 586397,
    "contentId": "4d757e043db71463a2014d864138a5ff",
    "title": {
      "__typename": "Title",
      "russian": "Джанго освобожденный",
      "original": "Django Unchained"
    },
    "gallery": {
      "__typename": "MovieGallery",
      "posters": {
        "__typename": "MoviePosters",
        "vertical": {
          "__typename": "Image",
          "avatarsUrl": "//avatars.mds.yandex.net/get-kinopoisk-image/1898899/401c67e4-5047-42c2-8668-aeda39da529f"
        }
      },
      "logos": {
        "__typename": "MovieLogos",
        "rightholderForPoster": null
      }
    },
    "countries": [
      {
        "__typename": "Country",
        "id": 1,
        "name": "США"
      }
    ],
    "genres": [
      {
        "__ref": "Genre:13"
      },
      {
        "__ref": "Genre:3"
      },
      {
        "__ref": "Genre:8"
      },
      {
        "__ref": "Genre:6"
      }
    ],
    "members({\"limit\":3,\"role\":[\"ACTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": "Django",
          "person": {
            "__typename": "Person",
            "name": "Джейми Фокс",
            "originalName": "Jamie Foxx"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Dr. King Schultz",
          "person": {
            "__typename": "Person",
            "name": "Кристоф Вальц",
            "originalName": "Christoph Waltz"
          }
        },
        {
          "__typename": "FilmCrewMember",
          "details": "Calvin Candie",
          "person": {
            "__typename": "Person",
            "name": "Леонардо ДиКаприо",
            "originalName": "Leonardo DiCaprio"
          }
        }
      ]
    },
    "members({\"limit\":1,\"role\":[\"DIRECTOR\"]})": {
      "__typename": "PagingList_FilmCrewMember",
      "items": [
        {
          "__typename": "FilmCrewMember",
          "details": null,
          "person": {
            "__typename": "Person",
            "name": "Квентин Тарантино",
            "originalName": "Quentin Tarantino"
          }
        }
      ]
    },
    "url": "https://www.kinopoisk.ru/film/586397/",
    "rating": {
      "__typename": "Rating",
      "kinopoisk": {
        "__typename": "RatingValue",
        "value": 8.243,
        "isActive": true,
        "count": 733446
      },
      "plannedToWatch": null
    },
    "mainTrailer": {
      "__typename": "Trailer",
      "id": 65925,
      "isEmbedded": false
    },
    "viewOption": {
      "__typename": "ViewOption",
      "buttonText": null,
      "originalButtonText": null,
      "promotionIcons": null,
      "isWatchable({\"filter\":{\"anyDevice\":false,\"anyRegion\":false}})": false,
      "purchasabilityStatus": "UNPURCHASABLE",
      "type": null,
      "rightholderLogoUrlForPoster": null,
      "availabilityAnnounce": null
    },
    "isTicketsAvailableInMyRegion": false,
    "distribution": {
      "__typename": "Distribution",
      "releases({\"countryId\":2,\"limit\":1,\"rerelease\":false,\"types\":[\"CINEMA\"]})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2013-01-17",
              "accuracy": "DAY"
            }
          }
        ]
      },
      "worldPremiere": {
        "__typename": "Premiere",
        "incompleteDate": {
          "__typename": "IncompleteDate",
          "date": "2012-12-11",
          "accuracy": "DAY"
        }
      },
      "releases({\"limit\":1})": {
        "__typename": "PagingList_Release",
        "items": [
          {
            "__typename": "Release",
            "date": {
              "__typename": "IncompleteDate",
              "date": "2013-01-17",
              "accuracy": "DAY"
            }
          }
        ]
      }
    },
    "productionYear": 2012,
    "duration": 165,
    "isShortFilm": false,
    "top250": 50
  }
}

const filmsArr = Object.values(filmsKinopoisk)

const films = filmsArr.map ( item => ({
  "id": item.id,
"title": item.title.original,
"rating": item.rating.kinopoisk.value,
"year": item.productionYear,
"budget": 0,
"gross": 0,
"poster": item.gallery.posters.vertical.avatarsUrl,
"position": item.top250
}))
console.log(films)
