import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('Tokens')
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Index()
  token: string;

  @Column({ type: 'timestamp' })
  expiration_date: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
  
  @Column({ nullable: true })
  memo?: string;

  @Column({ default: true})
  is_active: boolean;
}