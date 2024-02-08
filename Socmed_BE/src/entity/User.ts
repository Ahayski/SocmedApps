import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Thread } from "./Thread"
import { Like } from "./Like"
import { Reply } from "./Reply"
import { Follow } from "./Follow"

@Entity({ name: "user" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_name: string

    @Column()
    full_name: string

    @Column({ nullable: true })
    profile_picture: string

    @Column({ nullable: true })
    image_cover: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({ nullable: true })
    description: string

    @OneToMany(() => Thread, (thread) => thread.user, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    threads: Thread[]

    @OneToMany(() => Thread, (thread) => thread.user, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    likes: Like[]

    @OneToMany(() => Reply, (reply) => reply.user, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",

    })
    replies: Reply[];

    @OneToMany(() => Follow, (follow) => follow.followed, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    followers: Follow[];

    @OneToMany(() => Follow, (follow) => follow.follower, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    followings: Follow[];
}
