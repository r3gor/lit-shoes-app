// https://my-json-server.typicode.com/claumartinezh/training-db/shoes

const API = [
  {
    "id": 1,
    "size": [
      40,
      42,
      44,
      46
    ],
    "name": "Nike Air Force 1",
    "brand": "Nike",
    "color": "white",
    "price": 149.99,
    "season": "new",
    "category": "Basketball",
    "image": "https://images.footlocker.com/is/image/FLEU/314103214004_01?wid=520&hei=520&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314103214004_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314103214004_02?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 2,
    "size": [
      38,
      39,
      41,
      46
    ],
    "name": "Jordan 1 Mid",
    "brand": "Jordan",
    "color": "blue",
    "price": 129.99,
    "season": "featured",
    "category": "Basketball",
    "image": "https://images.footlocker.com/is/image/FLEU/315346214802_01?wid=500&hei=500&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/315346214802_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/315346214802_03?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 3,
    "size": [
      39,
      40,
      44,
      45
    ],
    "name": "Nike Kyrie 8 Enlightenment",
    "brand": "Nike",
    "color": "purple",
    "price": 89.99,
    "season": "upcoming",
    "category": "Basketball",
    "image": "https://images.footlocker.com/is/image/FLEU/314104188504_01?wid=520&hei=520&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314104188504_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314104188504_03?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 4,
    "size": [
      38,
      39,
      40,
      45,
      46
    ],
    "name": "Nike Air Max Uptempo",
    "brand": "Nike",
    "color": "black",
    "price": 179.99,
    "season": "new",
    "category": "Basketball",
    "image": "https://images.footlocker.com/is/image/FLEU/314101024504_01?wid=520&hei=520&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314101024504_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314101024504_03?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 5,
    "size": [
      40,
      41,
      42
    ],
    "name": "Lacoste L001",
    "brand": "Lacoste",
    "color": "white",
    "price": 59.99,
    "season": "upcoming",
    "category": "Tennis",
    "image": "https://images.footlocker.com/is/image/FLEU/314310976304_01?wid=520&hei=520&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314310976304_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314310976304_03?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 6,
    "size": [
      39,
      41,
      42,
      43
    ],
    "name": "Converse Chuck Taylor All Star High",
    "brand": "Converse",
    "color": "blue",
    "price": 74.99,
    "season": "featured",
    "category": "Skate",
    "image": "https://images.footlocker.com/is/image/FLEU/314550315304_01?wid=520&hei=520&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314550315304_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314550315304_03?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 7,
    "size": [
      40,
      42,
      43
    ],
    "name": "Vans Old Skool",
    "brand": "Vans",
    "color": "black",
    "price": 79.99,
    "season": "featured",
    "category": "Skate",
    "image": "https://images.footlocker.com/is/image/FLEU/314521424904_01?wid=520&hei=520&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314521424904_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314521424904_03?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 8,
    "size": [
      39,
      40,
      41,
      42,
      43
    ],
    "name": "Lacoste Twin Serve",
    "brand": "Lacoste",
    "color": "white",
    "price": 99.99,
    "season": "new",
    "category": "Tennis",
    "image": "https://images.footlocker.com/is/image/FLEU/314310424404_01?wid=520&hei=520&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314310424404_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314310424404_03?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 9,
    "size": [
      39,
      40,
      41
    ],
    "name": "Salomon Xa Cover",
    "brand": "Salomon",
    "color": "blue",
    "price": 69.99,
    "season": "new",
    "category": "Hiking",
    "image": "https://images.footlocker.com/is/image/FLEU/314214919004_01?wid=520&hei=520&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314214919004_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314214919004_03?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 10,
    "size": [
      40,
      42,
      44,
      46
    ],
    "name": "Timberland 6 Inch",
    "brand": "Timberland",
    "color": "red",
    "price": 219.99,
    "season": "upcoming",
    "category": "Hiking",
    "image": "https://images.footlocker.com/is/image/FLEU/314626044904_01?wid=520&hei=520&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314626044904_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314626044904_03?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 11,
    "size": [
      38,
      39,
      40,
      42,
      44,
      46
    ],
    "name": "Timberland Field Trekker",
    "brand": "Timberland",
    "color": "black",
    "price": 69.99,
    "season": "featured",
    "category": "Hiking",
    "image": "https://images.footlocker.com/is/image/FLEU/314625472304_01?wid=500&hei=500&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314625472304_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314625472304_03?wid=500&hei=500&fmt=png-alpha"
  },
  {
    "id": 12,
    "size": [
      40,
      42,
      44
    ],
    "name": "Under Armour Curry 9 We Believe",
    "brand": "Under Armour",
    "color": "yellow",
    "price": 129.99,
    "season": "new",
    "category": "Basketball",
    "image": "https://images.footlocker.com/is/image/FLEU/314103984804_01?wid=500&hei=500&fmt=png-alpha",
    "image-side": "https://images.footlocker.com/is/image/FLEU/314103984804_02?wid=500&hei=500&fmt=png-alpha",
    "image-behind": "https://images.footlocker.com/is/image/FLEU/314103984804_03?wid=500&hei=500&fmt=png-alpha"
  }
]
