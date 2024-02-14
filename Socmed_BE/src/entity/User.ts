import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Thread } from "./Thread"
import { Like } from "./Like"
import { Reply } from "./Reply"

@Entity({ name: "user" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    full_name: string

    @Column()
    user_name: string

    @Column()
    email: string

    @Column({select: false})
    password: string

    @Column({ nullable: true })
    profile_picture: string

    @Column({ nullable: true })
    image_cover: string


    @Column({ nullable: true })
    bio: string

    @ManyToMany(() => User, (user) => user.following)
    @JoinTable({
        name: "follow",
        joinColumn: {
            name: "following_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "follower_id",
            referencedColumnName: "id",
        },
    })
    followers: User[];

    @ManyToMany(() => User, (user) => user.followers)
    following: User[];

    @OneToMany(() => Thread, (thread) => thread.user, {
    })
    threads: Thread[]

    @OneToMany(() => Thread, (thread) => thread.user, {
    })
    likes: Like[]

    @OneToMany(() => Reply, (reply) => reply.user, {
    })
    replies: Reply[];

    
}
