// import jordan_mp3 from '../podcast/elzat_podcast.mp3';
// import elzat_mp3 from '../podcast/elzat_podcast.mp3';

export const fillerPodcastData = 
{
    id: null,
    title: "Podcast In Process...",
    keywordList: [],
    guestSpeaker: "",
    education: "",
    about: "",
    cssClassName: "anonymous-img-container",
    keywords: [],
    contentLength: 0
}

export const podcastData = [
    {
        id: 1,
        title: "Ep 1. Career in Data Analytics",
        keywordList: ["data analyst", "data", "analyst", "career"],
        guestSpeaker: "Elzat Imam",
        education: "University of Toronto, BASc, Mechanical Engineering",
        about: "Data Analyst career, resume, interview prep, along with practical ways of finding the right career for your interests.",
        cssClassName: "cibc-img-container",
        keywords: ["Data Analytics", "Banking"],
        contentLength: 77
    },
    {
        id: 2,
        title: "Ep 2. Highschool to University Transition",
        keywordList: ["highschool", "university", "school", "business", "schulich"],
        guestSpeaker: "Vincent Mastromatteo",
        education: "Schulich School of Business, BBA, International Business Administration",
        about: "Highschool to university transitions, university applications, as well practical tips for secondary and post secondary students.",
        cssClassName: "hyundai-img-container",
        keywords: ["University", "Business"],
        contentLength: 75
    },
    {
        id: 3,
        title: "Ep 3. Accenture Consultant Experience",
        keywordList: ["highschool", "university", "consulting", "engineering", "data"],
        guestSpeaker: "Mason Li",
        education: "University of Toronto, BASc, Mechanical Engineering",
        about: "The Accenture journey, resume, interview prep, along with the importance of never ending learning as young professionals.",
        cssClassName: "accenture-img-container",
        keywords: ["University", "Engineering", "Consulting"],
        contentLength: 66
    },
    {
        id: 4,
        title: "Ep 4. Rotman Commerce Experience",
        keywordList: ["highschool", "university", "consulting", "engineering", "data"],
        guestSpeaker: "Heather Wang",
        education: "University of Toronto, BA, Rotman Commerce",
        about: "The Rotman Commerce journey, highschool decision making, university applications, as well Bell consultant & start-up experiences.",
        cssClassName: "heather-img-container",
        keywords: ["University", "Business", "Entrepreneurship", "Consulting"],
        contentLength: 52
    },
    {
        id: 5,
        title: "Ep 5. Double Degree, Business to CS",
        keywordList: ["highschool", "university", "engineering", "business"],
        guestSpeaker: "Jeremy Chiu",
        education: "University of Toronto, BASc, Mechanical Engineering",
        about: "The pursuit of 2nd bachelor's degree, value of passion in career, and the Microsoft Software Engineer experience.",
        cssClassName: "jeremy-img-container",
        keywords: ["University", "Engineering", "Entrepreneurship", "Business"],
        contentLength: 78
    }
];

export const podcastURL = {
    "Elzat Imam": 'https://s3.us-east-2.amazonaws.com/kylekim.io.podcast/elzat_podcast.mp3',
    "Mason Li": 'https://s3.us-east-2.amazonaws.com/kylekim.io.podcast/mason_podcast.mp3',
    "Greg Nisbet": '',
    "Vincent Mastromatteo": 'https://s3.us-east-2.amazonaws.com/kylekim.io.podcast/vincent_podcast.mp3',
    "Heather Wang": 'https://s3.us-east-2.amazonaws.com/kylekim.io.podcast/heather_podcast.mp3',
    "Jeremy Chiu": 'https://s3.us-east-2.amazonaws.com/kylekim.io.podcast/jeremy_podcast.mp3'
}

// match podcast id --> key notes
export const podcastKeynote = {
    "Elzat Imam": {
        keynote: [
            {
                section: "Host's Note",
                timestamp: "00:00:00 ~ 00:01:13",
                description: ["Host's introduction of the guest speaker Elzat, and the coverage of this podcast episode."]
            },
            {
                section: "Pre-Introduction",
                timestamp: "00:01:13 ~ 00:06:40",
                description: ["We talk about how we've been doing during the pandemic, work from home conditions, and the motivation behind the Millennial Podcast launch."]
            },
            {
                section: "Introduction",
                timestamp: "00:06:40 ~ 00:07:42",
                description: ["Elzat: I'm from University of Toronto, with Bachelor's degree in Mechanical Engineering. Currently working as a Data Analyst at a leading banking corporate, Advanced Analytics team."]
            },
            {
                section: "Current Role Details",
                timestamp: "00:07:42 ~ 00:15:09",
                description: ["Elzat: There's 4 major pillars in banking; 1. Personal banking, 2. Small business banking, 3. Corporate banking and 4. Capital markets.", "My team falls under personal banking, so we have the most amount of data with high revenue generation. We measure metrics related to personal banking, to make meanings out of data, plus visualization through dashboard.", "Examples include; branch performances, banking product sales. To put it in one setence, our team monitors the performance of every banking data across Canada."]
            },
            {
                section: "Typical Career Path",
                timestamp: "00:15:09 ~ 00:20:54",
                description: ["Elzat: We are a team of around 10 people size. Two sub-teams are Front End developers and Data Analysts.", "For Front End developers, most come from background in Computer Science and Computer Engineering.", "For Data Analyst side, majority come from Statistics background. In terms of their educational background, most come from University of Waterloo, as they have co-op system linked to my current employer."]
            },
            {
                section: "Walk us through your Career Progression",
                timestamp: "00:20:54 ~ 00:33:22",
                description: 
                [
                    "Elzat: My real work experience starts from 2nd year summer, where I worked as a research assistant. There, I realized research takes a different set of skills, which misaligned to my interests and passion.", 
                    "After 3rd year, during our PEY (Professional Experience Year), I worked as a Mechanical Engineering Intern at Autoliv (now known as Veoneer). Working for 12 months taught me so much about my interests and expertise. I loved presenting my ideas to management, and building dashboard to showcase trends within data. At this point, I knew I wanted to pursue Data Analytics career.", 
                    "After my 12 months co-op term, I worked as a Data Analyst Intern at RSA over the summer, working on insurance plannings.", 
                    "RSA 4 months internship was crutial for landing my current full-time career at a banking corporate. I later asked my manager on why they interviewed me, and told me it was due to the relevant previous experience I had at RSA."
                ]
            },
            {
                section: "Most Satisfying and Challenging Part of Your Work",
                timestamp: "00:33:22 ~ 00:43:53",
                description: ["Elzat: Most challenging part would be - finding the underlying problem within the given data. Many would think data analyst is all about building esthetic dashboards, and showcasing the crutial trends.", "But really, it's about finding the hidden problem within your dataset. Finding the underlying hidden problem is very hard, contributing to around 50% of the total work.", "The most satisfying part would be - high impact through contributing to major decision making process, and the instant gratification through the dashboard update."]
            },
            {
                section: "Resume Screening & Interview Preparation",
                timestamp: "00:43:53 ~ 01:02:25",
                description: ["First, the competition for even resume screening is furious. To have yourself stand out, put projects that are unique (meaning no typical Kaggle / python calculator projects from Udemy) and noble to your story.", "Interview preparation: We have 2.5 rounds, technical and behavioural parts. Technical is leetcode similarity. Behavioural is discussing about your past projects and work experiences.", "Surprisingly, we take huge emphasis on behavioural, how well you are able to explain your past projects. We really need this skillset in candidate as you will be working to solve business challenges, and will be required to speak with people with no technical domain knowledge."]
            },
            {
                section: "Previous Mistakes: What would you tell your past self?",
                timestamp: "01:02:25 ~ 01:10:41",
                description: ["Elzat: Consider the local economy and job market. Mechanical Engineering - sure it's a great profession, but in Canada there's not a lot of opportunities working on cutting edge mechanical tech.", "Find the balance between your interest, skillsets and market needs."]
            },
            {
                section: "Where do you see yourself in the next 10 years?",
                timestamp: "01:10:41 ~ 01:17:20",
                description: ["Elzat: I plan on getting a master's degree in advanced technology later in my career. I'm currently in the process of figuring out that specific field."]
            }
        ],
        podcastUrl: '',
        guestIntroduction: [
            ["One Line Summary", "Elzat Imam, the very first guest to the Millennial Podcast, and host Kyle Kim, discusses about the career progression in data analytics field, as well, practical tips on how one can find a well matching career to one's interest."]
        ]
    },
    "Mason Li": {
        keynote: [
            {
                section: "Pre-Introduction",
                timestamp: "00:00:00 ~ 00:01:26",
                description: ["We talk about how we've been up to lately, along with our gaming ventures."]
            },
            {
                section: "Introduction & Technical Role Discussion",
                timestamp: "00:01:26 ~ 00:05:30",
                description: 
                [
                    "Mason: I graduated from UofT, Mechanical Engineering on May 2019. I actually graduted a year earlier by doing a 4 months internship instead of the regular 16 months.", 
                    "After graduation, I was hired as a Consulting Analyst at Accenture, then joined the Accenture Applied Intelligence practice 3 months into joining the firm.",
                    "The main work I do is cloud migrationg and data engineering, digitizing client’s data technologies to save cost and upgrading their tech stack.",
                    "A lot of companies are in the cloud migration process, moving their on-premise data and technolgy to the cloud, with 3 main providers being Google, Amazon and Microsoft.", 
                    "At my team, we primarily use Microsoft’s Azure, and Spark for data ETL (Extract, Transform and Load)."
                ]
            },
            {
                section: "The Accenture Experience",
                timestamp: "00:05:30 ~ 00:15:11",
                description: 
                [
                    "Mason: To choose my specilizing field, I networked alot. I sent at minimum 10 emails per day to different managers to understand their team, and see if there’s anything I can learn and contribute.",
                    "The approach I took in choosing the right field was looking for challenging projects. I needed a field that is ocean-deep. This was Technology sector for me, plus I got basic training in coding back in my engineering undergraduate, so things aligned fairly well.",
                    "Reaching out to the right people (managers) is prerequisite for finding the right team. Once you join the team, it’s about finding the right mentors and taking projects you find useful, fullfilling and valuable.",
                    "This team matching process took 3 months. The length is justified, since as a new graduate, you are not an expert of any field.",
                    "In terms of other practices within Accenture, there's also Strategy, Marketing, Finance, Energy, Frontend and Mobile Development, to name a few."
                ]
            },
            {
                section: "9 to 5 Work Schedule",
                timestamp: "00:15:11 ~ 00:19:04",
                description: 
                [
                    "Mason: On average, the composition of my work hours is: 30% meeting, 70% coding (or task for your specific consulting practice).",
                    "For each technology project, the team has an Architect, who lays out the foundational design of the solution. Consulting Analysts come in as Junior Data Engineers and putting the pieces together.",
                    "For physical workplace, you are often at your client's site. Rarely you will find yourself at the Accenture office, since most of the times you are working on behalf of the client.",
                    "Work-life-balance is great at Accenture, the firm values job satisfaction a lot."
                ]
            },
            {
                section: "Typical Career Path",
                timestamp: "00:19:04 ~ 00:23:38",
                description: 
                [
                    "Educational background wise, it's very diverse. Psychology, Nuclear Engineering, Economics, Fine Arts, Micro-Biology ... etc.",
                    "The firm doesn't care too much of your formal background, but more on what have you done during school years, such as internships and other extracurricular activities.",
                    "First year at Accenture, you explore different options and find the practice that works best for you.",
                    "The fundamental characteristics of consulting allow this to happen. As a consultant, you come in as an expert of your client's specific needs. And your clients can come from any industry, such as Manufacturing, Energy, Health-care ... etc. Thus consulting firms are generally fine with diverse educational backgrounds.",
                    "Now, this doesn't mean you should study what-ever degree and what-ever extracurriculars during your undergraduate years. You should still prioritize on gaining business knowledge and consulting experience and internships which well-align with the general job requirement."
                ]
            },
            {
                section: "Walk us through your Career Progression",
                timestamp: "00:23:38 ~ 00:32:51",
                description: 
                [
                    "Mason: I didn’t think too much ahead or reach out to upper year students with different degrees like other peers. I decided my university program on the basis of media projection, and not informed by reality. It's not the best way, but it was the way I took.",
                    "I narrowed down my option to Engineering, as it is hard to get in, thus it must be good program. Within Engineering, I specifically chose Mechanical stream due to my surroundings, such as Iron Man series, super sonic jets, and passion for sport cars.",
                    "Later in my undergraduate studies, I realized you don’t get to do the Mechanical Engineering tasks described in the movies. One thing to note is that, I knew it wasn't a good fit for me, but I've seen others who found Mechanical Engineering jobs they enjoy, for which I truly admire.",
                    "How did I find myself pivoting into the consulting realm? The real inspiration came in 2nd year summer, where our team entered a design competition, building advanced keyboards for patients with disabilities. We won first place, and that overarching experience of engineering and building a business case around it ignited my passion for business and entreprenuership.", 
                    "Following the design competition, I joined UofT Hachery to further grow my business and entrepreneurial mindset.",
                    "After numerous networking and coffee chats, I knew consulting was the right field for me, it was a profession where you connect engineering with business case.",
                    "Accenture, being a leader of technology consulting, it fit my passion well. I researched through linkedin, viewing others who were hired at Accenture, and understood what it takes to work at a Consulting Firm. I joined numerous consulting clubs, case competitions, and this evidently allowed me to land a position at Accenture after graduation."
                ]
            },
            {
                section: "Resume Screening & Interview Preparation",
                timestamp: "00:32:51 ~ 00:39:25",
                description: 
                [
                    "Mason: First and foremost, find like minded people and pursue career goals together. Student club is the best way to do this.",
                    "For case interviews, I networked / talked with a lot of consultants who already landed a job, where they shared some great resources and textbooks that helped them land those positions. Case in point: bible of case competitions. It was also very helpful to practice case interviews through case competitions and mock intervies with friends.",
                    "For resume, there's a lot of resources available online for consultant resumes. Additionally, consulting firms are looking for ambitious, hardworking and well-organized individuals. In your resume, show evidence through combinations of; pro-bono consulting experience, staring your own start-up through hatchery, club leadership experiences, previous internships, while maintaining a decent grade.",
                ]
            },
            {
                section: "Previous Mistakes: What would you have done differently?",
                timestamp: "00:39:25 ~ 00:47:41",
                description: 
                [
                    "Mason: If I were to pick a mistake, it would be the ill informed decison making of my bachelor's degree. Perhaps I would've taken the joint program offerred at UWaterloo; Business Administration (Laurier) and Computer Science (Waterloo) Double Degree.",
                    "However, bare in mind that even if I had the choice to change my decision, I wouldn't change it. Because of my past decisions, I am here now. I want to emphasize that mistakes are okay to make, it's part of the trial and error process, and you will always end with knowledge and lessons gained.",
                    "As young professionals, all you have is raw potential, and its your goal to turn those potential to reality. Don't worry about mistakes, it's part of the life journey.",
                    "Also, making the wrong bachelor's degree decision doesn't matter too much for consulting career. Package your extracurricualrs and internships the right way, and companies looking for those expertise will find you."
                ]
            },
            {
                section: "Most Satisfying and Challenging Part of Your Work",
                timestamp: "00:47:41 ~ 00:53:30",
                description: 
                [
                    "Most Satisfying Part: I really enjoy the learning experience at Accenture. Once you join a team, you are expected to be promoted in 2 ~ 3 years. You will have to invest your own time learning and passing certifications. Of course, it can be challenging at times, but the opportunity to learn and grow with the firm has been both rewarding and enjoyable for me.",
                    "Most Challenging Part: Accenture is a big firm. Sometimes you are put on projects which you don't enjoy or value. Also the vast amount of options for specialization can confuse you at times as a beginner."
                ]
            },
            {
                section: "Where do you see yourself in the next 10 years?",
                timestamp: "00:53:30 ~ 01:06:41",
                description: 
                [
                    "Short Answer: I don’t know.",
                    "Long Answer: I don’t think anyone knows. But to keep myself in the right direction, I follow the two foundational statements. 1. Follow the path of most resistance (because usually is the most rewarding), and 2. Never stop learning. Every great inspiration comes from taking a leap of faith towards new opportunities, and when great opportunities exist, you should go for it.",
                    "As an example, if I never bothered to learn English, I would've never pursued a post-secondary education in Canada.", 
                    "If I never took the leap of faith in creating a start-up at UofT Hatchery, I wouldn’t have known about the field of business and entreprenuership.",
                    "If I never joined consulting clubs and networked with professionals, I wouldn’t have known about the field of consulting and join Accenture after graduation.",
                    "Great things in life comes after taking the great leap of faith.",                    
                    "Only through unpleasant present experiences, you will learn what is better for the next chapter of your life. It's completely okay for you to take a leap of faith, and know that you like / don't like certain things. At the end of the day, knowledge is what remains.",
                    "Time is the hottest currency at youth. We know that making mistakes only results in more knowledge. So stop waiting, and never stop learning."
                ]
            }
        ],
        podcastUrl: '',
        guestIntroduction: [
            ["One Line Summary", "Mason Li, the third guest to the Millennial Podcast, and host Kyle Kim, discusses about the guest's current responsibility and experience as a Consulting Analyst at Accenture, his career progression, as well resume and interview preparation tips. Near the end, we also dive a bit more philosophical about the importance of never ending learning, especially for young professionals and students."]
        ]
    },
    "Vincent Mastromatteo": {
        keynote: [
            {
                section: "Host's note",
                timestamp: "00:00:00 ~ 00:01:12",
                description: ["Host's introduction of the guest speaker Vincent, and the coverage of this podcast episode."]
            },
            {
                section: "Ramp-up talk",
                timestamp: "00:01:12 ~ 00:02:14",
                description: ["We talk about how fast the time flied by, and how much our lives have changed over the course of 5 years, including the surge of Among Us games during qurantine."]
            },
            {
                section: "When did you start thinking about university majors in general? And why Business major specifically?",
                timestamp: "00:02:14 ~ 00:06:32",
                description: 
                [
                    "In Gr 10, it started to cross my mind, I had a great teacher in Gr.10 Business class where my interest sparked.",
                    "In Gr 11, I was able to solidify my mind through the highschool co-op program, where I gained hands on experience.",
                    "To give more details about my highschool co-op experience, I was working at the school board’s (TCDSB) accounting office. It was a great hands-on way to figure out my passion and interest in business."
                ]
            },
            {
                section: "Why Schulich school of business?",
                timestamp: "00:06:32 ~ 00:08:19",
                description: [
                    "Two factors drew me to Schulich.",
                    "1. Abroad Exchange Program", 
                    "2. Additional Languages Studies", 
                    "To be specific, I was in the International Business Administration Program offerred at Schulich.",
                    "The International BA requires you to take another language and complete an exchange program abroad. Exchange program was great, can’t extend more."
                ]
            },
            {
                section: "Schulich application process",
                timestamp: "00:08:19 ~ 00:10:32",
                description: [
                    "You’re given a pre-recorded web cam question, given a few minutes to prepare your answer.",
                    "You are also asked to talk about your extracurricular activities, including work, volunteering, student clubs in high school.",
                    "Academics is of course taken into consideration.",
                    "In general, business schools look for a balance between academics and extracurriculars."
                ]
            },
            {
                section: "The most standing-out factor about your Schulich application",
                timestamp: "00:10:32 ~ 00:14:28",
                description: [
                    "Could have been the variety of extracurriculars I had.", 
                    "Schulich required for 6 extra curriculars. I was treasurer for student council, student debater at high school debate team, bookkeeper at Toronto public library, accounting co-op. For high school extracurriculars, keep a balance between practical skills and your personal interests.",
                    "One caveat to mention here, don't do extra curriculars because you are forced to, but do it for your own interest as well. Univeristy admissions team is keen enough to know whether you are truly passionate, or you are picking extracurriculars for pure admission purposes."
                ]
            },
            {
                section: "Highschool to university transition",
                timestamp: "00:14:28 ~ 00:21:20",
                description: [
                    "Grades will drop. Schulich grades on a bell curve. You are graded against your peers, and not necessarily the raw mark you earned. This was an eye-opener. It was a lot harder to gain good marks.", 
                    "Also focus on yourself, don’t always compare yourself against your peers.",
                    "One thing I did like about Schulich was the moderate class size (50 people). But still substantial independent work, there is no friendly reminder on tests, assignments from teachers like back in high school.",
                    "Midterms always sneak in faster than you think. ",
                    "Plot the whole schedule in advance, and midterm is mid October, just about a month after you start. In general, university is more independent study focused, so be mindful of scheduling your own study hours."
                ]
            },
            {
                section: "Studying tips",
                timestamp: "00:21:20 ~ 00:34:08",
                description: [
                    "1: Manage your time. I bought a wall calendar + day planner. Every month, I would go through the class syllabus and mark down tests, assignments, and other due dates. Biggest risk factor is not having enough time for deliverables.", 
                    "2: Do the readings in advance. Ideally, lectures should be supplementary knowledge. Let the reading in advance be the initial source of knowledge.",
                    "3: Find a good study group. Coordinate studying, solving assignments and past term tests together. This especially helps for cases where professors don't upload solution manuals, for which case you can form a group and devise your own solution manual. You could also check out-of-school resources which may have solution manuals.",
                    "4: Studying at library. York university library recommendation. Bronfman Business Library and Scott library.",
                    "5: Expect to have harder time. It will be harder than high school. Pick two out of the three following options; study sleep socialize. This expression is very real.",
                    "6: Study smart. Optimize your efforts, and make sure you are studying the right material. Generally speaking, problem sets and past term tests are more helpful than bluntly reading textbooks, though this depends on the nature of the course."
                ]
            },
            {
                section: "Pros and cons of Schulich business school experience",
                timestamp: "00:34:08 ~ 00:39:58",
                description: [
                    "Best part: Great classmates and friends. Professors are very accomplished, with a good mix of scholars and practitioners. As an example, business law taught by corporate lawyers.", 
                    "Disliked part: Stress. Schulich is a very intensive program. The program will push you. The course itself isn’t rocket science, but still requires a lot of workload. Keeping in mind that there's background work in extracurriculars as well.",
                    "Anxiety: In first year, every student thought they needed to be a first-year intern at a student association. Don’t compare yourself with others too much. Compare yourself with your past self."
                ]
            },
            {
                section: "Doubting your abilities",
                timestamp: "00:39:58 ~ 00:42:02",
                description: [
                    "Often times, I saw peers who'd become low in self-confidence when comparing with others.",
                    "While I agree that there are inherit differences in one's abilities, there's no doubt commitment and dedication play a major role in one's success.",
                    "Not surprisingly, the highly achieving students are usually of both, smart AND hard working individuals.",
                    "The way I view it - The inherit talent is the starting point of your journey, and where you end is determined by the sheer commitment and dedication.",
                    "One has no excuse on not being able to reach their highest potential."
                ]
            },
            {
                section: "The real meaning of the university degree and its name value",
                timestamp: "00:42:02 ~ 00:45:04",
                description: [
                    "Kyle: University grinds you through tough times, and lots of students would agree that information you gain during undergraduate years are barely used in the real workplace.", 
                    "How I view it is - I view it as a token of work ethics and conscientiousness. With the degree, people can recognize of your capabilities, hardwork and dedication, that they can rely on you for projects and other works of high impact.",
                    "Vincent: Agreed, though for accounting, I do believe in higher percentage of practical knowledge taught from school. In terms of name value, because of the hardship, the name value shines in the actual workforce. Schulich definitely has a good reputationn. In job hunt scenario, the name value has helped a lot of peers, including myself."
                ]
            },
            {
                section: "Extracurriculars",
                timestamp: "00:45:04 ~ 00:53:54",
                description: [
                    "I had a mix of both practical and social extracurriculars.", 
                    "Non-business extracurriculars: To build skills outside of business. York French Student Association.",
                    "Practical extracurriculars: York Varsity Moot Club (Law Club).",
                    "(Edit Note): Leverage courses outside of your major as well. Other extracurricular benefits are as follows:",
                    "1. Simulation of a real work experience (helps with interviews and internships)",
                    "2. Pursuit of interest (helps guiding thorugh your career decision making)"
                ]
            },
            {
                section: "Schulich abord exchange program",
                timestamp: "00:53:54 ~ 01:00:14",
                description: [
                    "3rd year, spent a semester in Lille, France. Took courses which could transfer back at York. Everything was phenomenal, chance to travel.", 
                    "I travelled across 10 different European country. It was also a new chapter in life, I get to live alone for a extended period of time.",
                    "Explore program: Month long French immersion program. It’s heavily subsidized if you are post-secondary student. You only pay for travel. Food housing are paid."
                ]
            },
            {
                section: "Career path after graduating from Schulich",
                timestamp: "01:00:14 ~ 01:03:44",
                description: [
                    "Options are almost limitless. Program has different specialists. Most popular is accounting, also count for CPA designation.", 
                    "Most are at Big 4, financial firm, data analytics, law school, and higher education in PhD and master's.",
                    "This was the other main reason in business, it wouldn’t really close any doors for the most part."
                ]
            },
            {
                section: "Tips for highschool and post-Secondary students",
                timestamp: "01:03:44 ~ 01:15:40",
                description: [
                    "To be practical minded when picking the major. Pick something that hits both interest and practical job market.", 
                    "University is not the only option, college programs and skill trades are just as great, more affordable and career oriented.",
                    "Keep stresses low, maintain your mental health.",
                    "If the pace is not right for you, feel free to take an extra year.",
                    "Switch majors if you want to. Better late than never. But do make sure you are on the right track and have plans for the future, when switching / droppint out."
                ]
            }
        ],
        podcastUrl: '',
        guestIntroduction: [
            ["One Line Summary", "Vincent Mastromatteo, the second guest to the Millennial Podcast, and host Kyle Kim, discusses about their highschool to university transition, the university experience, focusing more towards Schulich Business school, as well practical tips for highschool / university students in making the right life decisions, and staying on top of tasks."]
        ]
    },
    "Heather Wang": {
        keynote: [
            {
                section: "Introduction",
                timestamp: "00:00:00 ~ 00:01:02",
                description: 
                [
                    "Breif introduction of the guest speaker, Heather.",
                    "Heather: I'm currently a 4th year Rotman Commerce student, specializing in Marketing and Strategy within Management.",
                    "In past summer, I've interned at Bell Canada, as a customer experience consultant. Previous to Bell, I was part of a start-up for beauty product reviewing platform.",
                    "In my spare time, I play guitar and all things related to music. Excited to join the podcast as a speaker."
                ]
            },
            {
                section: "When did you start thinking about university majors in general? And why Business major specifically?",
                timestamp: "00:01:02 ~ 00:03:32",
                description: 
                [
                    "Heather: Starting Gr.11. I took intro to Economics (highschool course), which was super interesting. So at first, I wanted to major in economics. However, I later had a chance to speak with econ majors in university, and heard that there were a lot of writing and quantitative work - something I wasn't looking forward to. I then came across and grew interest in marketing and advertisement. From there I decided that BA in commerce would be the best fit for my interests and passion.",
                    "Overall, it was the courses, teachers and friends who were able to guide me towards the program I have interests and skilled at.",
                    "I also realized after doing science courses in highschool, STEM was not a right fit for me. Co-op is also another route to finding your passion."
                ]
            },
            {
                section: "Why Rotman Commerce specifically?",
                timestamp: "00:03:32 ~ 00:07:24",
                description: 
                [
                    "Heather: The reason is personal. I grew up in Beijing, and naturally grew favor towards big cities. Previous to university, I moved to Oakville, but I anticipated to be back in a big city to regain the city livelihood at some point.",
                    "In addition to downtown Toronto location, Rotman is a great program. I also knew people who were already in the program. The alumni mentioned that it’s an academically rigorous, life changing program, and that you change positively after graduating from the program.",
                    "Why not Ivey: It's a 2 + 3 years program. First 2 years you do another degree, last 3 years you do business. I choose First 2 years to be sociology, which I was somewhat interested in - but not so passionate about. More importantly, the fact that I may or may not get into Ivey afterwards (must meet certain academic requirement after 2 years) made the program less compelling to me. That being said, if you have interest in more than 1 field, say CS and Business, then for sure Western is a great program.",
                    "Why not Queen: Location wasn't the best. However, they have great Alumni program, which is to be discussed further in podcast."
                ]
            },
            {
                section: "Why management specialist with marketing and strategy stream?",
                timestamp: "00:07:24 ~ 00:11:12",
                description: [
                    "Heather: There are three specialists, 1. Finance & Economics, 2. Accounting, and 3. Management. By the end of my 1st year, I knew my interest was pointing towards marketing. I eventually chose Management as it provided a broader program. This evidently let me to choose management, where within management, there's marketing stream to further specialize into. I appreciate that the Rotman commerce gave that option to decide upon multiple choices.",
                    "It is also possible to change your specialist. In 1st year, across all 3 specialist, you take similar courses. Only in 3rd year, students will take specialized accounting, finance, and management classes. So around 3rd year it will be a bit harder to switch around.", 
                    "This specialist decision must be made by the end of 1st year. That being said, I know a couple of students who switched into management stream in their 4th year of study. Though, it’s easier to switch from non-management to management, than the other way around. Reason being, the other two have more mandatory courses."
                ]
            },
            {
                section: "What stood out the most in your Rotman university application?",
                timestamp: "00:11:12 ~ 00:14:34",
                description: [
                    "Heather: Grades are definitely important. Your application essay also helps. You need good extracurriculars, plus great writing skills to compose your experiences into an essay format.", 
                    "I did a lot of volunteering, requirement is 40 hours but I did 200 hours. Additionally, I really enjoyed working with non-profit store as a sales associate, where all profits went to 3rd world countries.",
                    "I also did music throughout all 4 years of high school. I was the section leader of our clarinet section and also performed in a clarinet quartet.",
                    "Obviously these are not directly related to business, but practicing leadership definitely persists, and you can tweak your writing in ways to favor the application essay.",
                    "Speaking of application essay, its very important to get revision from your friends, teachers and family. You shouldn’t just write and submit. You need to request for feedback to your friends, teachers and parents to make sure your essay is in good standing. They can provide a less bias, objective feedback which will help increase your essay quality further."
                ]
            },
            {
                section: "High school to university transition",
                timestamp: "00:14:34 ~ 00:19:00",
                description: [
                    "Heather: You get a lot of freedom in university. So you need to keep track of things everyday. That being said – it was really fun so you should look forward to that.",
                    "Make sure you stay organized, and make friends. Making friends help you stay organized. There were occasions where my friends asked “Hey remember this term test next week?”, and this essentially reminded me of some of the tasks I was falling behind on.", 
                    "Example scenario of why friends are great: Upcoming economics test, I didn’t understand the concept. So I just talk to my friend who lives next dorm and was taught everything. Friends will carry you, and you will also be able to help them out.",
                    "Also, if you feel overwhelmed in first year, remember to prioritize learning the way university works than the content itself. For grad schools, they care a lot about GPA, and you need to prioritize your learning to maximize your GPA.",
                    "Kyle: Agreed, learn how the university tests you. It’s mostly about pattern finding from the previous term tests. In a strict time constraint, you have to optimize your studying method for the GPA. I find previous exams / problem sets more helpful than downright reading textbook from page 1 ~ 200."
                ]
            },
            {
                section: "Pros and cons of Rotman Commerce",
                timestamp: "00:19:00 ~ 00:25:45",
                description: [
                    "Pros: It has a lot of friendly community compared to other business schools.", 
                    "We tend to help each other out. As previously mentioned, not too difficult to switch between specialists, so more freedom there.", 
                    "As well, a lot of extracurriculars. We have about 30 student groups within Rotman commerce alone. Examples: RCSA (Rotman Commerce Student Association), RCFA (Rotman Commerce Finance Association), RCCA (Rotman Commerce Consulting Association). If you want to get involved, just apply.", 
                    "Moreover, a lot of events and conferences where we invite professionals to our school campus. You get to learn about their jobs and responsibility, which helps you forward think your career.", 
                    "Lastly, its the University of Toronto itself. It’s a top school in Canada, all the people you meet are very passionate and intelligent. It really opened my eyes. I get motivated further by these passionate students.",
                    "Cons: The Alumni network Rotman commerce provides can take some improvements. From what I know, Queens commerce has the best alumni program, bringing their graduates back to school and providing guidance.", 
                    "Good news is that Rotman Commerce is currently working on this right now."
                ]
            },
            {
                section: "Extracurriculars",
                timestamp: "00:25:45 ~ 00:30:38",
                description: [
                    "Heather: I definitely did a couple. Ones I enjoyed: Enactus, really fun, I was a treasurer, leveraging accounting and check writing skills. I also had the opportunity to see what all the portfolios were doing with their funds. If you are passionate of non-profit organization, pushing for positive social changes, student organizations like Enactus is a great way to learn and gain experience.", 
                    "For Rotman specific clubs, I was part of the Rotman Commerce Student Association (RCSA). I was the director of events, where I hosted community and networking events to bring the community together. It was a great mission to serve – making students to feel they belong in a greater community.",
                    "I am also taking an entreprenuership class offered by the Rotman MBA program called Creative-Destruction lab. It's a 1 lecture per month schedule, full year length course. You get paired up with a start-up in the process of raising seed money. It's a great learning opportunity."
                ]
            },
            {
                section: "How was your start-up experience?",
                timestamp: "00:30:38 ~ 00:35:10",
                description: [
                    "Heather: I had 3 goals in undergrad - to work at a start-up, non-profit, and large corporate.", 
                    "In 1st year, I was at non-profit. Then in 2nd year, I decided to switch gears into a start-up.", 
                    "I got into a start-up through the Hatchery program, an entrepreneurship hub ran by UofT Engineering faculty. The program matches students with start-ups, and help their start-up ventures to become a reality.", 
                    "My co-founder had a great idea of creating a make-up review platform, where it displays all brands and more importantly, provide facial similarity assessment of the reviewers and yourself, so you can get a customized review that fits your needs.", 
                    "Great experience overall, as Hatchery provides a legal mentor and a business mentor to grow start-up your idea to reality.",
                    "I also pitched 5 times, and during those times you get to expose yourself and network with investors within the field, which is really great.",
                    "Kyle: Start-up is definitely an invaluable experience, as you get the first hand experience on how a business is formed – outside of textbook knowledge. Being both the witness and the founding member, plus bringing your idea to reality, is knowledge you can only gain from start-up experience."
                ]
            },
            {
                section: "Bell, How was the consultant internship experience?",
                timestamp: "00:35:10 ~ 00:40:06",
                description: [
                    "Heather: The Bell internship was split to two big parts.", 
                    "1st Project. Common internship project across all interns. How to integrate NLU (Natural Language Understanding) to their current e-chat platform, for their customer service online. You work in a team of other interns, plus two to three managers as contact points to question and gather data.",
                    "2nd Project. For this project, by the end of the internship you get to present to one of the presidents at Bell, which is a huge deal. It was longer than the first project, and also different per each intern. My project was to simplify supervisor escalation process.",
                    "High level explanation: When customer says “I wish to speak with your manager”, we look into better ways of how can we calm the client, and also transferring the knowledge between agents and managers in more effective ways.",
                    "We made tweaks to the agent’s software, such as taking notes and other tools to share the knowledge.",
                    "Also due to the big scale of Bell, it creates additional complexity which made the project super interesting and rewarding."
                ]
            },
            {
                section: "Bell, Application process",
                timestamp: "00:40:06 ~ 00:44:28",
                description: [
                    "Heather: Apply through Rotman portal. After, online assessment was given, which will test the candidate's intelligence through a series of puzzles. Now a days, this is used a lot in business internships.", 
                    "Next up was video interview, not with a real person, but rather a screening software. The platform gives 4 questions, where you have to record yourself with short time to prepare.",
                    "Last round was 3 hours in-person interview. It consists of 2 sections:", 
                    "1. 45 min behavioural",
                    "2. 15-minute presentation on a case which you prepare for 2 hours.",
                    "Kyle: A lot harder to talk with a real person now a days with screening software.",
                    "Heather: Mixed feelings, I definitely understand company's perspective as they require these softwares to process thousands of applications. Whether those programs filter the right candidates - is a grey area."
                ]
            },
            {
                section: "Open Discussion 1 – What should University students do to get the best University experience.",
                timestamp: "00:44:28 ~ 00:49:15",
                description: [
                    "Heather: To break down into 3 points:", 
                    "1. Keep a calendar. If you stay organized, you will have enough time to do most things you wish to do. By keeping on top of things, you can get some of the fun, studying and sleep.", 
                    "2. For business students specifically - Prioritize networking over studying for a test. It's just by the nature of our profession. You might miss someone who could’ve referred you to a company you wish to work for.",
                    "3. Don't forget to have fun. It's hard to balance your time for sure. At the same time, you're spending 4 years of your life, from 18 to 22, it’s a great time to have fun. Keeping in mind of your school work, when possible, feel free to hit a bar or a club. Looking back to your university years later, you will definitely remember those moments."
                ]
            },
            {
                section: "Open Discussion 2 – Tip on staying motivated during Covid / work-from-home situations.",
                timestamp: "00:49:15 ~ 00:52:45",
                description: [
                    "Heather: I value my network and the people around me. Staying in touch with my motivated friends helps me to also stay motivated. Keep in touch with those you know in University who care about you and about school. Let them remind you about school work and vice versa.", 
                    "Also, leverage virtual networking and continue reaching out to industry professionals. I would argue that right now, networking has became easier. You are one click away from connecting with people online, and it will definitely help you guide your career and future trajectory."
                ]
            }
        ],
        podcastUrl: '',
        guestIntroduction: [
            [
                "One Line Summary", 
                "Heather Wang, the fourth guest to the Millennial Podcast, and host Kyle Kim, discusses about the Rotman Commerce experience, starting from the high school decision making, start-up co-founding, consultant internship at Bell, and ending with an open discussion on: how you could get the best out of your university experience."]
        ]
    },
    "Jeremy Chiu": {
        keynote: [
            {
                section: "Ramp-up talk",
                timestamp: "00:00:00 ~ 00:02:10",
                description: ["Talking about how each others’ lives have been over the Christmas break."]
            },
            {
                section: "Introduction",
                timestamp: "00:02:10 ~ 00:05:24",
                description: 
                [
                    "Jeremy: I am software engineer at Microsoft, Seattle Redmond area. I work for Microsoft’s Azure cloud services product.",
                    "I should also mention that I have two different degrees, which we can talk in details later. To provide an overview, I got my 1st degree at Rotman Commerce, Finance and Economics specialist at UofT. After, I worked for a year then decided to pursue a 2nd bachelor's degree in Computer Science at UBC. ",
                    "One interesting fact, I grew up in Alberta, so we could also talk about that."
                ]
            },
            {
                section: "Microsoft, Software engineer responsibilities?",
                timestamp: "00:05:24 ~ 00:06:49",
                description: 
                [
                    "Jeremy: I joined my team almost a year ago.  As a new graduate software engineer, my general responsibilities include attending different meetings, coding, designing features and changes, and reviewing other’s code commits and helping my coworkers.",
                ]
            },
            {
                section: "Microsoft, 9 to 5 work schedule",
                timestamp: "00:06:49 ~ 00:12:01",
                description: 
                [
                    "Jeremy: Thankfully less meeting time as a new grad hire. I have around 3 to 4 hour meetings per week. My work composition per 8 hours workday is very dependent on our team’s goal for the sprint. If a project deadline is coming up, I’ll be spending more time on feature development and less on documentations. And vice versa for the opposite situation.",
                    "Note on Microsoft’s culture, we value collaboration. Helping out your teammates is definitely an important part of our work.",
                    "In non-typical times, during an on-call shift as an example, you have less expectation on getting projects done since you are mostly occupied with on-call; Answering and solving customers’ problems on rolling basis."
                ]
            },
            {
                section: "What is the most satisfying and challenging part of your work. And to whom would you recommend a software engineeringing career?",
                timestamp: "00:12:01 ~ 00:23:55",
                description: 
                [
                    "Jeremy: Most satisfying: Solving a bug, or a pain point that your team was experiencing.",
                    "We work with a lot of partner teams by the nature of our team's product. It’s really satisfying to understand the interplaying of products Azure owns.",
                    "On a personal note, I also enjoy hardware stuff. Investigating hardware issues have always been satisfying.",
                    "That being said, this is also the most challenging part. Especially when you require to investigate an issue with unknown cause. Diving deep into the problem can be challenging. Sometimes you’ll find yourself hitting your head on a wall for a long time to root cause analysis.",
                    "Also, knowing when to hand over problems to a subject matter expert can be challenging. Cases where I don’t necessarily have the bandwidth or expertise to solve an issue, it’s questionable on when to make the call of handing over such task.",
                    "The way we learn is also a lot of hands-on experience. ",
                    "For key traits to have as a Software Engineer: Patience/Calmness and Investigative/Research traits. Patience can be applied everywhere but let me give you an example.",
                    "Most people will think that software is deterministic. But this is not necessarily always the case, especially if its multi-threaded, distributed, and of large scale, where software won’t always output the same results. You are sometimes required to perform repetitive tasks just to reproduce the same issue to solve a problem.",
                    "Some folks I met in school has gotten a bit frustrated with this characteristic of working on enterprise level software. Sometimes software are just flaky and not as deterministic as you think.",
                    "Research and investigative skills are also important, for both school and work. You need to read a lot of documentation, as you learn most concepts on the fly. Also, problems faced at work can be very specific, where searching on Google / stack overflow won’t cut it anymore. Software Engineering is less on writing code, but more on figuring out what you will be building.",
                    "Kyle: Agreed, code is just an execution of your idea, and coming up with the idea in the first place is the most important factor."
                ]
            },
            {
                section: "Don’t choose your career only for the money",
                timestamp: "00:23:55 ~ 00:26:33",
                description: 
                [
                    "Jeremy: Warning to folks listening, I’d say it’s much easier to burn out quickly on something you hate, especially if you are only in it for the money.", 
                    "Kyle: Agreed, it should be all ingredients combined. Financial stability is of course part of it. Your interests, skills and prior experiences should also be considered.", 
                ]
            },
            {
                section: "Typical Career path for SWE",
                timestamp: "00:26:33 ~ 00:30:03",
                description: 
                [
                    "Jeremy: Most folks have engineering (Electrical, Computer and Software) and CS backgrounds. Regular engineering programs are solid since all engineering disciplines teach basics of programming at minimum.", 
                    "There are of course people like myself, who don’t have the traditional undergraduate degree. They either pursued a master's degree, 2nd bachelor's degree or coding boot camp to transfer from another field.",
                    "Self-taught programmers also exist, but most had previous experiences in building software. They have the skills, and only lack on formal education."
                ]
            },
            {
                section: "Walk us through your career journey. Why a second degree in CS?",
                timestamp: "00:30:03 ~ 00:56:47",
                description: 
                [
                    "Jeremy: Thanks for asking. This question comes by a lot.",
                    "I’ll start from high school, before choosing a business degree. I went to an academically recognized school, called Old Scona Academic. Shout out to my high school haha. It was a great school, and a lot of folks pursued life sciences, research, medicine, and other STEM fields. I was one of those students who wanted to pursue medicine and get into med school after graduation.",
                    "My family background played a role in this initial decision. My father is a family doctor, and my mother is a nurse. Most of my extended family members were also within the medical field.",
                    "However, somewhere along the line in high school, I noticed that a lot of people had a skewed perception of the medical and health care field. There were many hardships behind the scenes being dismissed by the crowd.",
                    "I knew that there were more things in life than just your total compensation and work hours. Medical field also has extensive on-call shifts and long hours; 36 ~ 40 hours shift.",
                    "The medical profession for sure seemed very rewarding, but I also foresaw it taking over a huge portion of my time.",
                    "Kyle: Shout out to medical professionals, putting their lives before the patients is honorable. And definitely yeah, it’s a tough job to hold.",
                    "Jeremy: Definitely agreed.",
                    "Going back, I later obtained a less bias mindset, and decided to perhaps explore a different option before pursuing the medical field.",
                    "I wanted to do something I haven’t done in high school. So, I decided to jump into a business program. I also knew that I needed to become more proficient in communication skills, which I thought a business program could provide; bridging the gap between different cultures and teams. I thought it was a very valuable skill to learn.",
                    "Once in Rotman, I chose Finance and Economics specialist. I still love the financial field, which is why I still read news on a regular basis.",
                    "During my Rotman commerce years, I did internships, and worked at a research lab (BMO Financial and Research Trading Lab), which exposed me towards technology.",
                    "It was a simulation for investment bankers and traders. It was a great job shadowing experience, where I gained firsthand experiences in bankers and traders’ responsibilities.",
                    "Again, along with this learning, is where I realized the high demand for technology and computer science.",
                    "Going back to my Rotman Commerce years, I also worked as part of the Dragon’s Den, processing the due diligence after the investor and candidate agrees to a deal. Here, I learnt about consumer goods and retails, which was a great experience. This gave me a nudge towards venture capital at some point.",
                    "In my 3rd year, I also started a start-up. Here, I taught myself how to code. Reason being; There is a meme in the software engineering community, where business folks ask programmers to just build a product, and they will take care of rest, including the business operations. I found this behaviour very disrespectful, as there is a huge disconnection between the management and the product. To not follow this bad leadership example, I taught myself to code, which brought up even more pointers towards computer science.",
                    "In the end, all things considered, the direction was pointing me towards technology.",
                    "After graduation, around December 2016, I ran into a friend who came back from pursuing a master's degree at UofT. He was sharing his self learning computer science journey, and also let me know of the CS 2nd bachelor’s degree program at UBC. I took a look into it, it was an accelerated program (2 ~ 2.5 years), which was a perfect fit for my interests.",
                    "I enrolled into the program, and met people from diverse background; lawyers, salesman, consultants … etc. This was between 2017 ~ 2019. During this time, I worked at CPP Investments as a software engineer Intern. This is also where I met Kyle, shout outs there. After graduating, I applied to the new grad software engineer position at Microsoft, and got in. This is where I am at right now.",
                    "Kyle: Lots of respect and dedication from you. Pursuing a 2nd bachelor’s degree is not a joke. The way I view work and university that: At University, you pay to get screwed. At work, you get paid, and learn practical things. Due to this characteristic, I don’t think I could’ve consecutively enrolled into a 2nd degree right after graduation."
                ]
            },
            {
                section: "You are not stuck with your first bachelor’s degree",
                timestamp: "00:56:47 ~ 01:01:45",
                description: 
                [
                    "Jeremy: In terms of energy, I definitely don’t think I can pull another degree now. Additionally, I do realize there's a lot of privilege in myself pursuing a 2nd degree. The time and financial ability to afford to pursue a different path.",
                    "That being said, for folks who are currently in university, please don’t feel limited by the degree you’re pursuing. I am a proof of that. Maybe it’s not right after graduation, maybe you could do part time schooling, but there’s always options to pivot your career.",
                    "It may become more common for people to pursue re-skilling and continuous learning, as the economy changes rapidly, now becoming high-skilled service oriented."
                ]
            },
            {
                section: "What would you have done differently?",
                timestamp: "01:01:45 ~ 01:12:02",
                description: 
                [
                    "Jeremy: I initially approached UofT for its CS program, but couldn’t, as I have already graduated and received a full bachelor’s degree in Business. The admissions office asked that I reapply from the start.",
                    "So perhaps in making these pivoting decisions, I’d recommend that you do it while you are still in school. Maybe take introduction to certain classes to get a feel of the industry.",
                    "Another thing I would recommend is to seek out inputs from people who know you well. Those who know you well could provide a more objective opinion to your decision making. Maybe I didn’t seek out enough opinions when choosing UofT for the Business major."
                ]
            },
            {
                section: "Where do you see yourself in the next 10 years?",
                timestamp: "01:12:02 ~ 01:17:20",
                description: 
                [
                    "Jeremy: I used to know, but now I don't. Before, I wanted to rank up in the technical ladder. This is usually from SDE1, SDE2 to SDE3, then to principal engineer.",
                    "But with more experiences, I can also see myself becoming a manager, helping other teammates by unblocking things, collaborating with other organizations, and assisting engineers to become their very best versions. In conclusion, I can see myself in both ways, technical and managerial positions in the future.",
                    "Only time will tell. I could also see myself doing a MBA or master's degree in a totally different field. No clue on this really, but everyone is in this self-finding journey together."
                ]
            }
        ],
        podcastUrl: '',
        guestIntroduction: [
            [
                "One Line Summary", 
                "Jeremy Chiu, the fifth guest to the Millennial Podcast, and host Kyle Kim, discusses about the reason behind his 2nd Bachelor's degree in Computer Science, Microsoft Software Engineer experience, and never letting your degree to limit who you are and who you can become."]
        ]
    },
    "Greg Nisbet": {
        keynote: [
            {
                section: "Greg",
                timestamp: "00:00:00 ~ 00:15:00",
                description: "Elzat: I'm from University of Toronto, did mechanical engineering during undergraduate years, but decided to transition to Data Analytics"
            },
            {
                section: "Current Role",
                timestamp: "00:15:00 ~ 00:30:00",
                description: "I'm at CIBC, working as Data Analyst, My team is called Advanced Analytics team."
            },
            {
                section: "Career Progression",
                timestamp: "00:30:00 ~ 00:45:00",
                description: "Thankfully, through consulting case competition, where our group won 1st place. I was able to take the internship at an isurance firm, where I extensively utilized statistics and data analytics."
            },
            {
                section: "Most Important Factor",
                timestamp: "00:45:00 ~ 01:00:00",
                description: "Consulting case comps, and also networking."
            }
        ],
        podcastUrl: '',
        guestIntroduction: [
            ["Guest", "Greg Nisbet"],
            ["1 Line Summary", "Blah blah elzat"]
        ]
    }
};