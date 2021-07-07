ApplicationRecord.transaction do 

  User.destroy_all

  demo_user = User.create!(first_name: "demo", last_name: "user", email: "demo@email.com", password: "password")
  demo_user_matt = User.create!(first_name: "Matt", last_name: "Yu", email: "yatt2mu@gmail.com", password: "password")
  demo_user_josh = User.create!(first_name: "Josh", last_name: "Hernandez", email: "kizzy@gmail.com", password: "password")


end