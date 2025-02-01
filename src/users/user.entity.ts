import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Url } from '../urls/url.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;

  @OneToMany(() => Url, (url) => url.user)
  urls: Url[];
}
