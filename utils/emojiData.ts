export interface EmojiData {
  name: string;
  emoji: string;
  keywords: string[];
}

export const emojiDatabase: EmojiData[] = [
  // Smileys & Emotion
  { name: "grinning", emoji: "😀", keywords: ["happy", "smile", "grin"] },
  {
    name: "grinning_face_with_big_eyes",
    emoji: "😃",
    keywords: ["happy", "smile", "joy"],
  },
  {
    name: "grinning_face_with_smiling_eyes",
    emoji: "😄",
    keywords: ["happy", "smile", "joy"],
  },
  {
    name: "beaming_face_with_smiling_eyes",
    emoji: "😁",
    keywords: ["happy", "smile", "grin"],
  },
  {
    name: "grinning_squinting_face",
    emoji: "😆",
    keywords: ["happy", "laugh", "haha"],
  },
  {
    name: "grinning_face_with_sweat",
    emoji: "😅",
    keywords: ["happy", "sweat", "relief"],
  },
  {
    name: "rolling_on_the_floor_laughing",
    emoji: "🤣",
    keywords: ["laugh", "rofl", "lol"],
  },
  {
    name: "face_with_tears_of_joy",
    emoji: "😂",
    keywords: ["laugh", "cry", "tears"],
  },
  { name: "slightly_smiling_face", emoji: "🙂", keywords: ["smile", "happy"] },
  { name: "upside_down_face", emoji: "🙃", keywords: ["silly", "sarcasm"] },
  {
    name: "melting_face",
    emoji: "🫠",
    keywords: ["melt", "hot", "embarrassed"],
  },
  { name: "winking_face", emoji: "😉", keywords: ["wink", "flirt"] },
  {
    name: "smiling_face_with_smiling_eyes",
    emoji: "😊",
    keywords: ["happy", "blush"],
  },
  {
    name: "smiling_face_with_halo",
    emoji: "😇",
    keywords: ["angel", "innocent"],
  },
  {
    name: "smiling_face_with_hearts",
    emoji: "🥰",
    keywords: ["love", "hearts", "adore"],
  },
  {
    name: "smiling_face_with_heart_eyes",
    emoji: "😍",
    keywords: ["love", "heart", "eyes"],
  },
  { name: "star_struck", emoji: "🤩", keywords: ["star", "eyes", "excited"] },
  { name: "face_blowing_a_kiss", emoji: "😘", keywords: ["kiss", "love"] },
  { name: "kissing_face", emoji: "😗", keywords: ["kiss"] },
  {
    name: "kissing_face_with_closed_eyes",
    emoji: "😚",
    keywords: ["kiss", "closed", "eyes"],
  },
  {
    name: "kissing_face_with_smiling_eyes",
    emoji: "😙",
    keywords: ["kiss", "smile"],
  },
  {
    name: "smiling_face_with_tear",
    emoji: "🥲",
    keywords: ["happy", "cry", "tear"],
  },
  {
    name: "face_savoring_food",
    emoji: "😋",
    keywords: ["yum", "tasty", "delicious"],
  },
  { name: "face_with_tongue", emoji: "😛", keywords: ["tongue", "silly"] },
  {
    name: "winking_face_with_tongue",
    emoji: "😜",
    keywords: ["wink", "tongue", "silly"],
  },
  { name: "zany_face", emoji: "🤪", keywords: ["crazy", "silly", "goofy"] },
  {
    name: "squinting_face_with_tongue",
    emoji: "😝",
    keywords: ["tongue", "silly"],
  },
  {
    name: "money_mouth_face",
    emoji: "🤑",
    keywords: ["money", "rich", "dollar"],
  },
  {
    name: "smiling_face_with_open_hands",
    emoji: "🤗",
    keywords: ["hug", "embrace"],
  },
  {
    name: "face_with_hand_over_mouth",
    emoji: "🤭",
    keywords: ["oops", "secret"],
  },
  {
    name: "face_with_open_eyes_and_hand_over_mouth",
    emoji: "🫢",
    keywords: ["gasp", "shock"],
  },
  { name: "face_with_peeking_eye", emoji: "🫣", keywords: ["peek", "shy"] },
  { name: "shushing_face", emoji: "🤫", keywords: ["shh", "quiet", "secret"] },
  { name: "thinking_face", emoji: "🤔", keywords: ["think", "hmm"] },
  { name: "saluting_face", emoji: "🫡", keywords: ["salute", "respect"] },
  {
    name: "zipper_mouth_face",
    emoji: "🤐",
    keywords: ["zip", "quiet", "secret"],
  },
  {
    name: "face_with_raised_eyebrow",
    emoji: "🤨",
    keywords: ["suspicious", "doubt"],
  },
  { name: "neutral_face", emoji: "😐", keywords: ["neutral", "meh"] },
  {
    name: "expressionless_face",
    emoji: "😑",
    keywords: ["blank", "expressionless"],
  },
  {
    name: "face_without_mouth",
    emoji: "😶",
    keywords: ["quiet", "speechless"],
  },
  { name: "dotted_line_face", emoji: "🫥", keywords: ["invisible", "empty"] },
  { name: "face_in_clouds", emoji: "😶‍🌫️", keywords: ["confused", "lost"] },
  { name: "smirking_face", emoji: "😏", keywords: ["smirk", "smug"] },
  { name: "unamused_face", emoji: "😒", keywords: ["unamused", "meh"] },
  {
    name: "face_with_rolling_eyes",
    emoji: "🙄",
    keywords: ["eye", "roll", "annoyed"],
  },
  { name: "grimacing_face", emoji: "😬", keywords: ["grimace", "awkward"] },
  { name: "face_exhaling", emoji: "😮‍💨", keywords: ["sigh", "relief"] },
  { name: "lying_face", emoji: "🤥", keywords: ["lie", "pinocchio"] },
  { name: "shaking_face", emoji: "🫨", keywords: ["shake", "震える"] },
  { name: "relieved_face", emoji: "😌", keywords: ["relief", "calm"] },
  { name: "pensive_face", emoji: "😔", keywords: ["sad", "pensive"] },
  { name: "sleepy_face", emoji: "😪", keywords: ["sleepy", "tired"] },
  { name: "drooling_face", emoji: "🤤", keywords: ["drool", "hungry"] },
  { name: "sleeping_face", emoji: "😴", keywords: ["sleep", "zzz"] },
  { name: "face_with_medical_mask", emoji: "😷", keywords: ["mask", "sick"] },
  { name: "face_with_thermometer", emoji: "🤒", keywords: ["sick", "fever"] },
  {
    name: "face_with_head_bandage",
    emoji: "🤕",
    keywords: ["hurt", "injured"],
  },
  { name: "nauseated_face", emoji: "🤢", keywords: ["sick", "nausea"] },
  { name: "face_vomiting", emoji: "🤮", keywords: ["vomit", "sick"] },
  { name: "sneezing_face", emoji: "🤧", keywords: ["sneeze", "sick"] },
  { name: "hot_face", emoji: "🥵", keywords: ["hot", "sweat"] },
  { name: "cold_face", emoji: "🥶", keywords: ["cold", "freeze"] },
  { name: "woozy_face", emoji: "🥴", keywords: ["dizzy", "drunk"] },
  {
    name: "face_with_crossed_out_eyes",
    emoji: "😵",
    keywords: ["dead", "knocked"],
  },
  {
    name: "face_with_spiral_eyes",
    emoji: "😵‍💫",
    keywords: ["dizzy", "confused"],
  },
  {
    name: "exploding_head",
    emoji: "🤯",
    keywords: ["mind", "blown", "shocked"],
  },
  { name: "cowboy_hat_face", emoji: "🤠", keywords: ["cowboy", "hat"] },
  { name: "partying_face", emoji: "🥳", keywords: ["party", "celebrate"] },
  { name: "disguised_face", emoji: "🥸", keywords: ["disguise", "glasses"] },
  {
    name: "smiling_face_with_sunglasses",
    emoji: "😎",
    keywords: ["cool", "sunglasses"],
  },
  { name: "nerd_face", emoji: "🤓", keywords: ["nerd", "glasses"] },
  { name: "face_with_monocle", emoji: "🧐", keywords: ["monocle", "fancy"] },
  { name: "confused_face", emoji: "😕", keywords: ["confused", "sad"] },
  { name: "face_with_diagonal_mouth", emoji: "🫤", keywords: ["meh", "unsure"] },
  { name: "worried_face", emoji: "😟", keywords: ["worried", "concerned"] },
  { name: "slightly_frowning_face", emoji: "🙁", keywords: ["frown", "sad"] },
  { name: "frowning_face", emoji: "☹️", keywords: ["frown", "sad"] },
  { name: "face_with_open_mouth", emoji: "😮", keywords: ["surprise", "wow"] },
  { name: "hushed_face", emoji: "😯", keywords: ["quiet", "surprise"] },
  { name: "astonished_face", emoji: "😲", keywords: ["astonished", "shock"] },
  { name: "flushed_face", emoji: "😳", keywords: ["blush", "embarrassed"] },
  {
    name: "pleading_face",
    emoji: "🥺",
    keywords: ["pleading", "puppy", "eyes"],
  },
  {
    name: "face_holding_back_tears",
    emoji: "🥹",
    keywords: ["tears", "emotional"],
  },
  {
    name: "frowning_face_with_open_mouth",
    emoji: "😦",
    keywords: ["frown", "open"],
  },
  { name: "anguished_face", emoji: "😧", keywords: ["anguish", "pain"] },
  { name: "fearful_face", emoji: "😨", keywords: ["fear", "scared"] },
  {
    name: "anxious_face_with_sweat",
    emoji: "😰",
    keywords: ["anxious", "sweat"],
  },
  { name: "sad_but_relieved_face", emoji: "😥", keywords: ["sad", "relief"] },
  { name: "crying_face", emoji: "😢", keywords: ["cry", "sad", "tear"] },
  { name: "loudly_crying_face", emoji: "😭", keywords: ["cry", "sob", "bawl"] },
  { name: "face_screaming_in_fear", emoji: "😱", keywords: ["scream", "fear"] },
  { name: "confounded_face", emoji: "😖", keywords: ["confounded", "pain"] },
  {
    name: "persevering_face",
    emoji: "😣",
    keywords: ["persevere", "struggle"],
  },
  { name: "disappointed_face", emoji: "😞", keywords: ["disappointed", "sad"] },
  { name: "downcast_face_with_sweat", emoji: "😓", keywords: ["sweat", "sad"] },
  { name: "weary_face", emoji: "😩", keywords: ["weary", "tired"] },
  { name: "tired_face", emoji: "😫", keywords: ["tired", "exhausted"] },
  { name: "yawning_face", emoji: "🥱", keywords: ["yawn", "tired", "bored"] },
  {
    name: "face_with_steam_from_nose",
    emoji: "😤",
    keywords: ["steam", "angry"],
  },
  { name: "enraged_face", emoji: "😡", keywords: ["angry", "mad", "rage"] },
  { name: "pouting_face", emoji: "😠", keywords: ["angry", "mad"] },
  {
    name: "face_with_symbols_on_mouth",
    emoji: "🤬",
    keywords: ["swear", "curse"],
  },
  { name: "smiling_face_with_horns", emoji: "😈", keywords: ["devil", "evil"] },
  { name: "angry_face_with_horns", emoji: "👿", keywords: ["devil", "angry"] },
  { name: "skull", emoji: "💀", keywords: ["death", "skull"] },
  { name: "skull_and_crossbones", emoji: "☠️", keywords: ["death", "danger"] },

  // People & Body
  { name: "waving_hand", emoji: "👋", keywords: ["wave", "hello", "hi"] },
  { name: "raised_back_of_hand", emoji: "🤚", keywords: ["hand", "stop"] },
  {
    name: "hand_with_fingers_splayed",
    emoji: "🖐️",
    keywords: ["hand", "five"],
  },
  { name: "raised_hand", emoji: "✋", keywords: ["hand", "stop"] },
  { name: "vulcan_salute", emoji: "🖖", keywords: ["spock", "vulcan"] },
  { name: "rightwards_hand", emoji: "🫱", keywords: ["hand", "right"] },
  { name: "leftwards_hand", emoji: "🫲", keywords: ["hand", "left"] },
  { name: "palm_down_hand", emoji: "🫳", keywords: ["hand", "palm", "down"] },
  { name: "palm_up_hand", emoji: "🫴", keywords: ["hand", "palm", "up"] },
  { name: "ok_hand", emoji: "👌", keywords: ["ok", "okay", "perfect"] },
  { name: "pinched_fingers", emoji: "🤌", keywords: ["pinch", "italian"] },
  { name: "pinching_hand", emoji: "🤏", keywords: ["small", "tiny"] },
  { name: "victory_hand", emoji: "✌️", keywords: ["peace", "victory"] },
  { name: "crossed_fingers", emoji: "🤞", keywords: ["luck", "hope"] },
  {
    name: "hand_with_index_finger_and_thumb_crossed",
    emoji: "🫰",
    keywords: ["love", "heart"],
  },
  { name: "love_you_gesture", emoji: "🤟", keywords: ["love", "you"] },
  { name: "sign_of_the_horns", emoji: "🤘", keywords: ["rock", "metal"] },
  { name: "call_me_hand", emoji: "🤙", keywords: ["call", "phone"] },
  {
    name: "backhand_index_pointing_left",
    emoji: "👈",
    keywords: ["point", "left"],
  },
  {
    name: "backhand_index_pointing_right",
    emoji: "👉",
    keywords: ["point", "right"],
  },
  {
    name: "backhand_index_pointing_up",
    emoji: "👆",
    keywords: ["point", "up"],
  },
  { name: "middle_finger", emoji: "🖕", keywords: ["middle", "finger"] },
  {
    name: "backhand_index_pointing_down",
    emoji: "👇",
    keywords: ["point", "down"],
  },
  { name: "index_pointing_up", emoji: "☝️", keywords: ["point", "up"] },
  {
    name: "index_pointing_at_the_viewer",
    emoji: "🫵",
    keywords: ["point", "you"],
  },
  { name: "thumbs_up", emoji: "👍", keywords: ["thumbs", "up", "good", "yes"] },
  {
    name: "thumbs_down",
    emoji: "👎",
    keywords: ["thumbs", "down", "bad", "no"],
  },
  { name: "raised_fist", emoji: "✊", keywords: ["fist", "power"] },
  { name: "oncoming_fist", emoji: "👊", keywords: ["fist", "punch"] },
  { name: "left_facing_fist", emoji: "🤛", keywords: ["fist", "left"] },
  { name: "right_facing_fist", emoji: "🤜", keywords: ["fist", "right"] },
  { name: "clapping_hands", emoji: "👏", keywords: ["clap", "applause"] },
  { name: "raising_hands", emoji: "🙌", keywords: ["raise", "celebration"] },
  { name: "heart_hands", emoji: "🫶", keywords: ["heart", "love"] },
  { name: "open_hands", emoji: "👐", keywords: ["open", "hug"] },
  { name: "palms_up_together", emoji: "🤲", keywords: ["pray", "please"] },
  { name: "handshake", emoji: "🤝", keywords: ["shake", "deal"] },
  { name: "folded_hands", emoji: "🙏", keywords: ["pray", "thank", "please"] },

  // Animals & Nature
  { name: "dog_face", emoji: "🐶", keywords: ["dog", "puppy"] },
  { name: "cat_face", emoji: "🐱", keywords: ["cat", "kitten"] },
  { name: "mouse_face", emoji: "🐭", keywords: ["mouse"] },
  { name: "hamster_face", emoji: "🐹", keywords: ["hamster"] },
  { name: "rabbit_face", emoji: "🐰", keywords: ["rabbit", "bunny"] },
  { name: "fox_face", emoji: "🦊", keywords: ["fox"] },
  { name: "bear_face", emoji: "🐻", keywords: ["bear"] },
  { name: "panda_face", emoji: "🐼", keywords: ["panda"] },
  { name: "koala", emoji: "🐨", keywords: ["koala"] },
  { name: "tiger_face", emoji: "🐯", keywords: ["tiger"] },
  { name: "lion_face", emoji: "🦁", keywords: ["lion"] },
  { name: "cow_face", emoji: "🐮", keywords: ["cow"] },
  { name: "pig_face", emoji: "🐷", keywords: ["pig"] },
  { name: "pig_nose", emoji: "🐽", keywords: ["pig", "nose"] },
  { name: "frog_face", emoji: "🐸", keywords: ["frog"] },
  { name: "monkey_face", emoji: "🐵", keywords: ["monkey"] },
  {
    name: "see_no_evil_monkey",
    emoji: "🙈",
    keywords: ["monkey", "see", "no", "evil"],
  },
  {
    name: "hear_no_evil_monkey",
    emoji: "🙉",
    keywords: ["monkey", "hear", "no", "evil"],
  },
  {
    name: "speak_no_evil_monkey",
    emoji: "🙊",
    keywords: ["monkey", "speak", "no", "evil"],
  },

  // Food & Drink
  { name: "red_apple", emoji: "🍎", keywords: ["apple", "fruit"] },
  { name: "green_apple", emoji: "🍏", keywords: ["apple", "fruit", "green"] },
  { name: "pear", emoji: "🍐", keywords: ["pear", "fruit"] },
  { name: "tangerine", emoji: "🍊", keywords: ["orange", "tangerine"] },
  { name: "lemon", emoji: "🍋", keywords: ["lemon", "sour"] },
  { name: "banana", emoji: "🍌", keywords: ["banana", "fruit"] },
  { name: "watermelon", emoji: "🍉", keywords: ["watermelon", "fruit"] },
  { name: "grapes", emoji: "🍇", keywords: ["grapes", "fruit"] },
  { name: "strawberry", emoji: "🍓", keywords: ["strawberry", "fruit"] },
  { name: "melon", emoji: "🍈", keywords: ["melon", "cantaloupe"] },
  { name: "cherries", emoji: "🍒", keywords: ["cherry", "fruit"] },
  { name: "peach", emoji: "🍑", keywords: ["peach", "fruit"] },
  { name: "pineapple", emoji: "🍍", keywords: ["pineapple", "fruit"] },
  { name: "coconut", emoji: "🥥", keywords: ["coconut"] },
  { name: "kiwi_fruit", emoji: "🥝", keywords: ["kiwi", "fruit"] },
  { name: "tomato", emoji: "🍅", keywords: ["tomato"] },
  { name: "eggplant", emoji: "🍆", keywords: ["eggplant", "aubergine"] },
  { name: "avocado", emoji: "🥑", keywords: ["avocado"] },
  { name: "broccoli", emoji: "🥦", keywords: ["broccoli"] },
  { name: "leafy_greens", emoji: "🥬", keywords: ["lettuce", "greens"] },
  { name: "bell_pepper", emoji: "🫑", keywords: ["pepper", "bell"] },
  { name: "cucumber", emoji: "🥒", keywords: ["cucumber", "pickle"] },
  { name: "hot_pepper", emoji: "🌶️", keywords: ["pepper", "hot", "spicy"] },
  { name: "corn", emoji: "🌽", keywords: ["corn", "maize"] },
  { name: "carrot", emoji: "🥕", keywords: ["carrot"] },
  { name: "garlic", emoji: "🧄", keywords: ["garlic"] },
  { name: "onion", emoji: "🧅", keywords: ["onion"] },
  { name: "potato", emoji: "🥔", keywords: ["potato"] },
  { name: "sweet_potato", emoji: "🍠", keywords: ["sweet", "potato"] },

  // Activities
  {
    name: "soccer_ball",
    emoji: "⚽",
    keywords: ["soccer", "football", "ball"],
  },
  { name: "basketball", emoji: "🏀", keywords: ["basketball", "ball"] },
  {
    name: "american_football",
    emoji: "🏈",
    keywords: ["football", "american"],
  },
  { name: "baseball", emoji: "⚾", keywords: ["baseball", "ball"] },
  { name: "softball", emoji: "🥎", keywords: ["softball", "ball"] },
  { name: "tennis", emoji: "🎾", keywords: ["tennis", "ball"] },
  { name: "volleyball", emoji: "🏐", keywords: ["volleyball", "ball"] },
  { name: "rugby_football", emoji: "🏉", keywords: ["rugby", "ball"] },
  { name: "flying_disc", emoji: "🥏", keywords: ["frisbee", "disc"] },
  { name: "boomerang", emoji: "🪃", keywords: ["boomerang"] },
  { name: "8ball", emoji: "🎱", keywords: ["pool", "billiards", "eight"] },
  {
    name: "ping_pong",
    emoji: "🏓",
    keywords: ["ping", "pong", "table", "tennis"],
  },
  { name: "badminton", emoji: "🏸", keywords: ["badminton", "shuttlecock"] },
  { name: "hockey", emoji: "🏒", keywords: ["hockey", "ice"] },
  { name: "field_hockey", emoji: "🏑", keywords: ["hockey", "field"] },
  { name: "lacrosse", emoji: "🥍", keywords: ["lacrosse"] },
  { name: "cricket_game", emoji: "🏏", keywords: ["cricket", "bat"] },

  // Travel & Places
  { name: "car", emoji: "🚗", keywords: ["car", "automobile"] },
  { name: "taxi", emoji: "🚕", keywords: ["taxi", "cab"] },
  { name: "blue_car", emoji: "🚙", keywords: ["car", "blue"] },
  { name: "bus", emoji: "🚌", keywords: ["bus"] },
  { name: "trolleybus", emoji: "🚎", keywords: ["trolley", "bus"] },
  { name: "racing_car", emoji: "🏎️", keywords: ["race", "car", "fast"] },
  { name: "police_car", emoji: "🚓", keywords: ["police", "car"] },
  { name: "ambulance", emoji: "🚑", keywords: ["ambulance", "medical"] },
  { name: "fire_engine", emoji: "🚒", keywords: ["fire", "truck"] },
  { name: "minibus", emoji: "🚐", keywords: ["van", "minibus"] },
  { name: "truck", emoji: "🚚", keywords: ["truck", "delivery"] },
  { name: "articulated_lorry", emoji: "🚛", keywords: ["truck", "semi"] },
  { name: "tractor", emoji: "🚜", keywords: ["tractor", "farm"] },
  { name: "racing_motorcycle", emoji: "🏍️", keywords: ["motorcycle", "bike"] },
  { name: "motor_scooter", emoji: "🛵", keywords: ["scooter", "vespa"] },
  { name: "manual_wheelchair", emoji: "🦽", keywords: ["wheelchair"] },
  {
    name: "motorized_wheelchair",
    emoji: "🦼",
    keywords: ["wheelchair", "electric"],
  },
  { name: "auto_rickshaw", emoji: "🛺", keywords: ["rickshaw", "tuk"] },
  { name: "bicycle", emoji: "🚲", keywords: ["bike", "bicycle"] },
  { name: "kick_scooter", emoji: "🛴", keywords: ["scooter", "kick"] },
  { name: "skateboard", emoji: "🛹", keywords: ["skateboard", "skate"] },
  { name: "roller_skate", emoji: "🛼", keywords: ["roller", "skate"] },

  // Objects
  { name: "red_heart", emoji: "❤️", keywords: ["heart", "love", "red"] },
  { name: "orange_heart", emoji: "🧡", keywords: ["heart", "orange"] },
  { name: "yellow_heart", emoji: "💛", keywords: ["heart", "yellow"] },
  { name: "green_heart", emoji: "💚", keywords: ["heart", "green"] },
  { name: "blue_heart", emoji: "💙", keywords: ["heart", "blue"] },
  { name: "purple_heart", emoji: "💜", keywords: ["heart", "purple"] },
  { name: "brown_heart", emoji: "🤎", keywords: ["heart", "brown"] },
  { name: "black_heart", emoji: "🖤", keywords: ["heart", "black"] },
  { name: "grey_heart", emoji: "🩶", keywords: ["heart", "grey", "gray"] },
  { name: "white_heart", emoji: "🤍", keywords: ["heart", "white"] },
  { name: "pink_heart", emoji: "🩷", keywords: ["heart", "pink"] },
  {
    name: "light_blue_heart",
    emoji: "🩵",
    keywords: ["heart", "light", "blue"],
  },
  { name: "broken_heart", emoji: "💔", keywords: ["broken", "heart", "sad"] },
  {
    name: "heart_exclamation",
    emoji: "❣️",
    keywords: ["heart", "exclamation"],
  },
  { name: "two_hearts", emoji: "💕", keywords: ["hearts", "love"] },
  { name: "revolving_hearts", emoji: "💞", keywords: ["hearts", "revolving"] },
  { name: "beating_heart", emoji: "💓", keywords: ["heart", "beating"] },
  { name: "growing_heart", emoji: "💗", keywords: ["heart", "growing"] },
  { name: "sparkling_heart", emoji: "💖", keywords: ["heart", "sparkle"] },
  {
    name: "heart_with_arrow",
    emoji: "💘",
    keywords: ["heart", "arrow", "cupid"],
  },
  { name: "heart_with_ribbon", emoji: "💝", keywords: ["heart", "gift"] },
  { name: "heart_decoration", emoji: "💟", keywords: ["heart", "decoration"] },

  // Symbols
  { name: "fire", emoji: "🔥", keywords: ["fire", "hot", "lit"] },
  { name: "water_wave", emoji: "🌊", keywords: ["wave", "water", "ocean"] },
  { name: "snowflake", emoji: "❄️", keywords: ["snow", "cold", "winter"] },
  { name: "star", emoji: "⭐", keywords: ["star"] },
  { name: "glowing_star", emoji: "🌟", keywords: ["star", "glow"] },
  { name: "sparkles", emoji: "✨", keywords: ["sparkle", "magic"] },
  { name: "zap", emoji: "⚡", keywords: ["lightning", "electric"] },
  { name: "boom", emoji: "💥", keywords: ["explosion", "boom"] },
  { name: "comet", emoji: "☄️", keywords: ["comet", "space"] },
  { name: "sun", emoji: "☀️", keywords: ["sun", "sunny"] },
  { name: "sun_with_face", emoji: "🌞", keywords: ["sun", "face"] },
  { name: "moon", emoji: "🌙", keywords: ["moon", "crescent"] },
  { name: "full_moon_with_face", emoji: "🌝", keywords: ["moon", "face"] },
  { name: "rainbow", emoji: "🌈", keywords: ["rainbow", "pride"] },
  { name: "cloud", emoji: "☁️", keywords: ["cloud"] },
  { name: "umbrella", emoji: "☂️", keywords: ["umbrella", "rain"] },
  { name: "snowman", emoji: "⛄", keywords: ["snowman", "winter"] },

  // Common Discord-style shortcuts
  { name: "sob", emoji: "😭", keywords: ["sob", "cry", "bawl"] },
  { name: "joy", emoji: "😂", keywords: ["joy", "laugh", "tears"] },
  { name: "heart_eyes", emoji: "😍", keywords: ["heart", "eyes", "love"] },
  { name: "thinking", emoji: "🤔", keywords: ["think", "hmm"] },
  { name: "shrug", emoji: "🤷", keywords: ["shrug", "dunno"] },
  { name: "facepalm", emoji: "🤦", keywords: ["facepalm", "disappointed"] },
  { name: "pog", emoji: "😮", keywords: ["pog", "poggers", "surprise"] },
  { name: "kappa", emoji: "😏", keywords: ["kappa", "smirk"] },
  { name: "pepehands", emoji: "😢", keywords: ["pepe", "sad", "cry"] },
  { name: "monkas", emoji: "😰", keywords: ["monkas", "nervous", "sweat"] },
  { name: "omegalul", emoji: "😂", keywords: ["omega", "lul", "laugh"] },
  { name: "sadge", emoji: "😔", keywords: ["sadge", "sad"] },
  { name: "copium", emoji: "😤", keywords: ["copium", "cope"] },
  { name: "hopium", emoji: "😌", keywords: ["hopium", "hope"] },
];

export function searchEmojis(query: string, limit: number = 10): EmojiData[] {
  if (!query || query.length === 0) {
    return emojiDatabase.slice(0, limit);
  }

  const normalizedQuery = query.toLowerCase();

  // Score emojis based on relevance
  const scored = emojiDatabase.map((emoji) => {
    let score = 0;

    // Exact name match gets highest score
    if (emoji.name === normalizedQuery) {
      score += 100;
    }

    // Name starts with query
    if (emoji.name.startsWith(normalizedQuery)) {
      score += 50;
    }

    // Name contains query
    if (emoji.name.includes(normalizedQuery)) {
      score += 25;
    }

    // Keywords match
    for (const keyword of emoji.keywords) {
      if (keyword === normalizedQuery) {
        score += 75;
      } else if (keyword.startsWith(normalizedQuery)) {
        score += 35;
      } else if (keyword.includes(normalizedQuery)) {
        score += 15;
      }
    }

    return { ...emoji, score };
  });

  // Filter out non-matching emojis and sort by score
  return scored
    .filter((emoji) => emoji.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
