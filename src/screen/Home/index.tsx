import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import Carousel from '../../components/Carousel';
import {Record} from '../../components/Carousel/types';
import styled from 'styled-components';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

const data: {
    "page": number,
    "results": Record[],
    "total_pages": number,
    "total_results": number;
} = {
    "page": 1,
    "results": [
        {
            "backdrop_path": "/45kRTSFsRqOmmkSVJjgOE0XVPEQ.jpg",
            "id": 1317218,
            "title": "Mr. Crocket",
            "original_title": "Mr. Crocket",
            "overview": "A single mother thinks she's found the key to calming her child down – a VHS copy of a strange children's program named Mr. Crocket's World. However, a darker, bloodier secret waits to invade their home from inside the tape.",
            "poster_path": "/t5TV6Y8yKZXTtg8Abf4uBGVH9mD.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                27
            ],
            "popularity": 22.109,
            "release_date": "2024-09-26",
            "video": false,
            "vote_average": 4.6,
            "vote_count": 14
        },
        {
            "backdrop_path": "/ynS5uksQzVyDs3ySEjnQADnwoCB.jpg",
            "id": 1247458,
            "title": "In Her Place",
            "original_title": "El lugar de la otra",
            "overview": "After Chilean writer María Carolina Geel murders her lover, the case captivates shy legal secretary Mercedes, sparking a connection between the two women.",
            "poster_path": "/jlnmzV9w2w85ch91HDnukQz1ynl.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "es",
            "genre_ids": [
                18,
                80,
                53
            ],
            "popularity": 32.477,
            "release_date": "2024-09-30",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 5
        },
        {
            "backdrop_path": "/rDrc51pmicFppEXUMWvofCVvLn5.jpg",
            "id": 1207123,
            "title": "White Snake: Afloat",
            "original_title": "白蛇：浮生",
            "overview": "Xiaobai finally found Xu Xian, the reincarnation of Axuan, after 500 years, the two met on the Broken Bridge. Xiaobai and sister hid in the streets and alleys, started a lively life in human world with him and his brother-in-law Li Gongfu.",
            "poster_path": "/7tltIsVonubKCBUVpzsfaK4FaDF.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "zh",
            "genre_ids": [
                16,
                10749,
                35,
                14
            ],
            "popularity": 94.196,
            "release_date": "2024-07-30",
            "video": false,
            "vote_average": 8,
            "vote_count": 5
        },
        {
            "backdrop_path": "/1bWwaeVSFeytOBYNNEjZwH3VpFj.jpg",
            "id": 1186532,
            "title": "The Forge",
            "original_title": "The Forge",
            "overview": "19 year old Isaiah Wright lives for basketball and video games. A year out of high school, he has no job, no plans, and no idea how to be a man. At odds with his single mother Cynthia, Isaiah is given an ultimatum – to step up or move out. Feeling the pull from his friends and the push from his mom, Isaiah is hired by Moore Fitness, unaware of how the owner will personally impact his life. With the prayers of his mother and unexpected guidance from his new mentor, Isaiah is forced to deal with his past, sacrifice his selfishness and discover how God might have a greater purpose for his life.",
            "poster_path": "/vXW1I7HGZkeGUqw8QpGFiDA31Ih.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                18,
                10751
            ],
            "popularity": 424.929,
            "release_date": "2024-08-22",
            "video": false,
            "vote_average": 8,
            "vote_count": 43
        },
        {
            "backdrop_path": "/4zlOPT9CrtIX05bBIkYxNZsm5zN.jpg",
            "id": 1184918,
            "title": "The Wild Robot",
            "original_title": "The Wild Robot",
            "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
            "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                16,
                878,
                10751
            ],
            "popularity": 2040.028,
            "release_date": "2024-09-12",
            "video": false,
            "vote_average": 8.169,
            "vote_count": 228
        },
        {
            "backdrop_path": "/pmPDfocouP0mS1UjiRDSqUdNIWH.jpg",
            "id": 1182047,
            "title": "The Apprentice",
            "original_title": "The Apprentice",
            "overview": "A young Donald Trump, eager to make his name as a hungry scion of a wealthy family in 1970s New York, comes under the spell of Roy Cohn, the cutthroat attorney who would help create the Donald Trump we know today. Cohn sees in Trump the perfect protégé—someone with raw ambition, a hunger for success, and a willingness to do whatever it takes to win.",
            "poster_path": "/ozoQP8SIOwU7yiWNq34Pjwzjk5G.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                18,
                36
            ],
            "popularity": 100.277,
            "release_date": "2024-10-09",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 14
        },
        {
            "backdrop_path": "/dOTybFWBSrHiYNZjC6DP7oubxZc.jpg",
            "id": 1153110,
            "title": "Bookworm",
            "original_title": "Bookworm",
            "overview": "Eleven-year-old Mildred’s life is turned upside down when her mother lands in hospital and estranged, American magician father, Strawn Wise, comes to look after her.  Hoping to entertain the bookish tween, Strawn takes Mildred camping in the notoriously rugged New Zealand wilderness, and the pair embark on the ultimate test of family bonding – a quest to find the mythological beast known as the Canterbury Panther.",
            "poster_path": "/25ji4MPbb93DGjD6wyB76ifcTFD.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                10751,
                12,
                35
            ],
            "popularity": 6.777,
            "release_date": "2024-08-08",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 7
        },
        {
            "backdrop_path": "/3m0j3hCS8kMAaP9El6Vy5Lqnyft.jpg",
            "id": 1125510,
            "title": "The Platform 2",
            "original_title": "El hoyo 2",
            "overview": "After a mysterious leader imposes his law in a brutal system of vertical cells, a new arrival battles against a dubious food distribution method.",
            "poster_path": "/izuzUb0sDokqp9o8utVfsrSJuy5.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "es",
            "genre_ids": [
                878,
                53,
                18,
                27
            ],
            "popularity": 3286.65,
            "release_date": "2024-09-27",
            "video": false,
            "vote_average": 5.701,
            "vote_count": 518
        },
        {
            "backdrop_path": "/9R9Za5kybgl5AhuCNoK3gngaBdG.jpg",
            "id": 1114513,
            "title": "Speak No Evil",
            "original_title": "Speak No Evil",
            "overview": "When an American family is invited to spend the weekend at the idyllic country estate of a charming British family they befriended on vacation, what begins as a dream holiday soon warps into a snarled psychological nightmare.",
            "poster_path": "/fDtkrO2OAF8LKQTdzYmu1Y7lCLB.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                27,
                53
            ],
            "popularity": 1137.683,
            "release_date": "2024-09-11",
            "video": false,
            "vote_average": 7.34,
            "vote_count": 637
        },
        {
            "backdrop_path": "/cVg97LOJgrDZJ7bVmjU2KsGRYnU.jpg",
            "id": 1100782,
            "title": "Smile 2",
            "original_title": "Smile 2",
            "overview": "About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.",
            "poster_path": "/aE85MnPIsSoSs3978Noo16BRsKN.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                27,
                9648
            ],
            "popularity": 150.812,
            "release_date": "2024-10-16",
            "video": false,
            "vote_average": 7,
            "vote_count": 3
        },
        {
            "backdrop_path": "/1aOPPkXASkd2By3EKIw66Ilx5qF.jpg",
            "id": 1094974,
            "title": "Take Cover",
            "original_title": "Take Cover",
            "overview": "A burned-out professional sniper finds himself trapped in an all-glass penthouse by a lethal competitor and must find a way to survive and escape with little to no cover between him and the killer.",
            "poster_path": "/xNLiMNyFzKTL9PVIEulG55Hei8j.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                28,
                53
            ],
            "popularity": 22.247,
            "release_date": "2024-10-04",
            "video": false,
            "vote_average": 5.7,
            "vote_count": 13
        },
        {
            "backdrop_path": "/g1z1ZvYKcmk9EnVOTYXR6vkNjkZ.jpg",
            "id": 1087822,
            "title": "Hellboy: The Crooked Man",
            "original_title": "Hellboy: The Crooked Man",
            "overview": "Hellboy and a rookie BPRD agent get stranded in 1950s rural Appalachia. There, they discover a small community haunted by witches, led by a local devil with a troubling connection to Hellboy's past: the Crooked Man.",
            "poster_path": "/iz2GabtToVB05gLTVSH7ZvFtsMM.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                14,
                27,
                28
            ],
            "popularity": 955.332,
            "release_date": "2024-08-29",
            "video": false,
            "vote_average": 4.7,
            "vote_count": 104
        },
        {
            "backdrop_path": "/64tinBsds1nVp4wOCgYhMbSgsRW.jpg",
            "id": 1075676,
            "title": "Uprising",
            "original_title": "전,란",
            "overview": "In the Joseon Dynasty, two friends who grew up together — one the master and one the servant — reunite post-war as enemies on opposing sides.",
            "poster_path": "/hg9OeaCRSpazrfqYyEFr6BDaZW8.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "ko",
            "genre_ids": [
                28,
                18,
                36
            ],
            "popularity": 80.685,
            "release_date": "2024-10-02",
            "video": false,
            "vote_average": 7.114,
            "vote_count": 35
        },
        {
            "backdrop_path": "/3LVVSvAkQGbL5fvG4VM3GfMaZBe.jpg",
            "id": 1052280,
            "title": "It's What's Inside",
            "original_title": "It's What's Inside",
            "overview": "A pre-wedding reunion descends into a psychological nightmare for a group of college friends when a surprise guest arrives with a mysterious suitcase.",
            "poster_path": "/32Lfs4nbLehgbXI8VTeYg5jgIQt.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                35,
                9648,
                878
            ],
            "popularity": 408.943,
            "release_date": "2024-01-19",
            "video": false,
            "vote_average": 6.384,
            "vote_count": 176
        },
        {
            "backdrop_path": "/udXJlkJScrlOJLBpS1Reorn807o.jpg",
            "id": 1047373,
            "title": "The Silent Hour",
            "original_title": "The Silent Hour",
            "overview": "While working a case as an interpreter, a hearing-impaired police detective must confront a group of criminals trying to eliminate a deaf murder witness in her apartment building.",
            "poster_path": "/j736cRzBtEPCm0nHnpRN1prqiqj.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                80,
                53,
                28
            ],
            "popularity": 63.332,
            "release_date": "2024-10-03",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 12
        },
        {
            "backdrop_path": "/xlkclSE4aq7r3JsFIJRgs21zUew.jpg",
            "id": 1034541,
            "title": "Terrifier 3",
            "original_title": "Terrifier 3",
            "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
            "poster_path": "/7NDHoebflLwL1CcgLJ9wZbbDrmV.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                27,
                53
            ],
            "popularity": 2157.641,
            "release_date": "2024-10-09",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 50
        },
        {
            "backdrop_path": "/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg",
            "id": 1022789,
            "title": "Inside Out 2",
            "original_title": "Inside Out 2",
            "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
            "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                16,
                10751,
                12,
                35,
                18
            ],
            "popularity": 1600.318,
            "release_date": "2024-06-11",
            "video": false,
            "vote_average": 7.632,
            "vote_count": 4304
        },
        {
            "backdrop_path": "/u6GpYb8MIC1W3fW4ZcsOul9GjzY.jpg",
            "id": 959429,
            "title": "Lonely Planet",
            "original_title": "Lonely Planet",
            "overview": "At an idyllic writers retreat in Morocco, a newly single novelist finds an unexpected connection with a younger man who's reevaluating his life choices.",
            "poster_path": "/sH7Orig1yqa6ojMLIzLDxA2GRkH.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                10749,
                18
            ],
            "popularity": 166.589,
            "release_date": "2024-10-10",
            "video": false,
            "vote_average": 6.036,
            "vote_count": 42
        },
        {
            "backdrop_path": "/Asg2UUwipAdE87MxtJy7SQo08XI.jpg",
            "id": 957452,
            "title": "The Crow",
            "original_title": "The Crow",
            "overview": "Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.",
            "poster_path": "/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                28,
                14,
                27
            ],
            "popularity": 1217.301,
            "release_date": "2024-08-21",
            "video": false,
            "vote_average": 5.712,
            "vote_count": 592
        },
        {
            "backdrop_path": "/6vn6K9oX82i6E86ZiHVxqVEMQqP.jpg",
            "id": 945961,
            "title": "Alien: Romulus",
            "original_title": "Alien: Romulus",
            "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
            "poster_path": "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
            "media_type": "movie",
            "adult": false,
            "original_language": "en",
            "genre_ids": [
                27,
                878,
                28
            ],
            "popularity": 604.228,
            "release_date": "2024-08-13",
            "video": false,
            "vote_average": 7.069,
            "vote_count": 1164
        }
    ],
    "total_pages": 1000,
    "total_results": 20000
};

const CarouselGrid = styled(View)`
  display: flex;
  gap: 24px;
  margin: 16px 0;
`;



type HomeScreenProps = NativeStackNavigationProp<
    RootStackParamList,
    'Home'
>;

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen = (props: Props) => {
    const {navigation} = props;
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        paddingVertical: 16

    };
    const handlePress = (record: Record) => navigation.navigate('Details', record);

    return (<SafeAreaView style={backgroundStyle}>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            {/* Header */}
            {/* Pending  */}
            <CarouselGrid>
                {/* Trending TV  */}
                <Carousel
                    title="Trending Tv"
                    data={data.results}
                    onPress={handlePress} />
                {/* Trendy Movies  */}
                <Carousel title='Trending Movies' data={data.results} onPress={handlePress} />
                {/* On Air Today  */}
                <Carousel title='On Air Today' data={data.results} onPress={handlePress} />
            </CarouselGrid>
        </ScrollView>
    </SafeAreaView>);
};

export default HomeScreen;