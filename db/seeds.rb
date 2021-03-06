User.create!([
  {username: "Zenpost", password: 654321, image_url: "https://www.filepicker.io/api/file/7PRjhhMTLehi7r34qQpJ"},
  {username: "Matt", password: 123456, image_url: "https://www.filepicker.io/api/file/D7B6cpiRGS5TWBRl7YcA"},
  {username: "Kayla", password: 123456, image_url: "http://www.filepicker.io/api/file/yqqS9xVQTFieEMiqPhFR"},
  {username: "Jeannette", password: 123456, image_url: "https://www.filepicker.io/api/file/NboGRGcTW2xeaxuOvATs"},
  {username: "Jackie", password: 123456, image_url: "https://www.filepicker.io/api/file/j9U23KrSdiLtdOgaIdns"},
  {username: "Leticia", password: 123456, image_url: "https://www.filepicker.io/api/file/S7yfdGCyQcGzuSdnIQca"},
  {username: "Marcella", password: 123456, image_url: "https://www.filepicker.io/api/file/emmzttKWRSOJ2QFIlZSg"},
  {username: "Julie", password: 123456, image_url: "http://www.filepicker.io/api/file/vYCOaWGOQaut2fyDgYCs"},
  {username: "Mattie", password: 123456, image_url: "https://www.filepicker.io/api/file/9btSg2WhStaaqyAOrwMo"}
])

# first set
User.find_by_username("Zenpost").posts.create!(title: "Welcome to Zenpost", image_url: "https://www.filepicker.io/api/file/0DDv07CqTU284Opiy0ki", content: "Please use panel above to create your posts by typing in text or uploading images. You can display other users' posts on this page by following them, which can be done by clicking on the plus button next to each user's name (click on any plus button under \"Recommended Users\" now! You can always unfollow them anytime).\r\n\r\nYou can like a post by clicking on the heart button at the bottom of the post, and you can comment on other users's posts by clicking on the comment button (next to the heart button), which will take you to the post page.\r\n\r\nYou can also check out a list of all users by clicking on the \"Users\" link in the nav bar. You can click on either user's image or username to see a list of all posts posted by the user.\r\n\r\nThank you again for using **Zenpost**!")
User.find_by_username("Matt").posts.create!(title: "Funny Joke", content: "I found a hilarious joke online today, so I am going to share it here :)\r\n\r\nA husband and wife are trying to set up a new password for their computer. The husband puts, \"Mypenis,\" and the wife falls on the ground laughing because on the screen it says, \"Error. Not long enough.\"")
User.find_by_username("Kayla").posts.create!(title: "Frozen Fruits and Veggies Are Less Nutritious Than Fresh Ones?", content: "I thought the myth was a fact until read this article from [WomensHealthMag](http://www.womenshealthmag.com/nutrition/healthy-eating-myths):\r\n\r\n\"Frozen fruits and vegetables are flash-frozen within hours of being picked, locking in a majority of the nutrients,\" says Joy Bauer, M.S., R.D., the nutrition and health expert for NBC's TODAY Show and founder of NourishSnacks. She recommends taking advantage of fresh produce when you can.")
User.find_by_username("Jeannette").posts.create!(image_url: "http://www.filepicker.io/api/file/zm4nT2iTrq7z8E5j8euV", content: "I wish those flowers were real, so pretty!")
User.find_by_username("Jackie").posts.create!(image_url: "http://www.filepicker.io/api/file/rermR3BwRUO9kihpYO8t", content: "Ninja Panda hiding in water")
User.find_by_username("Leticia").posts.create!(title: "I love Hawaii", content: "I love Hawaii for the beaches, the resorts, the weather, and more! I love the people and their strength and beauty. And how life moves slower than everywhere else. I love jumping of waterfalls into cool pools!")
User.find_by_username("Marcella").posts.create!(image_url: "http://www.filepicker.io/api/file/RQkZRbHSHu4odjgoeeHE", content: "this tornado looks so cool, any body knows how to make one like that?")
User.find_by_username("Julie").posts.create!(title: "Twinkle Twinkle", image_url: "http://www.filepicker.io/api/file/4MVrJD6VTzi0bB9lJmQS", content: "these stars are so cute!")
User.find_by_username("Mattie").posts.create!(image_url: "http://media.giphy.com/media/Pk3IBXnrbTpbq/giphy.gif", content: "Sherlock Holmes is one of my favorite TV shows")

#second set
User.find_by_username("Matt").posts.create!(image_url: "http://www.filepicker.io/api/file/q4g2Dix3QWiEJLGXhbU1", content: "It would be cool to play Rubik's cube made of ice")
User.find_by_username("Kayla").posts.create!(title: "Good Day to go exercise", image_url: "http://s1.dwstatic.com/group1/M00/1D/D8/a4628a6674660a71527dcfdff9094278.gif", content: "Great weather today. Time to lose some weight")
User.find_by_username("Jeannette").posts.create!(image_url: "https://www.filepicker.io/api/file/qrMpoAURRT2jrGbGqTCw", content: "Anyone know where I can find this?")
User.find_by_username("Jackie").posts.create!(title: "Elephant Never Forgets", content: "There is a myth that elephants can retain their memory till they die. I think its logical for people to think that way since elephants have huge brains! It turns out that the myth is true:\r\n\r\n\"Elephants are able to retain a mental map of their entire home range — we’re talking an area the size of Rhode Island! Elephants also travel in packs and when the group gets too big, the eldest daughter breaks off to start her own contingent, yet she never forgets her roots.\"")
User.find_by_username("Leticia").posts.create!(image_url: "https://www.filepicker.io/api/file/GRNH4eRfTkuYSFeTuX1b", content: "the sands, the water, the waves!!!")
User.find_by_username("Marcella").posts.create!(image_url: "http://www.filepicker.io/api/file/uj2MGnSQSISKV5m35YZm", content: "is that a human's eye?")
User.find_by_username("Julie").posts.create!(image_url: "http://media.giphy.com/media/5HkwFiToBxxD2/giphy.gif", content: "I want to see the night sky on top of a mountain right now!")
User.find_by_username("Mattie").posts.create!(image_url: "http://media.giphy.com/media/10Z07PG72mjqq4/giphy.gif", content: "funny gif! can't wait for Halloween!")

#third set
User.find_by_username("Matt").posts.create!(title: "for those who also like bread..", content: "I am not a big fan of whole-wheat bread. This article I found online might change my diet: \r\n\r\nIn a 2002 German study, researchers found that the baking process produces a novel type of cancer-fighting antioxidant in bread that is eight times more abundant in the crust than in the crumb. That said, it’s more important to serve whole-wheat bread, with or without the crust, because it’s all around higher in nutrients, such as fiber, says New York City nutritionist Keri Glassman, author of The O2 Diet.")
User.find_by_username("Kayla").posts.create!(image_url: "http://s1.dwstatic.com/group1/M00/71/F4/ba685916f0eef938dbfa5fcf42b0b036.gif", content: "This temporarily helps me from craving for ice cream")
User.find_by_username("Jeannette").posts.create!(title: "Five Second Rule", content: "People, Five Second Rule is not wrong! Check this out from [Discovery](http://www.discovery.com/tv-shows/curiosity/topics/big-myths-everyday-science-pictures.htm):\r\n\r\nThe myth: Food that you drop on the floor is OK to eat if you pick it up within five seconds. The reality: Germs are on the floor, and if food lands on the germs, they will stick to the food immediately. This is especially true in the kitchen, where bacteria such as salmonella thrive.")
User.find_by_username("Jackie").posts.create!(image_url: "http://www.filepicker.io/api/file/ku1X6kF7ROQZqMwIAkNG", content: "cool looking leopard picture!!!")
User.find_by_username("Leticia").posts.create!(image_url: "http://www.filepicker.io/api/file/9id3Mrb1SW2QbUX3Doz2", content: "King Kamehameha Day Celebration Parade!")
User.find_by_username("Marcella").posts.create!(title: "Nature is Unbelievable", image_url: "http://media0.giphy.com/media/pkVHZKcnzzkmA/giphy.gif", content: "beautiful nothern light. wish I could be there to see it")
User.find_by_username("Julie").posts.create!(image_url: "https://www.filepicker.io/api/file/c7VlTVAQTImsmtSX8WiY", content: "I am always hungry when I stay up late, and I am craving for desserts.")
User.find_by_username("Mattie").posts.create!(image_url: "http://media.giphy.com/media/ERmerV5laR2Zq/giphy.gif", content: "what should I be for Halloween")

#fourth set
User.find_by_username("Matt").posts.create!(image_url: "https://www.filepicker.io/api/file/qEh69NhvRPqphVIeadW0", content: "very cool looking image, a flower maybe?")
User.find_by_username("Kayla").posts.create!(image_url: "http://www.filepicker.io/api/file/AhJH7KJVQpRErcS5yGCP", content: "Cute red bean paste panda buns!")
User.find_by_username("Jeannette").posts.create!(image_url: "https://www.filepicker.io/api/file/RxH9rWrBSTCJbwQsL9d9", content: "I want this for Christmas!")
User.find_by_username("Jackie").posts.create!(image_url: "https://www.filepicker.io/api/file/wGiOB3BORDCUg5hfF8Lv", content: "colorful lizard!")
User.find_by_username("Leticia").posts.create!(image_url: "http://www.filepicker.io/api/file/lik5aSazS8SULEEDaqk3", content: "Supreme Court of Hawaii, with status of King Kamehameha in front of the courthouse")
User.find_by_username("Marcella").posts.create!(image_url: "http://r001.joyme.com/r001/image/2012/07/65/AAE029D14A9B91E0D4878A330A15809E_M.gif", content: "how to fake death!")
User.find_by_username("Julie").posts.create!(image_url: "http://media.giphy.com/media/viXsYok1yHgS4/giphy.gif", content: "I need this every day in the morning")
User.find_by_username("Mattie").posts.create!(image_url: "https://www.filepicker.io/api/file/6iKP12vlRRCTKSmOYuKO", content: "Will be there cute marshmallows in trick-or-treat")

Post.all.each do |post|
  User.all.sample(5).each do |user|
    user.likes.create(post_id: post.id)
  end
end