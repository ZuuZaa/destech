import softwareImg from "assets/images/Image 22.png"
import designImg from "assets/images/Image 19.png"
import avatar from "assets/images/avatar.png"
import user1 from "assets/images/user1.png"
import user2 from "assets/images/user2.png"
import user3 from "assets/images/user3.png"
import user4 from "assets/images/user4.png"
import desktop from "assets/icons/desktop.svg"
import message from "assets/icons/message.svg"
import note from "assets/icons/note.svg"
import book from "assets/icons/book.svg"

export const pageContent = [
    {
        page: 'software',
        banner: {
            title: 'Software Development',
            image: softwareImg,
            cards: [
                {
                    title: "Tarix",
                    text: "16 Sentyabr-23 Dekabr"
                },
                {
                    title: "Müddət",
                    text: "24 Həftə"
                }
            ]
        },
        description: {
            title: "Nədir?",
            text: "Gələcəyin və günün dünyasında bu ihtisas sahibləri həyat qurtarıcılardır! 😍 Tədris programımız sayəsində sən də hiç bir əlavə biliyə ehtiyyac duymadan, bütün bilikləri mənimsəyəcək və karyerana bu yolda davam edəcəksən! 🤓"
        },
        participation: {
            title: "Kimlər iştirak edə bilər?",
            list: [
                "Mütəxəssis programcı olmaz istəyənlər 😎",
                "Heç bir ön bilik tələb olunur 🤩",
                "Bu dünyaya yeni addım atma istəyənlər 🥰",
                "Riyaziyyat və ya yaşı mühəndis olmağınız ehtiyyac yoldur😌"
            ]
        },
        learning: {
            title: "Destech-çilər kimlər olacaq? 😍",
            list: [
                "Proqramlaşdırmanın əməlləri ✌🏻",
                "C# Proqramlaşdırma 🤩",
                "MS Sql – SQL 😌",
                "GitHub 🧐",
                "HTLM5, CSS3, Javascript ilə Front end 😎",
                "ASP NET.5 framework 💁🏻"
            ]
        },
        support: {
            name: "Rauf Ağayev",
            role: "Software Developer at Amazon",
            linkedin: "/",
            avatar,
            text: "Güclü proqram təminatı dizaynı və inkişaf etdirmə bacarıqlarına malik təcrübəli Proqram Tərtibatçı. Ölçəklənən müəssisə xidmətlərinin qurulması təcrübəsi. Kodun səmərəliliyini, dəqiqliyini və etibarlılığını artırmaq üçün həvəslidir. Yeni texnologiyaları öyrənməkdən zövq alan, yaxşı ünsiyyət bacarıqlarına malik yaxşı komanda oyunçusu."
        },
        acceptance: [
            {
                icon: desktop,
                text: "Onlayn Müraciət Et"
            },
            {
                icon: message,
                text: "Mentor lə görüş"
            },
            {
                icon: note,
                text: "Ödəniş növü və dərs vaxtını seç"
            },
            {
                icon: book,
                text: "İmtahanda iştirak et"
            },
            {
                text: "Qeydiyyatdan keç!"
            },
        ],
        feedback: [
            {
                avatar: user1,
                name: "Ali Muradlı",
                role: "Genetics Platform",
                comment: "Destech karyera yolunda sizə əlindən gələn hər bir köməyi edir. Həm öyrənmək Həm əylənmək istəyirsinizsə o zaman Destech sizə öz köməyini göstərəcək!"
            },
            {
                avatar: user3,
                name: "Ali Muradlı",
                role: "Genetics Platform",
                comment: "Destech karyera yolunda sizə əlindən gələn hər bir köməyi edir. Həm öyrənmək Həm əylənmək istəyirsinizsə o zaman Destech sizə öz köməyini göstərəcək!"
            }
        ],
        faq: [
            {
                question: "Qatıla bilmədiyim dərslərin materiallarını daha sonradan əldə edə bilərəm?",
                answer: "Təlimdə iştirak edə bilmədiyiniz zaman sizin mailinizə ısa müddətlik istifadə edə biləcəyiniz dərs videosu göndərilir"
            },
            {
                question: "Tədrisimi bitirdikdən sonra sertifikat əldə edirəm?",
                answer: "Tədrisimizi uğurla başa vuran tələbələrimiz həmçinin son layihələrində iştirak edib, təhvil verən hər bir tələbə sertifikatla təmin olunur"
            },
        ]

    },
    {
        page: 'design',
        banner: {
            title: 'Product  Design',
            image: designImg,
            cards: [
                {
                    title: "Tarix",
                    text: "16 Sentyabr-23 Dekabr"
                },
                {
                    title: "Müddət",
                    text: "16 Həftə"
                }
            ]
        },
        description: {
            title: "Nədir?",
            text: "İstifadəçi təcrübəsi dizaynının əsaslarını anlamaq, araşdırmanın nə vaxt və nə üçün lazım olduğunu, istifadəçiləri başa düşməyin nə üçün vacib olduğunu və istifadəçilər üçün empatiya yaratmağın yollarını öyrənmək istəyirsinizsə, bu kurs sizin üçündür!"
        },
        participation: {
            title: "Kimlər iştirak edə bilər?",
            list: [
                "Qarşılıqlı əlaqə dizayn bacarıqlarını növbəti səviyyəyə qaldırmaq istəyənlər, 😎",
                "Jr. UX Dizaynerləri, 🤩",
                "Rəqəmsal platformalarda məhsullar hazırlayarkən daha çox müştəri mərkəzli yanaşma axtaran məhsul menecerləri, 🥰",
                "UX-nin bizneslərini inkişaf etdirməyə kömək edə biləcəyinə inanan startap təsisçiləri və şirkət sahibləri,😌",
                "Müştəri tələblərini müəyyən etmək üçün daha yaxşı yol axtaran vizual dizaynerlər və layihə menecerləri,🤓",
                "İstifadəyə yararlılıq və istifadəçi mərkəzli dizayn prosesi haqqında daha çox öyrənmək istəyən proqram tərtibatçıları və dizaynerləri və istifadəçi təcrübəsi dizaynında karyera quran hər kəs! 🤪",

            ]
        },
        learning: {
            title: "Destech-çilər kimlər olacaq? 😍",
            list: [
                "Proqramlaşdırmanın əməlləri ✌🏻",
                "C# Proqramlaşdırma 🤩",
                "MS Sql – SQL 😌",
                "GitHub 🧐",
                "HTLM5, CSS3, Javascript ilə Front end 😎",
                "ASP NET.5 framework 💁🏻"
            ]
        },
        support: {
            name: "Solmaz Rzayeva",
            role: "Product Designer",
            linkedin: "/",
            avatar,
            text: "Güclü proqram təminatı dizaynı və inkişaf etdirmə bacarıqlarına malik təcrübəli Proqram Tərtibatçı. Ölçəklənən müəssisə xidmətlərinin qurulması təcrübəsi. Kodun səmərəliliyini, dəqiqliyini və etibarlılığını artırmaq üçün həvəslidir. Yeni texnologiyaları öyrənməkdən zövq alan, yaxşı ünsiyyət bacarıqlarına malik yaxşı komanda oyunçusu."
        },
        feedback: [
            {
                avatar: user4,
                name: "Ali Muradlı",
                role: "Genetics Platform",
                comment: "Destech karyera yolunda sizə əlindən gələn hər bir köməyi edir. Həm öyrənmək Həm əylənmək istəyirsinizsə o zaman Destech sizə öz köməyini göstərəcək!"
            },
            {
                avatar: user2,
                name: "Ali Muradlı",
                role: "Genetics Platform",
                comment: "Destech karyera yolunda sizə əlindən gələn hər bir köməyi edir. Həm öyrənmək Həm əylənmək istəyirsinizsə o zaman Destech sizə öz köməyini göstərəcək!"
            }
        ],
        faq: [
            {
                question: "Qatıla bilmədiyim dərslərin materiallarını daha sonradan əldə edə bilərəm?",
                answer: "Təlimdə iştirak edə bilmədiyiniz zaman sizin mailinizə ısa müddətlik istifadə edə biləcəyiniz dərs videosu göndərilir"
            },
            {
                question: "Tədrisimi bitirdikdən sonra sertifikat əldə edirəm?",
                answer: "Tədrisimizi uğurla başa vuran tələbələrimiz həmçinin son layihələrində iştirak edib, təhvil verən hər bir tələbə sertifikatla təmin olunur"
            },
        ]

    }
]