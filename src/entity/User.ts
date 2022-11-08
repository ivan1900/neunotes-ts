import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
      id!: number;
    @Column()
      name!: string;
    @Column()
      last_name!: string;
    @Column()
      user_name!: string;
    @PrimaryColumn()
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
