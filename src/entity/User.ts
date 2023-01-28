import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
} from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @Column()
  lastName!: string;
  @Index({ unique: true })
  @Column()
  userName!: string;
  @Index({ unique: true })
  @Column()
  email!: string;
  @Column()
  password!: string;
  @CreateDateColumn()
  created_at!: string;
  @UpdateDateColumn()
  updated_at!: string;
  @DeleteDateColumn()
  deleted_at!: string;
}

export default User;
