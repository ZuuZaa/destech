import softwareImg from "assets/images/Image 22.png"
import avatar from "assets/images/avatar.png"
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
        description: "Gələcəyin və günün dünyasında bu ihtisas sahibləri həyat qurtarıcılardır! 😍 Tədris programımız sayəsində sən də hiç bir əlavə biliyə ehtiyyac duymadan, bütün bilikləri mənimsəyəcək və karyerana bu yolda davam edəcəksən! 🤓",
        participation: [
            "Mütəxəssis programcı olmaz istəyənlər 😎",
            "Heç bir ön bilik tələb olunur 🤩",
            "Bu dünyaya yeni addım atma istəyənlər 🥰",
            "Riyaziyyat və ya yaşı mühəndis olmağınız ehtiyyac yoldur😌"
        ],
        learning: [
            "Proqramlaşdırmanın əməlləri ✌🏻",
            "C# Proqramlaşdırma 🤩",
            "MS Sql – SQL 😌",
            "GitHub 🧐",
            "HTLM5, CSS3, Javascript ilə Front end 😎",
            "ASP NET.5 framework 💁🏻"
        ],
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
        ]

    },
    {
        page: 'software',
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
    }
]