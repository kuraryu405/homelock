import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index, ManyToOne } from 'typeorm';
import { Token } from '../../token/entities/token.entity';

export enum LogType {
  SUCCESS = 'success',
  FAIL = 'fail',
}

@Entity('Logs')
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Token, (token) => token.logs)
  @Index()
  token: Token;

  @Column({ type: 'timestamp' })
  log_date: Date;

  @Column({ type: 'enum', enum: LogType, default: LogType.SUCCESS })
  log_type: LogType;

  @Column({ nullable: true })
  error_message?: string;

  @CreateDateColumn()
  created_at: Date;
}
