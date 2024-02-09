import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { User } from "./User"
import { Like } from "./Like"
import { Reply } from "./Reply"

@Entity({ name: "thread" })
export class Thread {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column({ nullable: true })
    image_thread: string

    @Column()
    created_at: Date

    @ManyToOne(() => User, (user) => user.threads,)
    user: User

    @OneToMany(() => Like, (like) => like.thread,)
    likes: Like[]

    @OneToMany(() => Reply, (reply) => reply.user,)
    replies: Reply[];
}
