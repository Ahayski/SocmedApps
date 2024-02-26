export interface IThreads {
    id: number;
    avatar: string;
    profileName: string;
    userName: string;
    content: string;
    image_content?: string;
    datePost: number;
    likes: number;
    replies: number;
  }
  [];
  
  export const data: IThreads[] = [
    {
      id: 1,
      avatar:
        "https://tmssl.akamaized.net/images/foto/galerie/neymar-brazil-2023-1694521247-116480.jpg?lm=1694521259",
      profileName: "Alfan",
      userName: "AkatsukiAlfan",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      image_content: "",
      datePost: 15,
      likes: 100,
      replies: 9,
    },
    {
      id: 2,
      avatar:
        "https://cdn.keepo.me/images/post/lists/2019/11/12/main-list-image-83208479-7614-4573-9b35-71ae43c4a522-9.jpg",
      profileName: "Fahmi",
      userName: "Uchiha_Fahmi",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquid fugiat obcaecati nihil nulla commodi harum incidunt provident impedit quibusdam.",
      image_content: "",
      datePost: 25,
      likes: 530,
      replies: 120,
    },
    {
      id: 3,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/20191221_JKT48_at_JKT48_Joy_Kick_Tears_HSF_-_Mutiara_Azzahra_%28Muthe%29_%283%29.jpg/800px-20191221_JKT48_at_JKT48_Joy_Kick_Tears_HSF_-_Mutiara_Azzahra_%28Muthe%29_%283%29.jpg",
      profileName: "Muthe",
      userName: "Mumuu",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores atque tenetur.",
      image_content:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/119/2023/10/12/1-973884098.jpg",
      datePost: 12,
      likes: 24,
      replies: 1,
    },
  ];
  