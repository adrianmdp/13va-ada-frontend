type PostComment = {
    user: string // Solo el nombre del usuario
    text: string
    date: Date // Ej: new Date("2022-11-11")
}

type Post = {
    title: string
    description: string
    date: Date // Ej: new Date("2022-11-11")
    comments: PostComment[]
}

export const posts: Post[] = [
    {
        title: "Título del post",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum necessitatibus accusamus doloremque ullam quae voluptatibus dignissimos reprehenderit possimus ab distinctio minus tempore officia explicabo exercitationem iste incidunt deserunt quo consectetur beatae tenetu.",
        date: new Date("2022-11-11"),
        comments: [
            {
                user: "Adriám", 
                date: new Date("2022-11-11"), 
                text: "Estoy de acuerdo."
            },
            {
                user: "Sofi", 
                date: new Date("2022-11-12"), 
                text: "Hola mundo."
            }
        ]
    },
    {
        title: "Título del post",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum necessitatibus accusamus doloremque ullam quae voluptatibus dignissimos reprehenderit possimus ab distinctio minus tempore officia explicabo exercitationem iste incidunt deserunt quo consectetur beatae tenetu.",
        date: new Date("2022-11-11"),
        comments: []
    }

]

