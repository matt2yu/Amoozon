ApplicationRecord.transaction do 

  User.destroy_all
  Product.destroy_all
  Review.destroy_all
  
  demo_user = User.create!(first_name: "Demo", last_name: "User", email: "demo-user@email.com", password: "password")
  demo_user_backup = User.create!(first_name: "demo", last_name: "user", email: "demo@email.com", password: "password")
  demo_user_matt = User.create!(first_name: "Matt", last_name: "Yu", email: "yatt2mu@gmail.com", password: "password")
  demo_user_josh = User.create!(first_name: "Josh", last_name: "Hernandez", email: "kizzy@gmail.com", password: "password")

  anime = "Anime"
  anime1 = Product.create!(name: "Anime show 1", description: "this is a test description", category: anime, price: 69.69, keywords: ["anime", "manga"])
  anime_review1 = Review.create!(user_id: demo_user.id, product_id: anime1.id, rating: 5, title: "Review 1", body: "MOooooooooooooooooo!!")
  anime2 = Product.create!(name: "Anime show 2", description: "this is a test description", category: anime, price: 420.00, keywords: ["anime", "manga"])
  anime_review2 = Review.create!(user_id: demo_user.id, product_id: anime2.id, rating: 4, title: "Review 2", body: "MOooooooooooooooooooooooo!!")

  manga = "Manga"
  manga1 = Product.create!(name: "Manga book 1", description: "this is a test description", category: manga, price: 123.45, keywords: ["anime", "manga"])
  manga_review1 = Review.create!(user_id: demo_user.id, product_id: manga1.id, rating: 5, title: "Review 3", body: "MOooooooooooooooooo!!")
  manga2 = Product.create!(name: "Manga book 2", description: "this is a test description", category: manga, price: 11.11, keywords: ["anime", "manga"])
  manga_review2 = Review.create!(user_id: demo_user.id, product_id: manga2.id, rating: 4, title: "Review 4", body: "MOooooooooooooooooo!!")


end