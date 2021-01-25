# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Start"
puts "Clean DB"
User.destroy_all
Painting.destroy_all
Theme.destroy_all

#----------------------------------------------------
puts "Seeding users..."

moi = User.new(
  email: "test@test.com",
  password: "123456"
)
moi.save!

#----------------------------------------------------
puts "Seeding themes..."
paysage = Theme.create!(name: "Paysage")
enfant = Theme.create!(name: "Enfant")
nature_morte = Theme.create!(name: "Nature morte")
portait = Theme.create!(name: "Portrait")


#--------------------------------------------------------
puts "Seeding paintings..."

les_4_saisons = Painting.new(
  name: "Les 4 saisons",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
les_4_saisons.theme = paysage
les_4_saisons.photo.attach(io: URI.open('app/assets/images/4_saisons.jpg'), filename: '4_saisons.jpg', content_type: 'image/jpg')
les_4_saisons.save!


avion = Painting.new(
  name: "Avion au soleil couchant",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
avion.theme = paysage
avion.photo.attach(io: URI.open('app/assets/images/avion.jpg'), filename: 'avion.jpg', content_type: 'image/jpg')
avion.save!


champ_de_colza = Painting.new(
  name: "Champ de colza",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
champ_de_colza.theme = paysage
champ_de_colza.photo.attach(io: URI.open('app/assets/images/champ_de_colza.jpg'), filename: 'champ_de_colza.jpg', content_type: 'image/jpg')
champ_de_colza.save!


champs = Painting.new(
  name: "Champs",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
champs.theme = paysage
champs.photo.attach(io: URI.open('app/assets/images/champs.jpg'), filename: 'champs.jpg', content_type: 'image/jpg')
champs.save!


contemplation = Painting.new(
  name: "Contemplation",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
contemplation.theme = paysage
contemplation.photo.attach(io: URI.open('app/assets/images/contemplation.jpg'), filename: 'contemplation.jpg', content_type: 'image/jpg')
contemplation.save!



drape_bleu = Painting.new(
  name: "drapé bleu",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
drape_bleu.theme = nature_morte
drape_bleu.photo.attach(io: URI.open('app/assets/images/drapé_bleu.jpg'), filename: 'drapé_bleu.jpg', content_type: 'image/jpg')
drape_bleu.save!



esprit_japonais_bleu = Painting.new(
  name: "Esprit japonais bleu",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
esprit_japonais_bleu.theme = nature_morte
esprit_japonais_bleu.photo.attach(io: URI.open('app/assets/images/esprit_japonais_bleu.jpg'), filename: 'esprit_japonais_bleu.jpg', content_type: 'image/jpg')
esprit_japonais_bleu.save!


fanny_la = Painting.new(
  name: "Fanny La",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
fanny_la.theme = portait
fanny_la.photo.attach(io: URI.open('app/assets/images/fanny_la.jpg'), filename: 'fanny_la.jpg', content_type: 'image/jpg')
fanny_la.save!


hello_lola = Painting.new(
  name: "Hello Lola",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
hello_lola.theme = enfant
hello_lola.photo.attach(io: URI.open('app/assets/images/hello_lola.jpg'), filename: 'hello_lola.jpg', content_type: 'image/jpg')
hello_lola.save!


lion = Painting.new(
  name: "Lion",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
lion.theme = portait
lion.photo.attach(io: URI.open('app/assets/images/lion.jpg'), filename: 'lion.jpg', content_type: 'image/jpg')
lion.save!


ville_au_bord_de_l_eau = Painting.new(
  name: "Ville au bord de l\'eau",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
ville_au_bord_de_l_eau.theme = paysage
ville_au_bord_de_l_eau.photo.attach(io: URI.open('app/assets/images/ville_au_bord_de_l_eau.jpg'), filename: 'ville_au_bord_de_l_eau.jpg', content_type: 'image/jpg')
ville_au_bord_de_l_eau.save!

voiliers_bretons = Painting.new(
  name: "Voiliers bretons",
  description: "Punk hardcore, post-hardcore, art rock",
  year: 2009,
  dimensions: "42x65",
  sold: false
)
voiliers_bretons.theme = paysage
voiliers_bretons.photo.attach(io: URI.open('app/assets/images/voiliers_bretons.jpg'), filename: 'voiliers_bretons.jpg', content_type: 'image/jpg')
voiliers_bretons.save!

puts 'Seed complete!'
