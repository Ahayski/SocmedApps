import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { User } from "./User"
import { Thread } from "./Thread"

@Entity({ name: "reply" })
export class Reply {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column({ nullable: true })
    file_reply: string

    @Column()
    created_at: string

    @OneToMany(() => Reply, (reply) => reply.user, {
    })
    replies: Reply[];

    @ManyToOne(() => User, (user) => user.replies, {
    })
    user: User;

    @ManyToOne(() => Thread, (thread) => thread.replies, {
    })
    thread: Thread;
}
