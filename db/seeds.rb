ApplicationRecord.transaction do 

  User.destroy_all
  Product.destroy_all
  Review.destroy_all
  
  demo_user = User.create!(first_name: "Demo User", last_name: "blank", email: "demo-user@email.com", password: "password")
  demo_user1 = User.create!(first_name: "Angus", last_name: "Cattle", email: "demo-user1@email.com", password: "password")
  demo_user2 = User.create!(first_name: "Limousin", last_name: "Cattle", email: "demo-user2@email.com", password: "password")
  demo_user3 = User.create!(first_name: "Red", last_name: "Angus", email: "demo-user3@email.com", password: "password")
  demo_user4 = User.create!(first_name: "Hungarian", last_name: "Grey", email: "demo-user4@email.com", password: "password")
  demo_user5 = User.create!(first_name: "Galloway", last_name: "Moo", email: "demo-user5@email.com", password: "password")
  demo_user6 = User.create!(first_name: "Belgian", last_name: "Blue", email: "demo-user6@email.com", password: "password")
  demo_user7 = User.create!(first_name: "EatMoreChicken", last_name: "NotBeef", email: "demo-user7@email.com", password: "password")
  demo_user8 = User.create!(first_name: "Dairy", last_name: "Shorthorn", email: "demo-user@email8.com", password: "password")
  demo_user9 = User.create!(first_name: "Simmental", last_name: "Burger", email: "demo-user@email9.com", password: "password")
  demo_user10 = User.create!(first_name: "Wagyu", last_name: "A5", email: "demo-user@email.com10", password: "password")
  demo_user11 = User.create!(first_name: "Medium", last_name: "Steak", email: "demo-user@email11.com", password: "password")



  electronics = "Electronics"

  electronics1 = Product.create!(name: "Flat Screen TV", description: "Moosung TV currently on sale at a bargain. Take advantage of the peak season and purchase this 50-Inch Class QLED Q60A Series - 4K UHD Dual LED Quantum HDR Smart TV with Cowbell Built-in ", category: electronics, price: 679.99, keywords: ["samsung", "tv", "television", "QLED", "HD", "TV", "50", 
    "50in", "smart", "4K", "4k"])
  electronics1.photo.attach(io: open("https://amoozon-seeds.s3.us-west-1.amazonaws.com/samsung50.jpg"), filename: "samsung50.jpg")
  electronics_review1 = Review.create!(user_id: demo_user1.id, product_id: electronics1.id, rating: 4, title: "Great bargain for anyone looking to get a TV", body: "I purchased this TV last year and it is still holding up. Everyone on the farm loves watching the big game on it. It sets quite the moooo-d.")
  electronics_review2 = Review.create!(user_id: demo_user10.id, product_id: electronics1.id, rating: 5, title: "Best TV I Have Ever Owned, Incredible Picture Quality!!", body: "All TV's are setup at the factory and are set at neutral settings across the board throughout the TV's range. You MUST know how to properly adjust each individual setting to optimize the picture quality!!")
  electronics_review3 = Review.create!(user_id: demo_user2.id, product_id: electronics1.id, rating: 3, title: "Dead on arrival", body: "Total brick right out of the box. There was no visible damage or signs of mishandling. The unit was completely dead ... no power getting to it at all, no standby light, nothing. I called the Samsung help line, where I was advised to box it up and send it back to Amazon. Refund still pending. Total waste of time and effort.")

  electronics2 = Product.create!(name: "Amoozon Fire", description: "this is a test description", category: electronics, price: 79.99, keywords: ["Amoozon", "amoozon", "fire", "Fire", "tablet", "tab"])
  electronics2.photo.attach(io: open("https://amoozon-seeds.s3.us-west-1.amazonaws.com/amoozonfire.jpg"), filename: "amoozonfire.jpg")


  booksAndMovies = "Books & Moo-vies"
  bandm1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: booksAndMovies, price: 123.45, keywords: ["anime", "manga", "book", "movie"])
  bandm2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: booksAndMovies, price: 11.11, keywords: ["anime", "manga", "book", "movie"])

  foodAndGrocery = "Food & Grocery"
  # foodAndGrocery1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: manga, price: 123.45, keywords: ["anime", "manga"])
  # manga_review1 = Review.create!(user_id: demo_user.id, product_id: manga1.id, rating: 5, title: "Review 3", body: "MOooooooooooooooooo!!")
  # manga2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: manga, price: 11.11, keywords: ["anime", "manga"])

  beautyAndHealth = "Beauty & Health"
  # manga1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: manga, price: 123.45, keywords: ["anime", "manga"])
  # manga_review1 = Review.create!(user_id: demo_user.id, product_id: manga1.id, rating: 5, title: "Review 3", body: "MOooooooooooooooooo!!")
  # manga2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: manga, price: 11.11, keywords: ["anime", "manga"])

  gamesAndToys = "Games & Toys"
  # manga1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: manga, price: 123.45, keywords: ["anime", "manga"])
  # manga_review1 = Review.create!(user_id: demo_user.id, product_id: manga1.id, rating: 5, title: "Review 3", body: "MOooooooooooooooooo!!")
  # manga2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: manga, price: 11.11, keywords: ["anime", "manga"])

  fashionAndJewelery = "Fashion & Jewelery"
  # manga1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: manga, price: 123.45, keywords: ["anime", "manga"])
  # manga_review1 = Review.create!(user_id: demo_user.id, product_id: manga1.id, rating: 5, title: "Review 3", body: "MOooooooooooooooooo!!")
  # manga2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: manga, price: 11.11, keywords: ["anime", "manga"])

  homeAndGarden = "Home & Garden"
  # manga1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: manga, price: 123.45, keywords: ["anime", "manga"])
  # manga_review1 = Review.create!(user_id: demo_user.id, product_id: manga1.id, rating: 5, title: "Review 3", body: "MOooooooooooooooooo!!")
  # manga2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: manga, price: 11.11, keywords: ["anime", "manga"])
  
  sportsAndOutdoors = "Sports & Outdoors"
  # manga1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: manga, price: 123.45, keywords: ["anime", "manga"])
  # manga_review1 = Review.create!(user_id: demo_user.id, product_id: manga1.id, rating: 5, title: "Review 3", body: "MOooooooooooooooooo!!")
  # manga2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: manga, price: 11.11, keywords: ["anime", "manga"])


end