# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

random_words = 
  %w(adducing
dulcified
ennead
prereview
hesitated
vesture
outpiping
unbathed
retinite
chromolithograph
sauerkraut
panama
maurice
prereckon
rescheduled
subrotund
mesoblast
permissive
pinite
hue
nonglare
nonfusibility
impanelling
redecided
rebrew
airth
foetation
sphenoidal
valiance
exclosure
inclination
zee
transdermic
prebelief
verrocchio
nonpercipience
scand
casually
anneal
cotised
epicalyx
unnoticed
floreat
robbery
distally
phidippides
reptiloid
peaceably
precharging
inconspicuousness
irreducible
concessively
recoupable
mortifyingly
lankiest
epiclike
minuend
apprehender
venturing
forthcomingness
nonimpressionistic
bellmead
antirational
substandardization
outawed
unsafetied
stieglitz
pindaric
unbudgeted
expensive
jabberingly
preparedly
multiview
nonpenetrating
harness
paraglyphas
racialism
egotistic
letch
pseudoconfessional
waister
subjudge
barfly
shiftingness
myelencephalon
reendow
auditor
lunge
polymyxin
cassini
relost
squeakingly
coding
enamelware
telescoping
pergamus
unpargeted
fortress
affreight
overcommon)

f = File.open("lib/seed_data/randomName.txt", "r")
f.each_line do |line|
  newUser = User.create!(username: line, password: "password")
  newUser.posts.create!(title: ("My name is " + "#{newUser.username}"), content: random_words.shuffle.join(" "))
end
f.close

User.all.each {|user| user.posts.create!(title: ("Second post and my name is" + "#{user.username}"), content: random_words.shuffle.join(" "))}
User.all.each {|user| user.posts.create!(title: ("Third post and my name is" + "#{user.username}"), content: random_words.shuffle.join(" "))}
User.all.each {|user| user.posts.create!(title: ("Fourth post and my name is" + "#{user.username}"), content: random_words.shuffle.join(" "))}