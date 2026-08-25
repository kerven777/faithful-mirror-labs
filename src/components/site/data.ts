export type Schedule = "mwf" | "tts";
export type Shift = "morning" | "afternoon" | "evening";
export type Audience = "kids" | "adults";
export type Level = "Beginner" | "Elementary" | "Pre-intermediate" | "Intermediate" | "Upper-intermediate" | "Advanced" | "Toefl";

export type Course = {
  id: number;
  title: string;
  level: Level;
  audience: Audience;
  schedule: Schedule;
  shift: Shift;
  price: number;
  teacher: string;
  image: string;
};

const COVERS = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1497486751825-1233686f5d54?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=70",
];

export const TEACHERS: { name: string; years: number }[] = [
  { name: "Patma Mammetgulieva", years: 8 },
  { name: "Aysenem Begmyradova", years: 6 },
  { name: "Abdyrahym Agajykov", years: 10 },
  { name: "Myrat Amangulyyev", years: 7 },
  { name: "Muhammet Ballyyev", years: 9 },
  { name: "Kemal Nuryagdyyev", years: 12 },
  { name: "Dushmuhammet Mammedov", years: 5 },
  { name: "Maysa Nazarova", years: 6 },
  { name: "Myahri Allaberdiyeva", years: 4 },
  { name: "Merjen Akyyeva", years: 7 },
  { name: "Aylar Mehtiyeva", years: 5 },
  { name: "Shirin Basarova", years: 6 },
];

const RAW: [string, Level, Audience, Schedule, Shift, string][] = [
  ["Let's Go 2 for kids, Spring 26, Evening, MWF", "Beginner", "kids", "mwf", "evening", "Patma Mammetgulieva"],
  ["Let's Go 2 for kids, Spring 26, Afternoon, TTS", "Beginner", "kids", "tts", "afternoon", "Patma Mammetgulieva"],
  ["Oxford Phonics World 2 for kids, Spring 26, Evening, MWF", "Beginner", "kids", "mwf", "evening", "Aysenem Begmyradova"],
  ["Family and Friends 1 for kids, Spring 26, Evening, TTS", "Beginner", "kids", "tts", "evening", "Aysenem Begmyradova"],
  ["Headway Intermediate for adults, Spring 26, Morning, MWF", "Intermediate", "adults", "mwf", "morning", "Abdyrahym Agajykov"],
  ["Headway Intermediate for adults, Spring 26, Afternoon, MWF", "Intermediate", "adults", "mwf", "afternoon", "Myrat Amangulyyev"],
  ["Oxford Discover 2 for adults, Spring 26, Evening, MWF", "Elementary", "adults", "mwf", "evening", "Myrat Amangulyyev"],
  ["Headway Pre-Intermediate for adults, Spring 26, Evening, MWF", "Pre-intermediate", "adults", "mwf", "evening", "Muhammet Ballyyev"],
  ["Headway Beginner for adults, Spring 26, Evening, TTS", "Beginner", "adults", "tts", "evening", "Muhammet Ballyyev"],
  ["Headway Intermediate for adults, Spring 26, Evening, MWF", "Intermediate", "adults", "mwf", "evening", "Kemal Nuryagdyyev"],
  ["Headway Elementary for adults, Spring 26, Afternoon, MWF", "Elementary", "adults", "mwf", "afternoon", "Kemal Nuryagdyyev"],
  ["Headway Upper-Intermediate, Spring 26, Afternoon, TTS", "Upper-intermediate", "adults", "tts", "afternoon", "Kemal Nuryagdyyev"],
  ["Oxford Discover 1 for adults, Spring 26, Afternoon, MWF", "Elementary", "adults", "mwf", "afternoon", "Dushmuhammet Mammedov"],
  ["Oxford Discover 3 for adults, Spring 26, Morning, TTS", "Pre-intermediate", "adults", "tts", "morning", "Dushmuhammet Mammedov"],
  ["English File Intermediate plus, Spring 26, Evening, MWF", "Upper-intermediate", "adults", "mwf", "evening", "Dushmuhammet Mammedov"],
  ["Oxford Phonics World 2 for kids, Spring 26, Evening, TTS", "Beginner", "kids", "tts", "evening", "Maysa Nazarova"],
  ["Oxford Discover 2 for adults, Spring 26, Morning, MWF", "Elementary", "adults", "mwf", "morning", "Maysa Nazarova"],
  ["Family and Friends 1 for kids, Spring 26, Afternoon, MWF", "Beginner", "kids", "mwf", "afternoon", "Maysa Nazarova"],
  ["Headway Pre-Intermediate, Spring 26, Morning, TTS", "Pre-intermediate", "adults", "tts", "morning", "Myahri Allaberdiyeva"],
  ["Headway Elementary for adults, Spring 26, Evening, TTS", "Elementary", "adults", "tts", "evening", "Merjen Akyyeva"],
  ["TOEFL Preparation, Spring 26", "Toefl", "adults", "mwf", "evening", "Aylar Mehtiyeva"],
  ["Headway Elementary, Spring 26, Morning, TTS", "Elementary", "adults", "tts", "morning", "Shirin Basarova"],
];

export const COURSES: Course[] = RAW.map(([title, level, audience, schedule, shift, teacher], i) => ({
  id: i + 1,
  title,
  level,
  audience,
  schedule,
  shift,
  teacher,
  price: title.includes("TOEFL") ? 4400 : 2200,
  image: COVERS[i % COVERS.length],
}));
