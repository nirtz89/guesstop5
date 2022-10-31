import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new ReplaySubject<any>();
  client_id = '91e51addd138490d869819e7077682cc'; // Your client id
  client_secret = 'bbca8d5a4af34309b8c497cfd29af5c3'; // Your secret
  randomArtists = [
    {
      "name": "Ed Sheeran",
      "id": "6eUKZXaKkcviH0Ku9w2n3V",
      "popularity": 90
    },
    {
      "name": "The Weeknd",
      "id": "1Xyo4u8uXC1ZmMpatF05PJ",
      "popularity": 93
    },
    {
      "name": "Taylor Swift",
      "id": "06HL4z0CvFAxyc27GXpf02",
      "popularity": 100
    },
    {
      "name": "Justin Bieber",
      "id": "1uNFoZAHBGtllmzznpCI3s",
      "popularity": 90
    },
    {
      "name": "David Guetta",
      "id": "1Cs0zKBU1kc0i8ypK3B9ai",
      "popularity": 89
    },
    {
      "name": "Harry Styles",
      "id": "6KImCVD70vtIoJWnq6nGn3",
      "popularity": 90
    },
    {
      "name": "Sam Smith",
      "id": "2wY79sveU1sp5g7SokKOiI",
      "popularity": 88
    },
    {
      "name": "Bad Bunny",
      "id": "4q3ewBCX7sLwd24euuV69X",
      "popularity": 98
    },
    {
      "name": "Dua Lipa",
      "id": "6M2wZ9GZgrQXHCFfjv46we",
      "popularity": 88
    },
    {
      "name": "Drake",
      "id": "3TVXtAsR1Inumwj472S9r4",
      "popularity": 94
    },
    {
      "name": "Coldplay",
      "id": "4gzpq5DPGxSnKTe4SA8HAU",
      "popularity": 88
    },
    {
      "name": "Eminem",
      "id": "7dGJo4pcD2V6oG8kP0tJRR",
      "popularity": 90
    },
    {
      "name": "Rihanna",
      "id": "5pKCCKE2ajJHZ9KAiaK11H",
      "popularity": 88
    },
    {
      "name": "Imagine Dragons",
      "id": "53XhwfbYqKCa1cC15pYq2q",
      "popularity": 88
    },
    {
      "name": "Doja Cat",
      "id": "5cj0lLjcoR7YOSnhnX0Po5",
      "popularity": 87
    },
    {
      "name": "Ariana Grande",
      "id": "66CXWjxzNUsdJxJ2JdwvnR",
      "popularity": 88
    },
    {
      "name": "Post Malone",
      "id": "246dkjvS1zLTtiykXe5h60",
      "popularity": 88
    },
    {
      "name": "Elton John",
      "id": "3PhoLpVuITZKcymswpck5b",
      "popularity": 84
    },
    {
      "name": "Kanye West",
      "id": "5K4W6rqBFWDnAN6FQUkS6x",
      "popularity": 90
    },
    {
      "name": "Bruno Mars",
      "id": "0du5cEVh5yTK9QJze8zA0C",
      "popularity": 87
    },
    {
      "name": "Khalid",
      "id": "6LuN9FCkKOj5PcnpouEgny",
      "popularity": 85
    },
    {
      "name": "J Balvin",
      "id": "1vyhD5VmyZ7KMfW5gqLgo5",
      "popularity": 87
    },
    {
      "name": "Billie Eilish",
      "id": "6qqNVTkY8uBg9cP3Jd7DAH",
      "popularity": 88
    },
    {
      "name": "OneRepublic",
      "id": "5Pwc4xIPtQLFEnJriah9YJ",
      "popularity": 84
    },
    {
      "name": "Calvin Harris",
      "id": "7CajNmpbOovFoOoasH2HaY",
      "popularity": 84
    },
    {
      "name": "Bebe Rexha",
      "id": "64M6ah0SkkRsnPGtGiRAbb",
      "popularity": 83
    },
    {
      "name": "Maroon 5",
      "id": "04gDigrS5kc9YWfZHwBETP",
      "popularity": 85
    },
    {
      "name": "Shakira",
      "id": "0EmeFodog0BfCgMzAIvKQp",
      "popularity": 85
    },
    {
      "name": "Nicki Minaj",
      "id": "0hCNtLu0JehylgoiP8L4Gh",
      "popularity": 86
    },
    {
      "name": "Beyoncé",
      "id": "6vWDO969PvNqNYHIOW5v0m",
      "popularity": 87
    },
    {
      "name": "Artist Vs Poet",
      "id": "3kYFawNQVZ00FQbgs4rVBe",
      "popularity": 44
    },
    {
      "name": "Drake",
      "id": "3TVXtAsR1Inumwj472S9r4",
      "popularity": 94
    },
    {
      "name": "Bad Bunny",
      "id": "4q3ewBCX7sLwd24euuV69X",
      "popularity": 98
    },
    {
      "name": "The Weeknd",
      "id": "1Xyo4u8uXC1ZmMpatF05PJ",
      "popularity": 93
    },
    {
      "name": "Taylor Swift",
      "id": "06HL4z0CvFAxyc27GXpf02",
      "popularity": 100
    },
    {
      "name": "Justin Bieber",
      "id": "1uNFoZAHBGtllmzznpCI3s",
      "popularity": 90
    },
    {
      "name": "Ariana Grande",
      "id": "66CXWjxzNUsdJxJ2JdwvnR",
      "popularity": 88
    },
    {
      "name": "Eminem",
      "id": "7dGJo4pcD2V6oG8kP0tJRR",
      "popularity": 90
    },
    {
      "name": "Post Malone",
      "id": "246dkjvS1zLTtiykXe5h60",
      "popularity": 88
    },
    {
      "name": "BTS",
      "id": "3Nrfpe0tUJi4K4DXYWgMUX",
      "popularity": 91
    },
    {
      "name": "J Balvin",
      "id": "1vyhD5VmyZ7KMfW5gqLgo5",
      "popularity": 87
    },
    {
      "name": "Kanye West",
      "id": "5K4W6rqBFWDnAN6FQUkS6x",
      "popularity": 90
    },
    {
      "name": "Juice WRLD",
      "id": "4MCBfE4596Uoi2O4DtmEMz",
      "popularity": 89
    },
    {
      "name": "Coldplay",
      "id": "4gzpq5DPGxSnKTe4SA8HAU",
      "popularity": 88
    },
    {
      "name": "Imagine Dragons",
      "id": "53XhwfbYqKCa1cC15pYq2q",
      "popularity": 88
    },
    {
      "name": "XXXTENTACION",
      "id": "15UsOTVnJzReFVN1VCnxy4",
      "popularity": 87
    },
    {
      "name": "Ozuna",
      "id": "1i8SpTcr7yvPOmcqrbnVXY",
      "popularity": 87
    },
    {
      "name": "Khalid",
      "id": "6LuN9FCkKOj5PcnpouEgny",
      "popularity": 85
    },
    {
      "name": "Maroon 5",
      "id": "04gDigrS5kc9YWfZHwBETP",
      "popularity": 85
    },
    {
      "name": "Travis Scott",
      "id": "0Y5tJX1MQlPlqiwlOH1tJY",
      "popularity": 87
    },
    {
      "name": "David Guetta",
      "id": "1Cs0zKBU1kc0i8ypK3B9ai",
      "popularity": 89
    },
    {
      "name": "Shawn Mendes",
      "id": "7n2wHs1TKAczGzO7Dd2rGr",
      "popularity": 84
    },
    {
      "name": "Bruno Mars",
      "id": "0du5cEVh5yTK9QJze8zA0C",
      "popularity": 87
    },
    {
      "name": "Daddy Yankee",
      "id": "4VMYDCV2IEDYJArk749S6m",
      "popularity": 87
    },
    {
      "name": "Calvin Harris",
      "id": "7CajNmpbOovFoOoasH2HaY",
      "popularity": 84
    },
    {
      "name": "Kendrick Lamar",
      "id": "2YZyLoL8N0Wb9xBt1NhZWg",
      "popularity": 88
    },
    {
      "name": "Sam Smith",
      "id": "2wY79sveU1sp5g7SokKOiI",
      "popularity": 88
    },
    {
      "name": "Queen",
      "id": "1dfeR4HaWDbWqFHLkxsg1d",
      "popularity": 84
    },
    {
      "name": "Beyoncé",
      "id": "6vWDO969PvNqNYHIOW5v0m",
      "popularity": 87
    },
    {
      "name": "Future",
      "id": "1RyvyyTE3xzB2ZywiAwp0i",
      "popularity": 87
    },
    {
      "name": "One Direction",
      "id": "4AK6F7OLvEQ5QYCBNiQWHq",
      "popularity": 84
    },
    {
      "name": "The Chainsmokers",
      "id": "69GGBxA162lTqCwzJG5jLp",
      "popularity": 80
    },
    {
      "name": "Lady Gaga",
      "id": "1HY2Jd0NmPuamShAr6KMms",
      "popularity": 84
    },
    {
      "name": "J. Cole",
      "id": "6l3HvQ5sa6mXTsMTB19rO5",
      "popularity": 85
    },
    {
      "name": "Nicki Minaj",
      "id": "0hCNtLu0JehylgoiP8L4Gh",
      "popularity": 86
    },
    {
      "name": "Adele",
      "id": "4dpARuHxo51G3z768sgnrY",
      "popularity": 84
    },
    {
      "name": "Anuel AA",
      "id": "2R21vXR83lH98kGeO99Y66",
      "popularity": 86
    },
    {
      "name": "Halsey",
      "id": "26VFTg2z8YR0cCuwLzESi2",
      "popularity": 82
    },
    {
      "name": "The Beatles",
      "id": "3WrFJ7ztbogyGnTHbHJFl2",
      "popularity": 83
    },
    {
      "name": "Selena Gomez",
      "id": "0C8ZW7ezQVs4URX5aX7Kqx",
      "popularity": 83
    },
    {
      "name": "Harry Styles",
      "id": "6KImCVD70vtIoJWnq6nGn3",
      "popularity": 90
    },
    {
      "name": "Sia",
      "id": "5WUlDfRSoLAfcVSX1WnrxN",
      "popularity": 83
    },
    {
      "name": "Chris Brown",
      "id": "7bXgB6jMjp9ATFy66eO08Z",
      "popularity": 87
    },
    {
      "name": "Maluma",
      "id": "1r4hJ1h58CWwUQe3MxPuau",
      "popularity": 84
    },
    {
      "name": "Marshmello",
      "id": "64KEffDW9EtZ1y2vBYgq8T",
      "popularity": 83
    },
    {
      "name": "Lil Uzi Vert",
      "id": "4O15NlyKLIASxsJ0PrXPfz",
      "popularity": 85
    },
    {
      "name": "Linkin Park",
      "id": "6XyY86QOPPrYVGvF9ch6wz",
      "popularity": 83
    },
    {
      "name": "Twenty One Pilots",
      "id": "3YQKmKGau1PzlVlkL1iodx",
      "popularity": 79
    },
    {
      "name": "Katy Perry",
      "id": "6jJ0s89eD6GaHleKKya26X",
      "popularity": 84
    },
    {
      "name": "Lana Del Rey",
      "id": "00FQb4jTyendYWaN8pK0wa",
      "popularity": 88
    },
    {
      "name": "Rauw Alejandro",
      "id": "1mcTU81TzQhprhouKaTkpq",
      "popularity": 89
    },
    {
      "name": "Kygo",
      "id": "23fqKkggKUBHNkbKtXEls4",
      "popularity": 79
    },
    {
      "name": "Avicii",
      "id": "1vCWHaC5f2uS3yhpwWbIA6",
      "popularity": 80
    },
    {
      "name": "Doja Cat",
      "id": "5cj0lLjcoR7YOSnhnX0Po5",
      "popularity": 87
    },
    {
      "name": "Farruko",
      "id": "329e4yvIujISKGKz1BZZbO",
      "popularity": 84
    },
    {
      "name": "Camila Cabello",
      "id": "4nDoRrQiYLoBzwC5BhVJzF",
      "popularity": 81
    },
    {
      "name": "Arctic Monkeys",
      "id": "7Ln80lUS6He07XvHI8qqHH",
      "popularity": 88
    },
    {
      "name": "KAROL G",
      "id": "790FomKkXshlbRYZFtlgla",
      "popularity": 86
    },
    {
      "name": "Jason Derulo",
      "id": "07YZf4WDAMNwqr4jfgOZ8y",
      "popularity": 79
    },
    {
      "name": "Red Hot Chili Peppers",
      "id": "0L8ExT028jH3ddEcZwqJJ5",
      "popularity": 82
    },
    {
      "name": "Shakira",
      "id": "0EmeFodog0BfCgMzAIvKQp",
      "popularity": 85
    },
    {
      "name": "Demi Lovato",
      "id": "6S2OmqARrzebs0tKUEyXyp",
      "popularity": 80
    },
    {
      "name": "OneRepublic",
      "id": "5Pwc4xIPtQLFEnJriah9YJ",
      "popularity": 84
    },
    {
      "name": "Miley Cyrus",
      "id": "5YGY8feqx7naU7z4HrwZM6",
      "popularity": 81
    },
    {
      "name": "Nicky Jam",
      "id": "1SupJlEpv7RS2tPNRaHViT",
      "popularity": 81
    },
    {
      "name": "Michael Jackson",
      "id": "3fMbdgg4jU18AjLCKBhRSm",
      "popularity": 82
    },
    {
      "name": "Myke Towers",
      "id": "7iK8PXO48WeuP03g8YR51W",
      "popularity": 84
    },
    {
      "name": "Charlie Puth",
      "id": "6VuMaDnrHyPL1p4EHjYLi7",
      "popularity": 84
    },
    {
      "name": "Lil Baby",
      "id": "5f7VJjfbwm532GiveGC0ZK",
      "popularity": 90
    },
    {
      "name": "Pitbull",
      "id": "0TnOYISbd1XYRBk9myaseg",
      "popularity": 81
    },
    {
      "name": "21 Savage",
      "id": "1URnnhqYAYcrqrcwql10ft",
      "popularity": 86
    },
    {
      "name": "DaBaby",
      "id": "4r63FhuTkUYltbVAg5TQnk",
      "popularity": 82
    },
    {
      "name": "Mac Miller",
      "id": "4LLpKhyESsyAXpc4laK94U",
      "popularity": 83
    },
    {
      "name": "Martin Garrix",
      "id": "60d24wfXkVzDSfLS6hyCjZ",
      "popularity": 76
    },
    {
      "name": "Pop Smoke",
      "id": "0eDvMgVFoNV3TpwtrVCoTj",
      "popularity": 83
    },
    {
      "name": "Sebastian Yatra",
      "id": "07YUOmWljBTXwIseAUd9TW",
      "popularity": 81
    },
    {
      "name": "Olivia Rodrigo",
      "id": "1McMsnEElThX1knmY4oliG",
      "popularity": 84
    },
    {
      "name": "Cardi B",
      "id": "4kYSro6naA4h99UJvo89HB",
      "popularity": 80
    },
    {
      "name": "Panic! At The Disco",
      "id": "20JZFwl6HVl6yg8a4H3ZqK",
      "popularity": 78
    },
    {
      "name": "Lil Wayne",
      "id": "55Aa2cqylxrFIXC767Z865",
      "popularity": 85
    },
    {
      "name": "Metallica",
      "id": "2ye2Wgw4gimLv2eAKyk1NB",
      "popularity": 81
    },
    {
      "name": "Young Thug",
      "id": "50co4Is1HCEo8bhOyUWKpn",
      "popularity": 83
    },
    {
      "name": "Sech",
      "id": "77ziqFxp5gaInVrF2lj4ht",
      "popularity": 82
    },
    {
      "name": "Lil Nas X",
      "id": "7jVv8c5Fj3E9VhNjxT4snq",
      "popularity": 82
    },
    {
      "name": "Ellie Goulding",
      "id": "0X2BH1fck6amBIoJhDVmmJ",
      "popularity": 78
    },
    {
      "name": "G-Eazy",
      "id": "02kJSzxNuaWGqwubyUba0Z",
      "popularity": 75
    },
    {
      "name": "Alan Walker",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "popularity": 80
    },
    {
      "name": "Lil Peep",
      "id": "2kCcBybjl3SAtIcwdWpUe3",
      "popularity": 82
    },
    {
      "name": "Major Lazer",
      "id": "738wLrAtLtCtFOLvQBXOXp",
      "popularity": 74
    },
    {
      "name": "Wiz Khalifa",
      "id": "137W8MRPWKqSmrBGDBFSop",
      "popularity": 81
    },
    {
      "name": "Elton John",
      "id": "3PhoLpVuITZKcymswpck5b",
      "popularity": 84
    },
    {
      "name": "Fall Out Boy",
      "id": "4UXqAaa6dQYAk18Lv7PEgX",
      "popularity": 77
    },
    {
      "name": "AC/DC",
      "id": "711MCceyCBcFnzjGY4Q7Un",
      "popularity": 80
    },
    {
      "name": "P!nk",
      "id": "1KCSPY1glIKqW2TotWuXOR",
      "popularity": 79
    },
    {
      "name": "Tyga",
      "id": "5LHRHt1k9lMyONurDHEdrp",
      "popularity": 79
    },
    {
      "name": "John Mayer",
      "id": "0hEurMDQu99nJRq8pTxO14",
      "popularity": 77
    },
    {
      "name": "Trippie Redd",
      "id": "6Xgp2XMz1fhVYe7i6yNAax",
      "popularity": 82
    },
    {
      "name": "Madonna",
      "id": "6tbjWDEIzxoDsBA1FuhfPW",
      "popularity": 76
    },
    {
      "name": "Iron Maiden",
      "id": "6mdiAmATAx73kdxrNrnlao",
      "popularity": 73
    },
    {
      "name": "Led Zeppelin",
      "id": "36QJpDe2go2KgaRleHCDTp",
      "popularity": 76
    },
    {
      "name": "Deep Purple",
      "id": "568ZhdwyaiCyOGJRtNYhWf",
      "popularity": 66
    },
    {
      "name": "Eric Clapton",
      "id": "6PAt558ZEZl0DmdXlnjMgD",
      "popularity": 71
    },
    {
      "name": "Louis Armstrong",
      "id": "19eLuQmk9aCobbVDHc6eek",
      "popularity": 69
    },
    {
      "name": "Frank Sinatra",
      "id": "1Mxqyy3pSjf8kZZL4QVxS0",
      "popularity": 75
    },
    {
      "name": "Elvis Presley",
      "id": "43ZHCT0cAZBISjO8DG9PnE",
      "popularity": 79
    },
    {
      "name": "Aretha Franklin",
      "id": "7nwUJBm0HE4ZxD3f5cy5ok",
      "popularity": 69
    },
    {
      "name": "Bob Dylan",
      "id": "74ASZWbe4lXaubB36ztrGX",
      "popularity": 70
    },
    {
      "name": "Prince",
      "id": "5a2EaR3hamoenG9rDuVn8j",
      "popularity": 70
    },
    {
      "name": "Whitney Houston",
      "id": "6XpaIBNiVzIetEPCWDvAFP",
      "popularity": 75
    },
    {
      "name": "Elton John",
      "id": "3PhoLpVuITZKcymswpck5b",
      "popularity": 84
    },
    {
      "name": "Britney Spears",
      "id": "26dSoYclwsYLMAKD3tpOr4",
      "popularity": 81
    },
    {
      "name": "John Lennon",
      "id": "4x1nvY2FN8jxqAFA0DA02H",
      "popularity": 68
    },
    {
      "name": "Stevie Wonder",
      "id": "7guDJrEfX3qb6FEbdPA5qi",
      "popularity": 74
    },
    {
      "name": "David Bowie",
      "id": "0oSGxfWSnnOXhD2fKuz2Gy",
      "popularity": 77
    },
    {
      "name": "Phil Collins",
      "id": "4lxfqrEsLX6N1N4OCSkILp",
      "popularity": 74
    },
    {
      "name": "Aerosmith",
      "id": "7Ey4PD4MYsKc5I2dolUwbH",
      "popularity": 75
    },
    {
      "name": "Tom Waits",
      "id": "7x83XhcMbOTl1UdYsPTuZM",
      "popularity": 60
    },
    {
      "name": "Nirvana",
      "id": "6olE6TJLqED3rqDCT0FyPh",
      "popularity": 80
    },
    {
      "name": "Red Hot Chili Peppers",
      "id": "0L8ExT028jH3ddEcZwqJJ5",
      "popularity": 82
    },
    {
      "name": "R.E.M.",
      "id": "4KWTAlx2RvbpseOGMEmROg",
      "popularity": 72
    },
    {
      "name": "Foo Fighters",
      "id": "7jy3rLJdDQY21OgRLCZ9sD",
      "popularity": 77
    },
    {
      "name": "Bruce Springsteen",
      "id": "3eqjTLE0HfPfh78zjh6TqT",
      "popularity": 74
    },
    {
      "name": "Guns N' Roses",
      "id": "3qm84nBOXUEQ2vnTfUTTFC",
      "popularity": 79
    },
    {
      "name": "Eagles",
      "id": "0ECwFtbIWEVNwjlrfc6xoL",
      "popularity": 74
    },
    {
      "name": "Bon Jovi",
      "id": "58lV9VcRSjABbAbfWS6skp",
      "popularity": 77
    },
    {
      "name": "Pixies",
      "id": "6zvul52xwTWzilBZl6BUbT",
      "popularity": 70
    },
    {
      "name": "Jefferson Airplane",
      "id": "2qFr8w5sWUITRlzZ9kZotF",
      "popularity": 59
    },
    {
      "name": "Frank Zappa",
      "id": "6ra4GIOgCZQZMOaUECftGN",
      "popularity": 57
    },
    {
      "name": "Mötley Crüe",
      "id": "0cc6vw3VN8YlIcvr1v7tBL",
      "popularity": 71
    },
    {
      "name": "Santana",
      "id": "6GI52t8N5F02MxU0g5U69P",
      "popularity": 70
    },
    {
      "name": "Pearl Jam",
      "id": "1w5Kfo2jwwIPruYS2UWh56",
      "popularity": 73
    },
    {
      "name": "KISS",
      "id": "07XSN3sPlIlB2L2XNcTwJw",
      "popularity": 72
    },
    {
      "name": "Funkadelic",
      "id": "450o9jw6AtiQlQkHCdH6Ru",
      "popularity": 52
    },
    {
      "name": "Alice Cooper",
      "id": "3EhbVgyfGd7HkpsagwL9GS",
      "popularity": 64
    },
    {
      "name": "Soundgarden",
      "id": "5xUf6j4upBrXZPg6AI4MRK",
      "popularity": 66
    },
    {
      "name": "Grateful Dead",
      "id": "4TMHGUX5WI7OOm53PqSDAT",
      "popularity": 65
    },
    {
      "name": "The Cars",
      "id": "6DCIj8jNaNpBz8e5oKFPtp",
      "popularity": 65
    },
    {
      "name": "ZZ Top",
      "id": "2AM4ilv6UzW0uMRuqKtDgN",
      "popularity": 68
    },
    {
      "name": "Ramones",
      "id": "1co4F2pPNH8JjTutZkmgSm",
      "popularity": 66
    },
    {
      "name": "Simon & Garfunkel",
      "id": "70cRZdQywnSFp9pnc2WTCE",
      "popularity": 70
    },
    {
      "name": "The Doors",
      "id": "22WZ7M8sxp5THdruNY3gXt",
      "popularity": 72
    },
    {
      "name": "Van Halen",
      "id": "2cnMpRsOVqtPMfq7YiFE6K",
      "popularity": 71
    },
    {
      "name": "The Beach Boys",
      "id": "3oDbviiivRWhXwIE8hxkVV",
      "popularity": 71
    },
    {
      "name": "The Beatles",
      "id": "3WrFJ7ztbogyGnTHbHJFl2",
      "popularity": 83
    },
    {
      "name": "Pink Floyd",
      "id": "0k17h0D3J5VfsdmQ1iZtE9",
      "popularity": 78
    },
    {
      "name": "The Rolling Stones",
      "id": "22bE4uQ6baNwSHPVcDxLCe",
      "popularity": 77
    },
    {
      "name": "The Who",
      "id": "67ea9eGLXYMsO2eYQRui3w",
      "popularity": 67
    },
    {
      "name": "U2",
      "id": "51Blml2LZPmy7TTiAg47vQ",
      "popularity": 76
    },
    {
      "name": "The Police",
      "id": "5NGO30tJxFlKixkPSgXcFE",
      "popularity": 74
    },
    {
      "name": "Sting",
      "id": "0Ty63ceoRnnJKVEYP0VQpk",
      "popularity": 70
    },
    {
      "name": "Deep Purple",
      "id": "568ZhdwyaiCyOGJRtNYhWf",
      "popularity": 66
    },
    {
      "name": "The Clash",
      "id": "3RGLhK1IP9jnYFH4BRFJBS",
      "popularity": 69
    },
    {
      "name": "Bee Gees",
      "id": "1LZEQNv7sE11VDY3SdxQeN",
      "popularity": 75
    },
    {
      "name": "Black Sabbath",
      "id": "5M52tdBnJaKSvOpJGz8mfZ",
      "popularity": 72
    },
    {
      "name": "Ozzy Osbourne",
      "id": "6ZLTlhejhndI4Rh53vYhrY",
      "popularity": 71
    },
    {
      "name": "ABBA",
      "id": "0LcJLqbBmaGUft1e9Mm8HV",
      "popularity": 79
    },
    {
      "name": "Genesis",
      "id": "3CkvROUTQ6nRi9yQOcsB50",
      "popularity": 67
    },
    {
      "name": "Grateful Dead",
      "id": "4TMHGUX5WI7OOm53PqSDAT",
      "popularity": 65
    },
    {
      "name": "Pearl Jam",
      "id": "1w5Kfo2jwwIPruYS2UWh56",
      "popularity": 73
    },
    {
      "name": "The Animals",
      "id": "3ICflSq6ZgYAIrm2CTkfVP",
      "popularity": 63
    },
    {
      "name": "Guns N' Roses",
      "id": "3qm84nBOXUEQ2vnTfUTTFC",
      "popularity": 79
    },
    {
      "name": "Radiohead",
      "id": "4Z8W4fKeB5YxbusRsdQVPb",
      "popularity": 78
    },
    {
      "name": "Yes",
      "id": "7AC976RDJzL2asmZuz7qil",
      "popularity": 59
    },
    {
      "name": "The Jackson 5",
      "id": "2iE18Oxc8YSumAU232n4rW",
      "popularity": 65
    },
    {
      "name": "The Cure",
      "id": "7bu3H8JO7d0UbMoVzbo70s",
      "popularity": 74
    },
    {
      "name": "Coldplay",
      "id": "4gzpq5DPGxSnKTe4SA8HAU",
      "popularity": 88
    },
    {
      "name": "The Smiths",
      "id": "3yY2gUcIsjMr8hjo51PoJ8",
      "popularity": 75
    },
    {
      "name": "Beastie Boys",
      "id": "03r4iKL2g2442PT9n2UKsx",
      "popularity": 68
    },
    {
      "name": "Sex Pistols",
      "id": "1u7kkVrr14iBvrpYnZILJR",
      "popularity": 57
    },
    {
      "name": "Public Enemy",
      "id": "6Mo9PoU6svvhgEum7wh2Nd",
      "popularity": 56
    },
    {
      "name": "blink-182",
      "id": "6FBDaR13swtiWwGhX1WQsP",
      "popularity": 79
    },
    {
      "name": "Sum 41",
      "id": "0qT79UgT5tY4yudH9VfsdT",
      "popularity": 70
    },
    {
      "name": "Limp Bizkit",
      "id": "165ZgPlLkK7bf5bDoFc6Sb",
      "popularity": 72
    },
    {
      "name": "Pantera",
      "id": "14pVkFUHDL207LzLHtSA18",
      "popularity": 67
    },
    {
      "name": "Korn",
      "id": "3RNrq3jvMZxD9ZyoOZbQOD",
      "popularity": 74
    },
    {
      "name": "Linkin Park",
      "id": "6XyY86QOPPrYVGvF9ch6wz",
      "popularity": 83
    },
    {
      "name": "Green Day",
      "id": "7oPftvlwr6VrsViSDV7fJY",
      "popularity": 78
    },
    {
      "name": "Destiny's Child",
      "id": "1Y8cdNmUJH7yBTd9yOvr5i",
      "popularity": 70
    },
    {
      "name": "Nick Cave & The Bad Seeds",
      "id": "4UXJsSlnKd7ltsrHebV79Q",
      "popularity": 62
    },
    {
      "name": "Erykah Badu",
      "id": "7IfculRW2WXyzNQ8djX8WX",
      "popularity": 64
    },
    {
      "name": "The Roots",
      "id": "78xUyw6FkVZrRAtziFdtdu",
      "popularity": 59
    },
    {
      "name": "Paul McCartney",
      "id": "4STHEaNw4mPZ2tzheohgXB",
      "popularity": 68
    },
    {
      "name": "Mariah Carey",
      "id": "4iHNK0tOyZPYnBU7nGAgpQ",
      "popularity": 77
    },
    {
      "name": "John Lee Hooker",
      "id": "1yNOfXGQNGjAynk77wv85x",
      "popularity": 57
    },
    {
      "name": "Public Enemy",
      "id": "6Mo9PoU6svvhgEum7wh2Nd",
      "popularity": 56
    },
    {
      "name": "Dolly Parton",
      "id": "32vWCbZh0xZ4o9gkz4PsEU",
      "popularity": 70
    },
    {
      "name": "Christina Aguilera",
      "id": "1l7ZsJRRS8wlW3WfJfPfNS",
      "popularity": 77
    },
    {
      "name": "Beyoncé",
      "id": "6vWDO969PvNqNYHIOW5v0m",
      "popularity": 87
    },
    {
      "name": "Miley Cyrus",
      "id": "5YGY8feqx7naU7z4HrwZM6",
      "popularity": 81
    },
    {
      "name": "Jennifer Lopez",
      "id": "2DlGxzQSjYe5N6G9nkYghR",
      "popularity": 75
    },
    {
      "name": "Justin Timberlake",
      "id": "31TPClRtHm23RisEBtV3X7",
      "popularity": 79
    },
    {
      "name": "Adele",
      "id": "4dpARuHxo51G3z768sgnrY",
      "popularity": 84
    },
    {
      "name": "Shakira",
      "id": "0EmeFodog0BfCgMzAIvKQp",
      "popularity": 85
    },
    {
      "name": "Bruno Mars",
      "id": "0du5cEVh5yTK9QJze8zA0C",
      "popularity": 87
    },
    {
      "name": "JAY-Z",
      "id": "3nFkdlSjzX9mRTtwJOzDYB",
      "popularity": 83
    },
    {
      "name": "Robbie Williams",
      "id": "2HcwFjNelS49kFbfvMxQYw",
      "popularity": 71
    },
    {
      "name": "Céline Dion",
      "id": "4S9EykWXhStSc15wEx8QFK",
      "popularity": 73
    },
    {
      "name": "Amy Winehouse",
      "id": "6Q192DXotxtaysaqNPy5yR",
      "popularity": 74
    },
    {
      "name": "Ray Charles",
      "id": "1eYhYunlNJlDoQhtYBvPsi",
      "popularity": 66
    },
    {
      "name": "Alicia Keys",
      "id": "3DiDSECUqqY1AuBP8qtaIa",
      "popularity": 77
    },
    {
      "name": "John Legend",
      "id": "5y2Xq6xcjJb2jVM54GHK3t",
      "popularity": 77
    },
    {
      "name": "Snoop Dogg",
      "id": "7hJcb9fa4alzcOq3EaNPoG",
      "popularity": 82
    },
    {
      "name": "Yeat",
      "id": "3qiHUAX7zY4Qnjx8TNUzVx",
      "popularity": 80
    },
    {
      "name": "JAY-Z",
      "id": "3nFkdlSjzX9mRTtwJOzDYB",
      "popularity": 83
    },
    {
      "name": "Kendrick Lamar",
      "id": "2YZyLoL8N0Wb9xBt1NhZWg",
      "popularity": 88
    },
    {
      "name": "50 Cent",
      "id": "3q7HBObVc0L8jNeTe5Gofh",
      "popularity": 82
    },
    {
      "name": "Mary J. Blige",
      "id": "1XkoF8ryArs86LZvFOkbyr",
      "popularity": 70
    },
    {
      "name": "Common",
      "id": "2GHclqNVjqGuiE5mA7BEoc",
      "popularity": 61
    },
    {
      "name": "Nicki Minaj",
      "id": "0hCNtLu0JehylgoiP8L4Gh",
      "popularity": 86
    },
    {
      "name": "Missy Elliott",
      "id": "2wIVse2owClT7go1WT98tk",
      "popularity": 70
    },
    {
      "name": "Ms. Lauryn Hill",
      "id": "2Mu5NfyYm8n5iTomuKAEHl",
      "popularity": 71
    },
    {
      "name": "Jimi Hendrix",
      "id": "776Uo845nYHJpNaStv1Ds4",
      "popularity": 70
    },
    {
      "name": "Nina Simone",
      "id": "7G1GBhoKtEPnP86X2PvEYO",
      "popularity": 67
    },
    {
      "name": "Johnny Cash",
      "id": "6kACVPfCOnqzgfEF5ryl0x",
      "popularity": 73
    },
    {
      "name": "Katy Perry",
      "id": "6jJ0s89eD6GaHleKKya26X",
      "popularity": 84
    },
    {
      "name": "Katy Perry",
      "id": "6jJ0s89eD6GaHleKKya26X",
      "popularity": 84
    },
    {
      "name": "James Brown",
      "id": "7GaxyUddsPok8BuhxN6OUW",
      "popularity": 62
    },
    {
      "name": "Dr. Dre",
      "id": "6DPYiyq5kWVQS4RGwxzPC7",
      "popularity": 79
    },
    {
      "name": "The White Stripes",
      "id": "4F84IBURUo98rz4r61KF70",
      "popularity": 70
    },
    {
      "name": "Barbra Streisand",
      "id": "7jmTilWYlKOuavFfmQAcu6",
      "popularity": 63
    },
    {
      "name": "Ariana Grande",
      "id": "66CXWjxzNUsdJxJ2JdwvnR",
      "popularity": 88
    },
    {
      "name": "Diana Ross",
      "id": "3MdG05syQeRYPPcClLaUGl",
      "popularity": 66
    },
    {
      "name": "Tina Turner",
      "id": "1zuJe6b1roixEKMOtyrEak",
      "popularity": 67
    },
    {
      "name": "Billie Holiday",
      "id": "1YzCsTRb22dQkh9lghPIrp",
      "popularity": 65
    },
    {
      "name": "Etta James",
      "id": "0iOVhN3tnSvgDbcg25JoJb",
      "popularity": 65
    },
    {
      "name": "Ms. Lauryn Hill",
      "id": "2Mu5NfyYm8n5iTomuKAEHl",
      "popularity": 71
    },
    {
      "name": "Norah Jones",
      "id": "2Kx7MNY7cI1ENniW7vT30N",
      "popularity": 71
    },
    {
      "name": "Slayer",
      "id": "1IQ2e1buppatiN1bxUVkrk",
      "popularity": 66
    },
    {
      "name": "Motörhead",
      "id": "1DFr97A9HnbV3SKTJFu62M",
      "popularity": 65
    },
    {
      "name": "Slipknot",
      "id": "05fG473iIaoy82BF1aGhL8",
      "popularity": 79
    },
    {
      "name": "System Of A Down",
      "id": "5eAWCfyUhZtHHtBdNk56l1",
      "popularity": 78
    },
    {
      "name": "Marilyn Manson",
      "id": "2VYQTNDsvvKN9wmU5W7xpj",
      "popularity": 69
    },
    {
      "name": "Megadeth",
      "id": "1Yox196W7bzVNZI7RBaPnf",
      "popularity": 70
    },
    {
      "name": "Nickelback",
      "id": "6deZN1bslXzeGvOLaLMOIF",
      "popularity": 76
    },
    {
      "name": "Bob Marley & The Wailers",
      "id": "2QsynagSdAqZj3U9HgDzjD",
      "popularity": 77
    },
    {
      "name": "Kid Cudi",
      "id": "0fA0VVWsXO9YnASrzqfmYu",
      "popularity": 82
    },
    {
      "name": "Jack Harlow",
      "id": "2LIk90788K0zvyj2JJVwkJ",
      "popularity": 82
    },
    {
      "name": "Meek Mill",
      "id": "20sxb77xiYeusSH8cVdatc",
      "popularity": 75
    },
    {
      "name": "Post Malone",
      "id": "246dkjvS1zLTtiykXe5h60",
      "popularity": 88
    },
    {
      "name": "Anderson .Paak",
      "id": "3jK9MiCrA42lLAdMGUZpwa",
      "popularity": 78
    },
    {
      "name": "Mac Miller",
      "id": "4LLpKhyESsyAXpc4laK94U",
      "popularity": 83
    },
    {
      "name": "Leonard Cohen",
      "id": "5l8VQNuIg0turYE1VtM9zV",
      "popularity": 64
    },
    {
      "name": "Shaggy",
      "id": "5EvFsr3kj42KNv97ZEnqij",
      "popularity": 71
    },
    {
      "name": "Lenny Kravitz",
      "id": "5gznATMVO85ZcLTkE9ULU7",
      "popularity": 68
    }    
  ]

  constructor() { }

  private async getAccessToken() {
    return fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (btoa(this.client_id + ':' + this.client_secret))
      },
      body: 'grant_type=client_credentials'
    }).then(response => response.json())
      .then(data => {
        console.log({token: data.access_token});
        return data.access_token
      });
  }

  async getArtistTopTracks(artistId: string) {
    const at = await this.getAccessToken();
    const fetchData = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=IL`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + at
          }
        });
    return await fetchData.json();
    };

  async getArtistDataById(artistId: string) {
    const at = await this.getAccessToken();
    const fetchData = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + at
          }
        });
    return await fetchData.json();
    };

    async getArtistAndTopTracksByRandom() {
      const artist = this.randomArtists[Math.floor(Math.random() * this.randomArtists.length)];
      const artistData = await this.getArtistDataById(artist.id);
      const topTracks = await this.getArtistTopTracks(artist.id);
      this.subject.next({artistData, topTracks});
    }

    onGetArtistAndTopTracks(): Observable<any> {
      return this.subject.asObservable();
    }
}
