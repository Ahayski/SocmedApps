import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Thread } from "./Thread"
import { User } from "./User"

@Entity({ name: "like " })
export class Like {

    @PrimaryGeneratedColumn()
    id: number


    @ManyToOne(() => Thread, (thread) => thread.likes, {
    })
    thread: Thread

    @OneToMany(() => User, (user) => user.likes, {
    })
    user: User
}
