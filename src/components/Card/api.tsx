export interface CardData {
    id: number;
    date: string;
    src: string;
    p1: string;
    p2: string;
    rep: Array<{
        id: number;
        avt: string;
        name: string;
        date: string;
        Com: string;
    }>;
}

export const Cards: CardData[] = [
    {
        id: 1,
        date: 'May 2, 2016',
        src: 'https://www.w3schools.com/w3images/girl_hat.jpg',
        p1: 'More Hats! I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
        p2: 'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        rep: [
            {
                id: 1,
                avt: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
                name: 'George',
                date: 'May 3, 2015, 6:32 PM',
                Com: 'Great blog post! Following',
            },
        ],
    },
    {
        id: 2,
        date: 'April 23, 2016',
        src: 'https://www.w3schools.com/w3images/man_hat.jpg',
        p1: 'Hats! The trend this summer is hats for men!',
        p2: 'Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
        rep: [
            {
                id: 1,
                avt: 'https://www.w3schools.com/w3images/girl_train.jpg',
                name: 'Amber',
                date: 'April 26, 2015, 10:52 PM',
                Com: 'Love your blog page! Simply the best! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                id: 2,
                avt: 'https://www.w3schools.com/w3images/girl.jpg',
                name: 'Angie',
                date: 'April 23, 2015, 9:12 PM',
                Com: 'Love hats!!',
            },
        ],
    },
    {
        id: 3,
        date: ' April 7, 2016',
        src: 'https://www.w3schools.com/w3images/runway.jpg',
        p1: 'Dont miss! The runway in New York City this weekend is gonna be legendary!',
        p2: 'Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
        rep: [
            {
                id: 1,
                avt: 'https://www.w3schools.com/w3images/girl_mountain.jpg ',
                name: 'Jane',
                date: 'April 10, 2015, 7:22 PM',
                Com: 'That was a great runway show! Thanks for everything.',
            },
            {
                id: 2,
                avt: 'https://www.w3schools.com/w3images/boy.jpg',
                name: 'John ',
                date: 'April 8, 2015, 10:32 PM',
                Com: 'Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            },
            {
                id: 3,
                avt: 'https://www.w3schools.com/w3images/girl_hood.jpg',
                name: 'Anja',
                date: 'April 7, 2015, 9:12 PM',
                Com: 'Cant wait for the runway to start!',
            },
        ],
    },
];

// export const listCard = Cards.map((card: any) => ({
//     id: card.id,
//     date: card.date,
//     src: card.src,
//     p1: card.p1,
//     p2: card.p2,
// }));
// export const replies1 = Cards[0].rep;
// export const replies2 = Cards[1].rep;
// export const replies3 = Cards[2].rep;
