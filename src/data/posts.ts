export interface Post {
  id: string;
  username: string;
  userImage: string;
  location?: string;
  media: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  };
  caption: string;
  likes: number;
  timestamp: string;
  comments: { username: string; text: string }[];
}

export const posts: Post[] = [
  {
    "id": "1",
    "username": "beautynala.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/4.jpg",
    "location": "Newport, Rhode Island",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/1.jpg"
    },
    "caption": "home is my comfort zone 🤍 just got this piece from @atelier_renoiria\nbeautiful, right?",
    "likes": 10877,
    "timestamp": "2025/05/20",
    "comments": [
      { "username": "kevin10", "text": "beautiful piece!" },
      { "username": "mark66", "text": "Gorgeous!" },
      { "username": "tyler_29", "text": "so you ✨" },
      { "username": "mark76", "text": "UR Stunning!!!" },
      { "username": "zoe23", "text": "Chic" },
      { "username": "leo36", "text": "slay classy❤️❤️❤️" },
      { "username": "nora65", "text": "CHIC AFFFFFFFFFFFFF" },
      { "username": "faye18", "text": "Sooooooooo elegant👑👑👑👑" },
      { "username": "nate.55", "text": "Perfection!!!" },
      { "username": "nora_34", "text": "refined vibes💎💎💎💎💎💎💎" }
    ]
  },
  {
    "id": "2",
    "username": "beautynala.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/4.jpg",
    "location": "Scottsdale, Arizona",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/2.jpg"
    },
    "caption": "pool time at @sol_villas 🌴",
    "likes": 10020,
    "timestamp": "2025/05/10",
    "comments": [
      { "username": "amy96", "text": "💝💝💝💝💝💝💝💝💝💝💝💝" },
      { "username": "dylan14", "text": "Beautiful!!!" },
      { "username": "nate.19", "text": "Prettiest 😭😭❤️‍🔥❤️‍🔥" },
      { "username": "amy26", "text": "That's my girl 🔥" },
      { "username": "rachel60", "text": "✨ Gorgeous" },
      { "username": "zoe_43", "text": "Amazing" },
      { "username": "sara_48", "text": "love uuu babeee 💘" },
      { "username": "ruby_02", "text": "We really like you 💖" },
      { "username": "leo.09", "text": "🥰💯💯❤️❤️💯❤️" },
      { "username": "mia_92", "text": "✨Queen✨" }
    ]
  },
  {
    "id": "3",
    "username": "beautynala.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/4.jpg",
    "location": "Fifth Avenue, New York",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/3.jpg"
    },
    "caption": "today at @ateliernova VVIP bag launch ✨which one should I take home?",
    "likes": 10343,
    "timestamp": "2025/04/28",
    "comments": [
      { "username": "dylan_49", "text": "Perfection!!!" },
      { "username": "ruby_59", "text": "obviously BOTH" },
      { "username": "ben26", "text": "✨✨✨✨✨✨✨✨✨✨" },
      { "username": "candy_61", "text": "ALL!!!!!" },
      { "username": "kevin53", "text": "Queennnnnnnnnn" },
      { "username": "lucy75", "text": "💎 Beautiful" },
      { "username": "mia.59", "text": "Stunning!!!" },
      { "username": "rachel.09", "text": "✨ So chic" },
      { "username": "sara11", "text": "luxeee" },
      { "username": "ryan80", "text": "❤️❤️❤️❤️❤️" }
    ]
  },
  {
    "id": "4",
    "username": "beautynala.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/4.jpg",
    "location": "Miami, Florida",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/4.jpg"
    },
    "caption": "A little escape on my yacht day🛥️ Nothing beats this view.",
    "likes": 11248,
    "timestamp": "2025/04/15",
    "comments": [
      { "username": "candy_31", "text": "✨✨✨" },
      { "username": "dan_55", "text": "🫶🏽🫶🏽🫶🏽🫶🏽🫶🏽🫶🏽🫶🏽" },
      { "username": "lily.11", "text": "😮😮" },
      { "username": "ruby.47", "text": "swaggy" },
      { "username": "jess.16", "text": "🔥🔥🔥🔥🔥🔥" },
      { "username": "dylan.03", "text": "Perf!!!" },
      { "username": "tyler94", "text": "Sooo good😍" },
      { "username": "candy82", "text": "Ur so hot" },
      { "username": "tyler_10", "text": "Gorgg" },
      { "username": "lucy_15", "text": "JEALOUS" }
    ]
  },
  {
    "id": "5",
    "username": "beautynala.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/4.jpg",
    "location": "Beverly Hills, California",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/5.jpg"
    },
    "caption": "New baby on the road 😎",
    "likes": 10520,
    "timestamp": "2025/04/01",
    "comments": [
      { "username": "leo68", "text": "my queeeeen!!!!!" },
      { "username": "rachel_96", "text": "luv😍" },
      { "username": "mia.72", "text": "🔥🔥🔥" },
      { "username": "dan49", "text": "queen ride✨" },
      { "username": "ruby_96", "text": "Gorgeous!" },
      { "username": "sophie59", "text": "❤️❤️❤️❤️❤️❤️❤️🙌" },
      { "username": "lucy.54", "text": "that car thoooooooooooo" },
      { "username": "ben.55", "text": "!!!" },
      { "username": "mia_58", "text": "Miss youu" },
      { "username": "hana54", "text": "❤️❤️❤️❤️❤️" }
    ]
  },
  {
    "id": "6",
    "username": "beautynala.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/4.jpg",
    "location": "Las Vegas, Nevada",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/6.jpg"
    },
    "caption": "VVIP pool party by @nocturne_society💦 tell me I’m not the cutest one here 😉",
    "likes": 12783,
    "timestamp": "2025/03/15",
    "comments": [
      { "username": "luke56", "text": "🔥🔥🔥🔥🔥🔥🔥" },
      { "username": "candy.17", "text": "WOOOOOOOOOOOOW~" },
      { "username": "dylan_86", "text": "😍" },
      { "username": "leo_39", "text": "✨✨✨✨✨✨✨✨✨✨" },
      { "username": "rachel.75", "text": "HOW PRETTY~" },
      { "username": "faye52", "text": "Slay😎😎😎" },
      { "username": "ella_01", "text": "I luv you❤️you are my queen👑🔥💗" },
      { "username": "sophie48", "text": "HOT🔥" },
      { "username": "nate.46", "text": "Damnnnnnnnnnnnnn!" },
      { "username": "ruby.52", "text": "🔥" }
    ]
  },
  {
    "id": "7",
    "username": "beautynala.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/4.jpg",
    "location": "Miami Beach, Florida",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/7.jpg"
    },
    "caption": "Shimmering moments",
    "likes": 12031,
    "timestamp": "2024/12/20",
    "comments": [
      { "username": "faye80", "text": "✨✨✨" },
      { "username": "faye42", "text": "Glowing!!!" },
      { "username": "ella78", "text": "WOW!" },
      { "username": "dylan.78", "text": "😍😍😍😍😍😍😍" },
      { "username": "amy_11", "text": "Stunning!" },
      { "username": "candy17", "text": "👑 Miami nights" },
      { "username": "nate.17", "text": "✨ Absolutely radiant" },
      { "username": "sara_18", "text": "💕💕💕💕💕💕💕" },
      { "username": "kevin09", "text": "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥" },
      { "username": "mia24", "text": "GORGEOUS!!!!!!" }
    ]
  },
  {
    "id": "8",
    "username": "beautynala.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/4.jpg",
    "location": "Aspen, Colorado",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/8.jpg"
    },
    "caption": "HBD to me! Celebrating another year of luxury and success in style.",
    "likes": 9724,
    "timestamp": "2024/11/15",
    "comments": [
      { "username": "zoe.11", "text": "👑👑👑" },
      { "username": "lily.04", "text": "Absolutely stunning 😍" },
      { "username": "dan.23", "text": "Happy birthday!! Keep shining 🎂✨" },
      { "username": "jake_2000", "text": "🎂 Happy birthday queen!" },
      { "username": "sophie_31", "text": "Stunning!!!" },
      { "username": "mia26", "text": "elegance💎💎💎" },
      { "username": "dylan.95", "text": "🌹🌹🌹🌹🌹🌹" },
      { "username": "sara.23", "text": "✨✨✨✨✨✨" },
      { "username": "zoe_60", "text": "HBD!" },
      { "username": "jess_08", "text": "🫶💕" }
    ]
  },
  {
    "id": "9",
    "username": "beautynala.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/4.jpg",
    "location": "Chicago, Illinois",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_wealth/fs/9.jpg"
    },
    "caption": "got this custom piece from @velvetatelier love it a little too much 🤍",
    "likes": 9962,
    "timestamp": "2024/10/15",
    "comments": [
      { "username": "ben.70", "text": "Queen 💗🖤" },
      { "username": "ivy_72", "text": "Elegance!!!" },
      { "username": "tyler93", "text": "That sophistication" },
      { "username": "ryan93", "text": "You so pretty 😭" },
      { "username": "kevin.39", "text": "Absolutely stunning!" },
      { "username": "dan.36", "text": "🔥🖤🔥🖤" },
      { "username": "luke.41", "text": "🤍🤍🤍🤍🤍🤍🤍🤍" },
      { "username": "matt.19", "text": "✨ So classy!!!" },
      { "username": "sara.68", "text": "Never stop shining🔥❤️" },
      { "username": "mark12", "text": "👑 Icon energy" }
    ]
  }
];