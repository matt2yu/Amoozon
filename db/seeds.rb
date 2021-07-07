ApplicationRecord.transaction do 

  User.destroy_all

  demo_user_backup = User.create!(first_name: "demo", last_name: "user", email: "demo@email.com", password: "password")
  demo_user_matt = User.create!(first_name: "Matt", last_name: "Yu", email: "yatt2mu@gmail.com", password: "password")
  demo_user_josh = User.create!(first_name: "Josh", last_name: "Hernandez", email: "kizzy@gmail.com", password: "password")
  demo_user = User.create!(first_name: "Demo", last_name: "User", email: "demo-user@email.com", password: "password")


end