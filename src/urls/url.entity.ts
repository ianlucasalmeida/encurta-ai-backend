import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Access } from '../access/access.entity';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ unique: true })
  shortUrl: string;

  @ManyToOne(() => User, (user) => user.urls)
  user: User;

  @OneToMany(() => Access, (access) => access.url)
  accesses: Access[];
}
