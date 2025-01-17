//data structures
let membersObj = [
//executives
{
	name: "Nicole Felix-Tovar",
	position: "Chief Executive Officer",
	linkedIn: "nfelixtovar/",
	home: "Saint Cloud, FL",
	team: "leadership",
	src: "NicoleFelixTovar.jpg",
	bio: "Nicole is a driven advocate for equitable opportunity and is a rising second-year student majoring in Anthropology & Human Biology at Emory University in Atlanta, Georgia. She joined STEMchats to help make opportunities in various STEM disciplines attainable to low income, first-generation youth such as herself. She is proudly Colombian-Ecuadorian and wants to inspire and expose minority communities everywhere to STEM research and immersion pursuits. In her free time, Nicole loves to play tennis, watch and critique movies, nap, and travel."
}, {
	name: "Sasha Kolesnikov",
	position: "VP of Biz-Development",
	linkedIn: "sasha-kolesnikov-profile/",
	team: "leadership",
	home: "Santa Cruz, CA",
	src: "SashaKolesnikov.jpg",
	bio: "Sasha is a social justice advocate and a rising second-year student majoring in Environmental Economics & Policy at UC Berkeley in the Bay Area. She joined STEMchats as a first generation, low-income student with a goal of supporting historically disadvantaged groups in STEM and socially responsible organizations. In her free time, she enjoys finding unusual books to read, exploring new places with friends, listening to a variety of podcasts in an attempt to feel smart, and trying anything matcha flavored."
}, {
	name: "Katrina Orevillo",
	position: "VP of Biz-Development",
	linkedIn: "korevillo/",
	home: "Las Vegas, NV",
	team: "leadership",
	src: "KatrinaOverillo.jpg",
	bio: "Katrina is a graphic designer and rising second-year computer science student attending California State University in Long Beach, California. She joined STEMchats to have an active role in pushing for equitable education while engaging her love for STEM. In her free time, she loves to bullet journal, go to concerts, and embark on foodie adventures around the city."
}, {
	name: "Amel Saied-Hassan",
	position: "VP of Programming",
	linkedIn: "amel-hassan-895615192/",
	home: "Paterson, NJ",
	team: "leadership",
	src: "AmelSaiedHassan.jpg",
	bio: "Amel is an advocate for opportunities for low-income & minority students and a rising third-year student majoring in Anthropology and Human Biology at Emory University in Atlanta, GA. She joined STEMchats to work to solve the issue of access and representation that many FGLI students and under-represented communities face when looking at research and STEM opportunities.  Outside of STEMchats, Amel enjoys watching shows, listening to all types of music, messing with her five siblings and parents, and cooking new foods!"
},
//leads
{
	name: "Snoe Castillo",
	position: "Marketing Lead",
	linkedIn: "snoe-castillo/",
	home: "San Jose, CA",
	team: "marketing",
	src: "SnoeCastillo.jpg",
	bio: "Snoe is a rising second-year majoring in Film/Cinema/Video Studies at San Jose State University. She joined STEMchats because she wanted to help provide the same support and opportunities to minorities and show the potential of the younger generations. In her free time, she enjoys watching animation, editing graphics/videos, and eating asian cuisine."
}, {
	name: "Joseph Chiang",
	position: "Technology Lead",
	linkedIn: "joseph-chiang/",
	home: "Vancouver, Canada",
	team: "technology",
	src: "JosephChiang.jpg",
	bio: "Joseph is an aspiring computer scientist and a rising college freshman in Canada. He joined STEMchats to support and prepare the next and current generation, especially low-income students, for impactful real world opportunities through immersive and relevant programs in STEM. When he is not learning about technology, he enjoys playing chess, writing poetry, and chilling to lofi beats."
}, {
	name: "Mahir Rahman",
	position: "Program Lead",
	linkedIn: "mahir-rahman-8605201a7/",
	home: "Kissimmee, FL",
	team: "STEMlights",
	src: "MahirRahman.jpg",
	bio: "Mahir is a proponent advocate for equitable educational and medicinal opportunities and is an IB senior at Gateway High School in Kissimmee, Florida. He aspires to study Public Health and joined STEMchats to introduce medicinal aspects to the program, to provide awareness towards, and include underprivileged, FGLI (first-generation, low-income), women, & minorities, in a global manner. In his free time, he enjoys reading about politics, exploring fashion and makeup, and listening to music."
}, {
	name: "Amanda Edwards",
	position: "Program Lead",
	linkedIn: null,
	home: "Wilmington, NC",
	team: "STEMlights",
	src: "AmandaEdwards.jpg",
	bio: "Amanda is an environmental science activist and currently a senior at Cape Fear Academy in Wilmington, NC. She joined STEMchats as a program coordinator for STEMlights to give underrepresented students the opportunity to pursue STEM careers and spark change in their communities. In her free time, she enjoys travelling, collecting rocks, and listening to all types of music. She will be attending Cornell University in the fall majoring in Environment and Sustainability."
}, {
	name: "Alexej Latimer",
	position: "Program Lead",
	linkedIn: "alexejlatimer/",
	home: "Sumner, WA",
	team: "STEMchats Institute",
	src: "AlexejLatimer.jpg",
	bio: "Alexej is an enthusiastic high school senior with big ideas for education and social reform to increase the quality of life for all world citizens. He enjoys running a digital media lab that focuses on teaching elementary and middle schoolers about technology and bridges the gap between STEM and artistic expression. He’s excited to use STEM to improve the living conditions for people all around the world and while also helping provide educational resources for unrepresented peoples. In his free time, he can be found developing film, exploring (with a camera), spending too much time at coffee or boba cafés, or riding his bike dangerously fast."
}, {
	name: "Ege Yalcindag",
	position: "Program Lead",
	linkedIn: "selin-yalcindag-13bb80164/",
	home: "Boston, MA",
	team: "STEMchats Institute",
	src: "EgeYalcindag.jpg",
	bio: "Ege is a second-year at the University of Chicago pursuing a Biological Sciences major and French minor. She joined STEMchats because she hopes to make an impact on underrepresented groups in science, especially women. Outside of STEMchats, she is the Creative Director of her a cappella group, works in a neuroscience lab, tutors high school students, and volunteers with inpatient children at the hospital. In her free time, she enjoys drinking tea, painting, and listening to podcasts."
}, {
	name: "Jasmine Li",
	position: "Program Lead",
	linkedIn: "jasmine-li-66821596/",
	home: "Philadelphia, PA",
	team: "United Engineers",
	src: "JasmineLi.jpg",
	bio: "Jasmine is an advocate for equitable education and a rising first-year at Dartmouth College. She joined STEMchats because everyone deserves the opportunity to thrive in STEM regardless of their individual backgrounds. In her free time, she enjoys singing, playing the ukulele, and spending way too long clicking through the endless void that is Youtube."
}, {
	name: "Ekta Singh",
	position: "Program Lead",
	linkedIn: null,
	home: "Edison, NJ",
	team: "United Engineers",
	src: "EktaSingh.jpg",
	bio: "Ekta is a passionate advocate for equal opportunities among all and is a rising third-year student pursuing biological engineering with a minor in biotechnology at Purdue University in West Lafayette, Indiana. She wanted to join STEMchats because as a woman and person of color in STEM, she finds that there needs to be a higher representation of those groups leading in STEM, through increased awareness and literacy of STEM. Outside of STEMchats, you will find her watching documentaries, being a social butterfly, volunteering in her community, and traveling to explore new cultures and hidden artifacts around the world."
}, {
	name: "Haoren Wen",
	position: "Program Lead",
	linkedIn: null,
	home: "Guangzhou, China",
	team: "United Engineers",
	src: "HaorenWen.jpg",
	bio: "Haoran is an enthusiast in engineering and is a rising first year student at the Massachusetts Institute of Technology. He joined STEMchats in hopes of providing greater opportunities to first generation, low income students and help inspire a new wave of future engineers. In his free time, he enjoys exercising, playing the piano, and learning about new technologies."
}, {
	name: "Lola Rustamova",
	position: "Program Lead",
	linkedIn: "lolarustamova/",
	home: "Brooklyn, NY",
	team: "United Engineers",
	src: "LolaRustamova.jpg",
	bio: "Lola is a rising second-year student at Baruch College in New York City. She joined STEMchats because she's passionate about helping disadvantaged students discover and learn more about STEM and provide more opportunities to them. In her spare time she loves spending time with kids, reading, baking, and exploring New York City."
}, {
	name: "Abigail Jiang",
	position: "Program Lead",
	linkedIn: "abigailyjiang/",
	home: "Camas, WA",
	team: "i-STEM Scholars",
	src: "AbigailJiang.jpg",
	bio: "Abigail is a scientist, activist, and a rising second-year student at Caltech studying Materials Science with a focus on Physics. She joined STEMchats to create tangible community impact and empower youth, specifically by providing quality educational opportunities alongside personal mentorship. She is passionate about scientific research, peer mental health advising, and sustainable living. In her free time, she loves hiking, photographing the world, and exploring museums."
}, {
	name: "Hana Memon",
	position: "Program Lead",
	linkedIn: "hanamemon/",
	home: "Yardley, PA",
	team: "blueprint",
	src: "HanaMemon.jpg",
	bio: "Hana is a rising freshman at the College of New Jersey where she plans to study Computer Science, Business, and Arabic. Hana actively uses her technical skills to empower marginalized communities through technology. Hana first joined STEMchats to give FGLI students a platform to creatively express their scientific interests. Outside of STEMchats, Hana is involved with various other student run nonprofits dedicated towards making the tech industry more inclusive. In her free time, you can find Hana drinking iced coffee and discovering new music on Spotify."
}, {
	name: "Manvir Bhandal",
	position: "Internal Development Lead",
	linkedIn: null,
	home: "Astoria, NY",
	team: "development",
	src: "ManvirBhandal.jpg",
	bio: "Manvir is a passionate researcher/entrepreneur and a rising first-year  student majoring in Biochemistry at Columbia University in NYC and a graduating senior at the Bronx High School of Science in the Bronx, NY. He joined STEMchats to help provide underprivileged students, such as low income, first generation youth, with more opportunities in STEM and to help connect the STEM world with underrepresented groups. In his free time, he enjoys conducting scientific research, buying and reselling streetwear, and playing basketball."
}, {
	name: "Alexa Ramirez",
	position: "Funding Lead",
	linkedIn: null,
	home: "El Paso, TX",
	team: "funding",
	src: "AlexaRamirez.jpg",
	bio: "Alexa is an aspiring tech entrepreneur/aerospace engineer who has a passion for space, and is currently a junior at Clint Early College Academy, TX. She joined STEMchats because as a fellow Latina, she would love to see, and inspire other latinas to pursue engineering and become business owners. In her free time she enjoys learning about space and physics, horseback riding, archery, and dancing."
},
//senior advisors
{
	name: "Sanja Kirova",
	position: "Senior Advisor",
	linkedIn: "sanja-kirova-cur10u5/",
	home: "Portage, IN",
	team: "senior advisors",
	src: "SanjaKirova.jpg",
	bio: "Sanja is a robotics enthusiast and rising second-year student majoring in Mechanical Engineering at Columbia University in New York, NY. In her junior year of high school, Sanja started She Can Tech, a local computer science and technology program for middle school girls. As part of STEMchats, she is excited about sharing STEM with students from underserved communities. Sanja has been competing in robotics for the past 5 years, and she is part of Columbia’s motorsports (Formula SAE) team. Fun fact: Sanja is vegetarian and does not watch TV. She also enjoys photography, biking, travel, and reading."
}, {
	name: "Tatum Wilhelm",
	position: "Senior Advisor",
	linkedIn: "tatum-wilhelm-203340177/",
	home: "Orange County, CA",
	team: "senior advisors",
	src: "TatumWilhelm.jpg",
	bio: "Tatum is a rising sophomore at the Massachusetts Institute of Technology majoring in Chemical Engineering and minoring in Biomedical Engineering. She joined STEMchats to help inspire and provide equal opportunity to fellow first-generation, low income students through mentorship and leadership. Outside of STEMchats, she is heavily involved in research, rowing, and being outdoors."
},
//coords
{
	name: "Anum Ahmad",
	position: "Marketing Coordinator",
	linkedIn: "anumqahmad/",
	home: "Township, NJ",
	team: "marketing",
	src: "AnumAhmad.jpg",
	bio: "Anum is an activist with a love for technology, and is a sophomore at Noor Ul Iman School.  She wanted to join STEMchats because as an hijabi girl, she often finds a lack of representation in the technology field, and hopes to change that!  When she is not coding, she is usually reading, designing, or working on her card business!"
}, {
	name: "Vivienne Nguyen",
	position: "Marketing Coordinator",
	linkedIn: "vivienne-nguyen-7703b6163/",
	home: "Las Vegas, NV",
	team: "marketing",
	src: "VivienneNguyen.jpg",
	bio: "Vivienne is a passionate entrepreneur and rising second-year student majoring in Business Administration at the University of Nevada, Las Vegas. She was eager to join STEMchats because she believes in its mission and wants to use her marketing experience to help expand it to the next level! In her spare time, she enjoys taking photos, traveling, and spending time with friends."
}, {
	name: "Eleanor Liu",
	position: "External Development Coordinator",
	linkedIn: "eleanor-l-58a24b112/",
	home: "Lexington, KY",
	team: "development",
	src: "EleanorLiu.jpg",
	bio: "Eleanor Liu is a first-year student at Oxford College of Emory University studying business. She is excited to be a part of the STEMchats mission and is passionate about quality public education, enthusiasm attributed to her fortunate experience in an accelerated STEM program during high school and seeing the challenges other students have endured while attending public school throughout her life. Eleanor's favorite shape is the triangle and love music from 88Rising artists."
}, {
	name: "Eliza Martin",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Sydney, Australia",
	team: "blueprint",
	src: "ElizaMartin.jpg",
	bio: "Eliza is a passionate scientist/innovator and a high school senior from Sydney, Australia. She joined STEMchats to assist others in gaining access to crucial resources to help achieve their STEM goals. In her free time she enjoys playing jazz on her saxophone as well as riding kangaroos and eating Vegemite."
}, {
	name: "Anusha Puri",
	position: "Program Coordinator",
	linkedIn: "anusha-p-04bb59190/",
	home: "Richmond, VA",
	team: "blueprint",
	src: "AnushaPuri.jpg",
	bio: "Anusha is a driven researcher and rising first-year student at the Massachusetts Institute of Technology majoring in Biological Engineering. She joined STEMchats to help others discover the potential of research and to further conversation on real-world scientific issues and their solutions. In her free time, she enjoys playing the piano, writing comedy, and doing trivia."
}, {
	name: "Sekinat Aliu",
	position: "Program Coordinator",
	linkedIn: "sekinat-aliu-748aba16b/",
	home: "Los Angeles, CA",
	team: "STEMlights",
	src: "SekinatAliu.jpg",
	bio: "Sekinat is an experienced journalist and techie who attends Chadwick School in California. She looks forward to making the most of opportunities to work with both journalism and STEM with the STEMlights team. In her free time, Sekinat enjoys making digital art, folding origami, and learning more about innovative STEM research. She will be attending Princeton University in the fall as a potential electrical engineering major. "
}, {
	name: "Lauren Chong",
	position: "Program Coordinator",
	linkedIn: "lauren-chong-792648163/",
	home: "Irvine, CA",
	team: "STEMlights",
	src: "LaurenChong.jpg",
	bio: "Lauren is a senior at Woodbridge High School in California. She joined STEMchats because it was the perfect opportunity to combine her love for publications and goal of increasing opportunities for underserved students. In her free time, she enjoys playing with her rabbit, bullet journaling, and sleeping."
}, {
	name: "Lucia Paulsen",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Matthews, NC",
	team: "STEMlights",
	src: "LuciaPaulsen.jpg",
	bio: "Lucia is an avid STEM activist and is a freshman at Butler High School. She joined STEMchats to help students understand and utlitize the STEM world when they don’t have proper access to it. Her climate activity and government interest plays a big role in her work. She loves to play guitar, act, sing, and travel."
}, {
	name: "Karthik Iyer",
	position: "Program Coordinator",
	linkedIn: "karthik-raghu-iyer/",
	home: "Sunnyvale, CA",
	team: "STEMchats Institute",
	src: "KarthikIyer.jpg",
	bio: "Karthik is a strong proponent for creating equity within education, an aspiring data scientist, and is a rising senior at Fremont High School in Sunnyvale, California. He joined STEMchats in order to help bridge the gap in STEM education and work with a community of like-minded individuals. In his free time, he loves binge-watching Netflix, satisfying his love for chocolate, and looking up new places to travel."
}, {
	name: "Sonali Joshi",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Cerritos, CA",
	team: "STEMchats Institute",
	src: "SonaliJoshi.jpg",
	bio: "Sonali is a second year student at the University of San Francisco majoring in Biology. She joined STEMchats because it combined her love of science with her love of service, especially since the program works with underserved populations. Besides these passions, she loves dancing, binging the latest Netflix show, and spending time with friends and family."
}, {
	name: "Mary Laplante",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Mount Prospect, IL",
	team: "STEMchats Institute",
	src: "MaryLaplante.jpg",
	bio: "Mary Catherine is passionate about environmental issues and a junior at Prospect High School in Illinois. She joined STEMchats because she believes that everyone should have access to STEM, as it truly makes the world a better place. She has her own environmental organization called Speak Up Green Up that works to eliminate pesticides/herbicides from her community. In her free time she enjoys singing, running, playing lacrosse and softball, competing in science competitions, and watching movies with her friends."
}, {
	name: "Bianca Luansing",
	position: "Program Coordinator",
	linkedIn: "bluansing/",
	home: "San Diego, CA",
	team: "STEMchats Institute",
	src: "BiancaMoniqueLuansing.jpg",
	bio: "Bianca is a rising third-year undergraduate at the University of California, Berkeley studying Physics, Astrophysics, and South and Southeast Asian Studies. She joined STEMchats to serve as a mentor for students who identify as low-income, first-generation, minorities and are experiencing a lack of STEM resources, just as she did. In her free time you can find her listening to podcasts, learning new languages, reading in coffee and tea shops, and learning about start-ups from around the world."
}, {
	name: "Carina Ly",
	position: "Program Coordinator",
	linkedIn: "lycarina/",
	home: "Seattle, WA",
	team: "STEMchats Institute",
	src: "CarinaLy.jpg",
	bio: "Carina is a first-year student at Stanford University studying computer science and economics. She joined STEMchats Institute because she is passionate about helping low-income, first-generation students succeed in the STEM field. In her free time, she enjoys trying new restaurants, watching football, making boba & ice cream, and hanging out with her friends."
}, {
	name: "Estrella Popoca",
	position: "Program Coordinator",
	linkedIn: "Estrella-2021/",
	home: "Chicago, IL",
	team: "STEMchats Institute",
	src: "EstrellaPopoca.jpg",
	bio: "Estrella Popoca is currently a 12th grade student attending Proviso Math and Science Academy, and is an aspiring aerospace engineer and CS major! She joined STEMchats to be involved in the movement of providing STEM exposure to minorities, and her personal passion of encouraging women to join STEM and Tech fields. One of her main passions is leading her FRC Robotics Team as a Co-Captain, and working on outreach events in Chicago! Outside of school she loves to hang out with her robotics team, listen to music, and drink boba with her friends!"
}, {
	name: "Isabella Siu",
	position: "Program Coordinator",
	linkedIn: "isabellasiu/",
	home: "Castro Valley, CA",
	team: "STEMchats Institute",
	src: "IsabellaSiu.jpg",
	bio: "Isabella is a senior at Castro Valley High School in California interested in education policy, user interaction, and cognitive science. She enjoys teaching competitive mathematics to middle school students and helping local youth reach new heights in STEM outside of the classroom. Isabella joined STEMchats to advance educational equity and be part of a lively team of innovators, entrepreneurs, and community leaders. In her spare time, she enjoys going wild in Adobe Lightroom, finding good lofi tracks, and poaching eggs."
}, {
	name: "Patricia Wei",
	position: "Program Coordinator",
	linkedIn: null,
	home: "San Jose, CA",
	team: "STEMchats Institute",
	src: "PatriciaWei.jpg",
	bio: "Patricia is a first-year student at Stanford University studying computer science, communications, and sociology. She joined STEMchats because she believes every student has potential to excel in STEM and wants them to have the chance to explore STEM. She is passionate about storytelling and is excited to listen to and share stories with students with STEMchats."
}, {
	name: "David Zhou",
	position: "Program Coordinator",
	linkedIn: "david-zhou-5a8162181/",
	home: "Chicago, IL",
	team: "STEMchats Institute",
	src: "DavidZhou.jpg",
	bio: "David is an aspiring engineer and a graduating senior at Northside College Prep in Chicago, Illinois. He will be attending University of Illinois at Chicago in the fall to study computer engineering. He joined STEMchats because, as a first generation low income student, he wanted to make STEM opportunities and activities become accessible for everyone, especially low income students. In his free time, he enjoys playing video games, singing, and photography."
}, {
	name: "Natalie Zhou",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Cupertino, CA",
	team: "STEMchats Institute",
	src: "NatalieZhou.jpg",
	bio: "Natalie is a junior at Monta Vista High School in California pursuing computer engineering and data science. She joined STEMchats as a Program Coordinator because she hopes to combine her personal passion for STEM and teaching and bring opportunities to disadvantaged students who have an interest in pursuing STEM. In her free time, Natalie enjoys dancing to K-pop and hip-hop choreographies, playing the violin, and spending time with her cat."
}, {
	name: "Swan Yee Aung",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Yangon, Burma",
	team: "United Engineers",
	src: "SwanYeeAung.jpg",
	bio: "Swanyee is a rising first year student at New York University, pursuing his passion in computer science and engineering. He joined STEMchats in hopes of teaching younger students more about STEM and how fun it can be. In his free time, Swanyee likes to read books, meditate, do martial arts, or spend time with his family."
}, {
	name: "Ayo Bravo",
	position: "Program Coordinator",
	linkedIn: "ayotzin-bravo/",
	home: "Salem, OR",
	team: "United Engineers",
	src: "AyoBravo.jpg",
	bio: "Ayotzin, better known as Ayo, is a first-year student at the University of Pennsylvania who enjoys giving back to the community and is always willing to take on challenges. When asked about why he joined STEMchats, his response was simple \"because I believe in their goals and I'd like to help make this organization's vision a reality\". Ayo enjoys playing and watching soccer, spending time with his loved ones, and expanding his culinary palate."
}, {
	name: "Michael Coyle",
	position: "Program Coordinator",
	linkedIn: null,
	home: "St. Louis, MO",
	team: "United Engineers",
	src: "MichaelCoyle.jpg",
	bio: "Mike is a freshman student at the University of Pennsylvania. He joined STEMchats to spread passion for STEM to a younger generation. In his free time, Mike enjoys skateboarding, taking pictures, and reading fiction."
}, {
	name: "Teddy Smith",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Stratford, CT",
	team: "United Engineers",
	src: "TeddySmith.jpg",
	bio: "Teddy Smith is an aspiring rocket scientist and current senior at St Joseph High School in Trumbull, Connecticut. He joined STEMchats so he could share his passion for engineering with others and inspire those with interests in STEM. In his spare time, he enjoys building and flying racing drones, RC airplanes, launching model rockets, and snowboarding."
}, {
	name: "Amy Xi",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Philadelphia, PA",
	team: "United Engineers",
	src: "AmyXi.jpg",
	bio: "Amy is a rising second-year student studying Biology at New York University. She joined STEMchats in order to inspire others to have a passion for learning about STEM and using it to help others. When she's not doing STEM-related things, she's probably listening to music or watching and analyzing figure skating and artistic gymnastics."
}, {
	name: "Sarah Young",
	position: "Program Coordinator",
	linkedIn: "sarah-young-955b451a1/",
	home: "Philadelphia, PA",
	team: "United Engineers",
	src: "SarahYoung.jpg",
	bio: "Sarah is a rising senior at Methacton High School. She is passionate about equitable education and programming. She joined STEMchats to help others develop knowledge in STEM and to share her passion for these fields.  In her free time, Sarah enjoys learning, trying new foods, and dancing."
}, {
	name: "Carson Bohl",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Lake Tapps, WA",
	team: "i-STEM Scholars",
	src: "CarsonBohl.jpg",
	bio: "Carson is a rising second-year student at Emory University pursuing degrees in Chemistry and Global Health. He plans on pursuing a research career in public health, where he wants to study how education, mental health, and socioeconomic environments impact adolescent development. He is an activist for equity and wants to encourage all students to feel empowered to pursue their dreams. He joined STEMchats to provide students of all backgrounds with the educational resources to make a positive difference in this world. In his free time, he enjoys exploring new restaurants, taking pictures, reading books, and playing basketball."
}, {
	name: "Angela Easterling",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Melbourne, FL",
	team: "i-STEM Scholars",
	src: "AngelaEasterling.jpg",
	bio: "Angela is a passionate neuroscience \"interdisciplinary\" researcher and is a rising second-year student at the Harriet L. Wilkes Honors College in Jupiter, Florida. She joined STEMchats because as a former high school student, she experienced first-hand stem inequities in both her education and the opportunities she was able to pursue due to geographic and economic barriers. She is passionate about inclusivity and mentorship in STEM, encouraging undergraduate student research and volunteer involvement in her college community.  In her free time, she enjoys listening to lofi and podcasts, meeting new people and learning about new things, and yes, drinking tea."
}, {
	name: "Daniel Low",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Marion, IA",
	team: "i-STEM Scholars",
	src: "DanielLow.jpg",
	bio: "Daniel is a rising third-year student at Centre College in Danville, Kentucky, pursuing a major in biochemistry and a minor in anthropology. He joined STEMchats to work towards reducing the disparity in quality of education for students of particular demographic groups. In his free time, Daniel enjoys exploring new artists on Spotify, playing the cello, hitting the tennis courts, and the occasional backwoods excursion."
}, {
	name: "Grace Pluemacher",
	position: "Program Coordinator",
	linkedIn: null,
	home: "Point Pleasant Beach, NJ",
	team: "i-STEM Scholars",
	src: "GracePluemacher.jpg",
	bio: "Grace Pluemacher is a passionate researcher and a rising senior at the Marine Academy of Technology and Environmental Science. She joined STEMchats to inspire future students, especially women, to explore fields in STEM through independent research. In her free time, she enjoys playing various sports, watching Netflix and playing the drums."
}
];

//load all at onload
window.onload = createMembers(membersObj);
window.onload =	animateOnload();
