import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Url } from '../urls/url.entity';

@Entity()
export class Access {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  ip: string;

  @Column()
  location: string;

  @ManyToOne(() => Url, (url) => url.accesses)
  url: Url;
}
