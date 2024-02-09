import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { Thread } from "./Thread"
import { User } from "./User"

@Entity({ name: "like " })
export class Like {

    @PrimaryGeneratedColumn()
    id: number


    @ManyToOne(() => User, (user) => user.likes, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "user_id" }) // untuk membuat foreignkey
    user: User;

    @ManyToOne(() => Thread, (thread) => thread.likes, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "thread_id" }) // untuk membuat foreignkey
    thread: Thread;
}
