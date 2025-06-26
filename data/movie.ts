// Types for movie data
export interface MovieCast {
  name: string;
  role: string;
  image: string;
}

export interface Movie {
  id: string;
  title: string;
  image: string;
  backdrop: string;
  rating: number;
  duration: string;
  releaseDate: string;
  genres: string[];
  languages: string[];
  description: string;
  director: string;
  cast: MovieCast[];
  trailerUrl: string;
  alignment: string;
}

// Featured movies data for the home page slider
export const featuredMovies = [
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    image: "/movies/dune-part-two/landscape.jpg",
    rating: 8.7,
    releaseDate: "March 1, 2024",
    alignment: "center",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  },
  {
    id: "the-batman",
    title: "The Batman",
    image: "/movies/the-batman/landscape.jpg",
    rating: 8.3,
    releaseDate: "March 4, 2022",
    alignment: "top center",
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    image: "/movies/oppenheimer/landscape.jpg",
    rating: 8.5,
    releaseDate: "July 21, 2023",
    alignment: "center",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },
  {
    id: "godzilla-kong",
    title: "Godzilla x Kong: The New Empire",
    image: "/movies/godzilla-kong/landscape.jpg",
    rating: 7.8,
    releaseDate: "March 29, 2024",
    alignment: "top center",
    description:
      "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins.",
  },
];

// Detailed movie data
export const moviesData: Record<string, Movie> = {
  "dune-part-two": {
    id: "dune-part-two",
    title: "Dune: Part Two",
    image: "/movies/dune-part-two/poster.jpg",
    backdrop: "/movies/dune-part-two/landscape.jpg",
    rating: 8.7,
    duration: "166 min",
    releaseDate: "March 1, 2024",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    languages: ["English", "Spanish", "French"],
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. As he begins a spiritual and martial journey to become a religious leader, he faces the ultimate choice between the love of his life and the fate of the universe.",
    director: "Denis Villeneuve",
    cast: [
      {
        name: "Timothée Chalamet",
        role: "Paul Atreides",
        image: "/cast/timothee.png",
      },
      {
        name: "Zendaya",
        role: "Chani",
        image: "/cast/zendaya.png",
      },
      {
        name: "Rebecca Ferguson",
        role: "Lady Jessica",
        image: "/cast/Rebecca-Ferguson.png",
      },
      {
        name: "Josh Brolin",
        role: "Gurney Halleck",
        image: "/cast/Josh-Brolin.png",
      },
      {
        name: "Javier Bardem",
        role: "Stilgar",
        image: "/cast/Javier-Bardem.png",
      },
      {
        name: "Jason Momoa",
        role: "Duncan Idaho",
        image: "/cast/Jason-Momoa.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
    alignment: "center",
  },
  "the-batman": {
    id: "the-batman",
    title: "The Batman",
    image: "/movies/the-batman/portrait.jpg",
    backdrop: "/movies/the-batman/landscape.jpg",
    rating: 8.3,
    duration: "176 min",
    releaseDate: "March 4, 2022",
    genres: ["Action", "Crime", "Drama"],
    languages: ["English"],
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    director: "Matt Reeves",
    cast: [
      {
        name: "Robert Pattinson",
        role: "Bruce Wayne / Batman",
        image: "/cast/Robert-Pattinson.png",
      },
      {
        name: "Zoë Kravitz",
        role: "Selina Kyle / Catwoman",
        image: "/cast/Zoë-Kravitz.png",
      },
      {
        name: "Paul Dano",
        role: "Edward Nashton / Riddler",
        image: "/cast/Paul-Dano.png",
      },
      {
        name: "Jeffrey Wright",
        role: "James Gordon",
        image: "/cast/Jeffrey-Wright.png",
      },
      {
        name: "Colin Farrell",
        role: "Oz Cobb / Penguin",
        image: "/cast/Colin-Farrell.png",
      },
      {
        name: "Andy Serkis",
        role: "Alfred Pennyworth",
        image: "/cast/Andy-Serkis.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/mqqft2x_Aa4",
    alignment: "top center",
  },
  oppenheimer: {
    id: "oppenheimer",
    title: "Oppenheimer",
    image: "/movies/oppenheimer/portrait.webp",
    backdrop: "/movies/oppenheimer/landscape.jpg",
    rating: 8.5,
    duration: "180 min",
    releaseDate: "July 21, 2023",
    genres: ["Biography", "Drama", "History"],
    languages: ["English"],
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. Exploring the ethical dilemmas and personal struggles he faced as the 'father of the atomic bomb'.",
    director: "Christopher Nolan",
    cast: [
      {
        name: "Cillian Murphy",
        role: "J. Robert Oppenheimer",
        image: "/cast/Cillian-Murphy.png",
      },
      {
        name: "Emily Blunt",
        role: "Katherine Oppenheimer",
        image: "/cast/Emily-Blunt.png",
      },
      {
        name: "Matt Damon",
        role: "Leslie Groves",
        image: "/cast/Matt-Damon.png",
      },
      {
        name: "Robert Downey Jr.",
        role: "Lewis Strauss",
        image: "/cast/Robert-Downey-Jr..png",
      },
      {
        name: "Florence Pugh",
        role: "Jean Tatlock",
        image: "/cast/Florence-Pugh.png",
      },
      {
        name: "Rami Malek",
        role: "Scientist",
        image: "/cast/Rami-Malek.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
    alignment: "center",
  },
  "godzilla-kong": {
    id: "godzilla-kong",
    title: "Godzilla x Kong: The New Empire",
    image: "/movies/godzilla-kong/poster.jpg",
    backdrop: "/movies/godzilla-kong/landscape.jpg",
    rating: 7.8,
    duration: "115 min",
    releaseDate: "March 29, 2024",
    genres: ["Action", "Sci-Fi", "Adventure"],
    languages: ["English"],
    description:
      "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island's mysteries. Together they face a colossal threat that challenges their existence and our own.",
    director: "Adam Wingard",
    cast: [
      {
        name: "Rebecca Hall",
        role: "Dr. Ilene Andrews",
        image: "/cast/Rebecca-Hall.png",
      },
      {
        name: "Millie Bobby Brown",
        role: "Madison Russell",
        image: "/cast/Millie-Bobby-Brown.png",
      },
      {
        name: "Brian Tyree Henry",
        role: "Bernie Hayes",
        image: "/cast/Brian-Tyree-Henry.png",
      },
      {
        name: "Dan Stevens",
        role: "Trapper",
        image: "/cast/Dan-Stevens.png",
      },
      {
        name: "Kaylee Hottle",
        role: "Jia",
        image: "/cast/Kaylee-Hottle.png",
      },
      {
        name: "Alex Ferns",
        role: "Mikael",
        image: "/cast/Alex-Ferns.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/odM92ap8_c0",
    alignment: "top center",
  },
  "kung-fu-panda-4": {
    id: "kung-fu-panda-4",
    title: "Kung Fu Panda 4",
    image: "/movies/kung-fu-panda-4/poster.jpg",
    backdrop: "/movies/kung-fu-panda-4/backdrop.jpg",
    rating: 7.3,
    duration: "94 min",
    releaseDate: "March 8, 2024",
    genres: ["Animation", "Comedy", "Action", "Adventure"],
    languages: ["English"],
    description:
      "Po is called upon to become the Spiritual Leader of the Valley of Peace. However, he needs to find and train a new Dragon Warrior before he can assume his new position, while a shape-shifting sorceress has her sights set on his Staff of Wisdom.",
    director: "Mike Mitchell",
    cast: [
      {
        name: "Jack Black",
        role: "Po (voice)",
        image: "/cast/Jack-Black.png",
      },
      {
        name: "Awkwafina",
        role: "Zhen (voice)",
        image: "/cast/Awkwafina.png",
      },
      {
        name: "Viola Davis",
        role: "Chameleon (voice)",
        image: "/cast/Viola-Davis.png",
      },
      {
        name: "Bryan Cranston",
        role: "Po's Birth Father (voice)",
        image: "/cast/Bryan-Cranston.png",
      },
      {
        name: "Dustin Hoffman",
        role: "Master Shifu (voice)",
        image: "/cast/Dustin-Hoffman.png",
      },
      {
        name: "James Hong",
        role: "Mr. Ping (voice)",
        image: "/cast/James-Hong.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/_inKs4eeHiI",
    alignment: "center",
  },
  "ghostbusters-frozen-empire": {
    id: "ghostbusters-frozen-empire",
    title: "Ghostbusters: Frozen Empire",
    image: "/movies/ghostbusters-frozen-empire/portrait.jpg",
    backdrop: "/movies/ghostbusters-frozen-empire/landscape.jpg",
    rating: 7.1,
    duration: "115 min",
    releaseDate: "March 22, 2024",
    genres: ["Comedy", "Fantasy", "Adventure", "Action"],
    languages: ["English"],
    description:
      "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second ice age.",
    director: "Gil Kenan",
    cast: [
      {
        name: "Paul Rudd",
        role: "Gary Grooberson",
        image: "/cast/Paul-Rudd.png",
      },
      {
        name: "Carrie Coon",
        role: "Callie Spengler",
        image: "/cast/Carrie-Coon.png",
      },
      {
        name: "Finn Wolfhard",
        role: "Trevor Spengler",
        image: "/cast/Finn-Wolfhard.png",
      },
      {
        name: "Mckenna Grace",
        role: "Phoebe Spengler",
        image: "/cast/Mckenna-Grace.png",
      },
      {
        name: "Bill Murray",
        role: "Dr. Peter Venkman",
        image: "/cast/Bill-Murray.png",
      },
      {
        name: "Dan Aykroyd",
        role: "Dr. Raymond Stantz",
        image: "/cast/Dan-Aykroyd.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/HpOBXh02rVc",
    alignment: "top center",
  },
  imaginary: {
    id: "imaginary",
    title: "Imaginary",
    image: "/movies/imaginary/poster.jpg",
    backdrop: "/movies/imaginary/backdrop.jpg",
    rating: 6.5,
    duration: "104 min",
    releaseDate: "March 8, 2024",
    genres: ["Horror", "Thriller", "Mystery"],
    languages: ["English"],
    description:
      "A woman returns to her childhood home to discover that the imaginary friend she left behind is very real and unhappy that she abandoned him.",
    director: "Jeff Wadlow",
    cast: [
      {
        name: "DeWanda Wise",
        role: "Jessica",
        image: "/cast/DeWanda-Wise.png",
      },
      {
        name: "Tom Payne",
        role: "Max",
        image: "/cast/Tom-Payne.png",
      },
      {
        name: "Taegen Burns",
        role: "Taylor",
        image: "/cast/Taegen-Burns.png",
      },
      {
        name: "Pyper Braun",
        role: "Alice",
        image: "/cast/Pyper-Braun.png",
      },
      {
        name: "Betty Buckley",
        role: "Gloria",
        image: "/cast/Betty-Buckley.png",
      },
      {
        name: "Veronica Falcón",
        role: "Dr. Soto",
        image: "/cast/Veronica-Falcón.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/08LkWklRzMc",
    alignment: "center",
  },
  "the-fall-guy": {
    id: "the-fall-guy",
    title: "The Fall Guy",
    image: "/movies/the-fall-guy/portrait.jpg",
    backdrop: "/movies/the-fall-guy/backdrop.jpg",
    rating: 7.9,
    duration: "126 min",
    releaseDate: "May 3, 2024",
    genres: ["Action", "Comedy", "Adventure"],
    languages: ["English"],
    description:
      "A stuntman is drawn back into service when a movie star goes missing, forcing him to use his unique skills to find the culprits and solve the mystery while falling in love with the film's director.",
    director: "David Leitch",
    cast: [
      {
        name: "Ryan Gosling",
        role: "Colt Seavers",
        image: "/cast/Ryan-Gosling.png",
      },
      {
        name: "Emily Blunt",
        role: "Jody Moreno",
        image: "/cast/Emily-Blunt.png",
      },
      {
        name: "Aaron Taylor-Johnson",
        role: "Tom Ryder",
        image: "/cast/Aaron-Taylor-Johnson.png",
      },
      {
        name: "Hannah Waddingham",
        role: "Gail Meyer",
        image: "/cast/Hannah-Waddingham.png",
      },
      {
        name: "Winston Duke",
        role: "Dan Tucker",
        image: "/cast/Winston-Duke.png",
      },
      {
        name: "Stephanie Hsu",
        role: "Alma",
        image: "/cast/Stephanie-Hsu.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/j7jPnwVGdZ8",
    alignment: "center",
  },
  "deadpool-wolverine": {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    image: "/movies/deadpool-wolverine/portrait.jpg",
    backdrop: "/movies/deadpool-wolverine/backdrop.jpg",
    rating: 9.0,
    duration: "127 min",
    releaseDate: "July 26, 2024",
    genres: ["Action", "Comedy", "Adventure", "Sci-Fi"],
    languages: ["English"],
    description:
      "Deadpool finds himself recruited by the Time Variance Authority to team up with Wolverine for a mission that could change the fate of the multiverse, leading to an unlikely partnership filled with action and irreverent humor.",
    director: "Shawn Levy",
    cast: [
      {
        name: "Ryan Reynolds",
        role: "Wade Wilson / Deadpool",
        image: "/cast/Ryan-Reynolds.png",
      },
      {
        name: "Hugh Jackman",
        role: "Logan / Wolverine",
        image: "/cast/Hugh-Jackman.png",
      },
      {
        name: "Emma Corrin",
        role: "Cassandra Nova",
        image: "/cast/Emma-Corrin.png",
      },
      {
        name: "Morena Baccarin",
        role: "Vanessa",
        image: "/cast/Morena-Baccarin.png",
      },
      {
        name: "Matthew Macfadyen",
        role: "Mr. Paradox",
        image: "/cast/Matthew-Macfadyen.png",
      },
      {
        name: "Rob Delaney",
        role: "Peter",
        image: "/cast/Rob-Delaney.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/fl64VLxQ3qI",
    alignment: "top center",
  },
  furiosa: {
    id: "furiosa",
    title: "Furiosa: A Mad Max Saga",
    image: "/movies/furiosa/portrait.jpg",
    backdrop: "/movies/furiosa/backdrop.jpg",
    rating: 8.5,
    duration: "148 min",
    releaseDate: "May 24, 2024",
    genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    languages: ["English"],
    description:
      "The origin story of renegade warrior Furiosa before her encounter with Max Rockatansky. Young Furiosa is kidnapped from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus.",
    director: "George Miller",
    cast: [
      {
        name: "Anya Taylor-Joy",
        role: "Furiosa",
        image: "/cast/Anya-Taylor-Joy.png",
      },
      {
        name: "Chris Hemsworth",
        role: "Dementus",
        image: "/cast/Chris-Hemsworth.png",
      },
      {
        name: "Tom Burke",
        role: "Jack",
        image: "/cast/Tom-Burke.png",
      },
      {
        name: "Alyla Browne",
        role: "Young Furiosa",
        image: "/cast/Alyla-Browne.png",
      },
      {
        name: "Lachy Hulme",
        role: "Immortan Joe / General Praetorian Jack",
        image: "/cast/Lachy-Hulme.png",
      },
      {
        name: "Charlee Fraser",
        role: "Mary Jabassa",
        image: "/cast/Charlee-Fraser.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/XJMuhwVlca4",
    alignment: "top center",
  },
  "inside-out-2": {
    id: "inside-out-2",
    title: "Inside Out 2",
    image: "/movies/inside-out-2/portrait.jpg",
    backdrop: "/movies/inside-out-2/backdrop.webp",
    rating: 8.2,
    duration: "96 min",
    releaseDate: "June 14, 2024",
    genres: ["Animation", "Comedy", "Adventure", "Family"],
    languages: ["English"],
    description:
      "As Riley enters her teenage years, her emotions face a major upheaval when new emotions arrive, including Anxiety, Envy, Ennui, and Embarrassment. Joy and the team must learn to work with these new emotions as Riley navigates the challenges of adolescence.",
    director: "Kelsey Mann",
    cast: [
      {
        name: "Ayo Edebiri",
        role: "Envy (voice)",
        image: "/cast/Ayo-Edebiri.png",
      },
      {
        name: "Maya Hawke",
        role: "Anxiety (voice)",
        image: "/cast/Maya-Hawke.png",
      },
      {
        name: "Kensington Tallman",
        role: "Riley (voice)",
        image: "/cast/Kensington-Tallman.png",
      },
      {
        name: "Liza Lapira",
        role: "Disgust (voice)",
        image: "/cast/Liza-Lapira.png",
      },
      {
        name: "Tony Hale",
        role: "Fear (voice)",
        image: "/cast/Tony-Hale.png",
      },
      {
        name: "Adèle Exarchopoulos",
        role: "Ennui (voice)",
        image: "/cast/Adèle-Exarchopoulos.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/LEjhY15eCx0",
    alignment: "bottom center",
  },
  "a-quiet-place-day-one": {
    id: "a-quiet-place-day-one",
    title: "A Quiet Place: Day One",
    image: "/movies/quite-place/portrait.jpg",
    backdrop: "/movies/quite-place/backdrop.jpg",
    rating: 7.8,
    duration: "104 min",
    releaseDate: "June 28, 2024",
    genres: ["Horror", "Sci-Fi", "Thriller"],
    languages: ["English"],
    description:
      "Experience the day the world went quiet. This prequel to the original films explores the beginning of the alien invasion that forced humanity to live in silence, focusing on the first day of the arrival in New York City.",
    director: "Michael Sarnoski",
    cast: [
      {
        name: "Lupita Nyong'o",
        role: "Sam",
        image: "/cast/Lupita-Nyong'o.png",
      },
      {
        name: "Joseph Quinn",
        role: "Eric",
        image: "/cast/Joseph-Quinn.png",
      },
      {
        name: "Alex Wolff",
        role: "Ethan",
        image: "/cast/Alex-Wolff.png",
      },
      {
        name: "Djimon Hounsou",
        role: "Paris",
        image: "/cast/Djimon-Hounsou.png",
      },
      {
        name: "Alexander John",
        role: "Priest",
        image: "/cast/Alexander-John.png",
      },
      {
        name: "Thea Butler",
        role: "Cameo",
        image: "/cast/Thea-Butler.png",
      },
    ],
    trailerUrl: "https://www.youtube.com/embed/YPY7J-flzE8",
    alignment: "top center",
  },
};

// Function to get movie details by ID
export function getMovieById(id: string): Movie {
  return (
    moviesData[id] || {
      id,
      title: "Movie Not Found",
      image:
        "/placeholder.svg?height=600&width=400&query=movie poster placeholder",
      backdrop:
        "/placeholder.svg?height=1080&width=1920&query=movie backdrop placeholder",
      rating: 0,
      duration: "N/A",
      releaseDate: "N/A",
      genres: [],
      languages: [],
      description: "Movie details not available.",
      director: "N/A",
      cast: [],
      trailerUrl: "",
      alignment: "center",
    }
  );
}

// Now showing movies data
export const nowShowingMovies = [
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    image: "/movies/dune-part-two/portrait.webp",
    rating: 8.7,
    duration: "166 min",
    genres: ["Sci-Fi", "Adventure"],
  },
  {
    id: "godzilla-kong",
    title: "Godzilla x Kong",
    image: "/movies/godzilla-kong/portrait.jpg",
    rating: 7.8,
    duration: "132 min",
    genres: ["Action", "Sci-Fi"],
  },
  {
    id: "kung-fu-panda-4",
    title: "Kung Fu Panda 4",
    image: "/movies/kung-fu-panda-4/portrait.jpg",
    rating: 7.3,
    duration: "94 min",
    genres: ["Animation", "Comedy"],
  },
  {
    id: "ghostbusters-frozen-empire",
    title: "Ghostbusters: Frozen Empire",
    image: "/movies/ghostbusters-frozen-empire/portrait.jpg",
    rating: 7.1,
    duration: "115 min",
    genres: ["Comedy", "Fantasy"],
  },
  {
    id: "imaginary",
    title: "Imaginary",
    image: "/movies/imaginary/portrait.jpg",
    rating: 6.5,
    duration: "104 min",
    genres: ["Horror", "Thriller"],
  },
  {
    id: "the-fall-guy",
    title: "The Fall Guy",
    image: "/movies/the-fall-guy/portrait.jpg",
    rating: 7.9,
    duration: "126 min",
    genres: ["Action", "Comedy"],
  },
];

// Coming soon movies data
export const comingSoonMovies = [
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    image: "/movies/deadpool-wolverine/portrait.jpg",
    rating: 9.0,
    duration: "TBA",
    genres: ["Action", "Comedy"],
    releaseDate: "July 26, 2024",
  },
  {
    id: "furiosa",
    title: "Furiosa: A Mad Max Saga",
    image: "/movies/furiosa/portrait.jpg",
    rating: 8.5,
    duration: "148 min",
    genres: ["Action", "Adventure"],
    releaseDate: "May 24, 2024",
  },
  {
    id: "inside-out-2",
    title: "Inside Out 2",
    image: "/movies/inside-out-2/portrait.jpg",
    rating: 8.2,
    duration: "TBA",
    genres: ["Animation", "Comedy"],
    releaseDate: "June 14, 2024",
  },
  {
    id: "a-quiet-place-day-one",
    title: "A Quiet Place: Day One",
    image: "/movies/quite-place/portrait.jpg",
    rating: 7.8,
    duration: "TBA",
    genres: ["Horror", "Sci-Fi"],
    releaseDate: "June 28, 2024",
  },
];
