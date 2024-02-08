import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Thread } from "./Thread"
import { User } from "./User"

@Entity({ name: "follow " })
export class Follow {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.followings, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    follower: User;

    @ManyToOne(() => User, (user) => user.followers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    followed: User;
}
