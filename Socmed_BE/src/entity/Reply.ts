import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm"
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
    created_at: Date

    @ManyToOne(() => User, (user) => user.replies, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "user_id" }) // untuk membuat foreignkey
    user: User;

    @ManyToOne(() => Thread, (thread) => thread.replies, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "thread_id" }) // untuk membuat foreignkey
    thread: Thread;
}
