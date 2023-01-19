function importAll(r) {
    let arr = r.keys().map(r);

    let newArr = arr.sort((a, b) => {
        let newA = a.toString();
        let newB = b.toString();
        if (newA < newB)
            return -1;
        if (newA > newB)
            return 1;
        return 0;
    })

    return newArr;
}

const images0 = importAll(
    require.context("./Assets/images0", false, /\.(png|jpg|jpeg)$/)
);

const images1 = importAll(
    require.context("./Assets/images1", false, /\.(png|jpg|jpeg)$/)
);

const images2 = importAll(
    require.context("./Assets/images2", false, /\.(png|jpg|jpeg)$/)
);

const images3 = importAll(
    require.context("./Assets/images3", false, /\.(png|jpg|jpeg)$/)
);

const images4 = importAll(
    require.context("./Assets/images4", false, /\.(png|jpg|jpeg)$/)
);

const images5 = importAll(
    require.context("./Assets/images5", false, /\.(png|jpg|jpeg)$/)
);

const images6 = importAll(
    require.context("./Assets/images6", false, /\.(png|jpg|jpeg)$/)
);

const images7 = importAll(
    require.context("./Assets/images7", false, /\.(png|jpg|jpeg)$/)
);

const images8 = importAll(
    require.context("./Assets/images8", false, /\.(png|jpg|jpeg)$/)
);

const images9 = importAll(
    require.context("./Assets/images9", false, /\.(png|jpg|jpeg)$/)
);

const images10 = importAll(
    require.context("./Assets/images10", false, /\.(png|jpg|jpeg)$/)
);

const images11 = importAll(
    require.context("./Assets/images11", false, /\.(png|jpg|jpeg)$/)
);

const images12 = importAll(
    require.context("./Assets/images12", false, /\.(png|jpg|jpeg)$/)
);

const images13 = importAll(
    require.context("./Assets/images13", false, /\.(png|jpg|jpeg)$/)
);

const images14 = importAll(
    require.context("./Assets/images14", false, /\.(png|jpg|jpeg)$/)
);

const images15 = importAll(
    require.context("./Assets/images15", false, /\.(png|jpg|jpeg)$/)
);

const images16 = importAll(
    require.context("./Assets/images16", false, /\.(png|jpg|jpeg)$/)
);

const images17 = importAll(
    require.context("./Assets/images17", false, /\.(png|jpg|jpeg)$/)
);

const images18 = importAll(
    require.context("./Assets/images18", false, /\.(png|jpg|jpeg)$/)
);

// const images19 = importAll(
//     require.context("./Assets/images19", false, /\.(png|jpg|jpeg)$/)
// );

// const images20 = importAll(
//     require.context("./Assets/images20", false, /\.(png|jpg|jpeg)$/)
// );

let imagesArr = [
    {
        id: 0,
        name: 'Magical Music',
        images: images0
    },
    {
        id: 1,
        name: 'Night Games',
        images: images1
    },
    {
        id: 2,
        name: 'Peachy Princess',
        images: images2
    },
    {
        id: 3,
        name: 'Peach Otaku',
        images: images3
    },
    {
        id: 4,
        name: 'Super Stars',
        images: images4
    },
    {
        id: 5,
        name: 'Pimping Jasmine',
        images: images5
    },
    {
        id: 6,
        name: 'KarenVania',
        images: images6
    },
    {
        id: 7,
        name: 'Vandelized',
        images: images7
    },
    {
        id: 8,
        name: 'Catgirl Captured',
        images: images8
    },
    {
        id: 9,
        name: 'Final Exam 3',
        images: images9
    },
    {
        id: 10,
        name: 'Enslavement of my Goddess 3',
        images: images10
    },
    {
        id: 11,
        name: 'Enslavement of my Goddess 1',
        images: images11
    },
    {
        id: 12,
        name: 'Eula',
        images: images12
    },
    {
        id: 13,
        name: 'Zelda Chan 1',
        images: images13
    },
    {
        id: 14,
        name: 'Zelda Chan 2',
        images: images14
    },

    {
        id: 15,
        name: 'Hutao',
        images: images15
    },
    {
        id: 16,
        name: 'Eula Amber',
        images: images16
    },
    {
        id: 17,
        name: 'Yae Miko',
        images: images17
    },
    {
        id: 18,
        name: 'Kequing',
        images: images18
    },
    // {
    //     id: 19,
    //     name: 'Name',
    //     images: images19
    // },
    // {
    //     id: 20,
    //     name: 'Name',
    //     images: images20
    // },
]

export default imagesArr;