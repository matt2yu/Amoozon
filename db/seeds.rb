ApplicationRecord.transaction do 

  User.destroy_all
  Product.destroy_all
  Review.destroy_all
  
  demo_user = User.create!(first_name: "Demo", last_name: "User", email: "demo-user@email.com", password: "password")
  demo_user_backup = User.create!(first_name: "demo", last_name: "user", email: "demo@email.com", password: "password")
  demo_user_matt = User.create!(first_name: "Matt", last_name: "Yu", email: "yatt2mu@gmail.com", password: "password")
  demo_user_josh = User.create!(first_name: "Josh", last_name: "Hernandez", email: "kizzy@gmail.com", password: "password")

  electronics = "Electronics"
  electronics1 = Product.create!(name: "Samsung 50' TV", description: "this is a test description", category: electronics, price: 69.69, keywords: ["anime", "manga"])
  electronics_review1 = Review.create!(user_id: demo_user.id, product_id: electronics1.id, rating: 5, title: "Review 1", body: "MOooooooooooooooooo!!")
  electronics2 = Product.create!(name: "Amoozon Fire", description: "this is a test description", category: electronics, price: 420.00, keywords: ["anime", "manga"])

  # fandg = "Food & Grocery"
  # manga1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: manga, price: 123.45, keywords: ["anime", "manga"])
  # manga_review1 = Review.create!(user_id: demo_user.id, product_id: manga1.id, rating: 5, title: "Review 3", body: "MOooooooooooooooooo!!")
  # manga2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: manga, price: 11.11, keywords: ["anime", "manga"])

  # fandg = "Books and Movies"
  # manga1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: manga, price: 123.45, keywords: ["anime", "manga"])
  # manga_review1 = Review.create!(user_id: demo_user.id, product_id: manga1.id, rating: 5, title: "Review 3", body: "MOooooooooooooooooo!!")
  # manga2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: manga, price: 11.11, keywords: ["anime", "manga"])

  # fandg = "Sports and Outdoors"
  # manga1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: manga, price: 123.45, keywords: ["anime", "manga"])
  # manga_review1 = Review.create!(user_id: demo_user.id, product_id: manga1.id, rating: 5, title: "Review 3", body: "MOooooooooooooooooo!!")
  # manga2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: manga, price: 11.11, keywords: ["anime", "manga"])


end