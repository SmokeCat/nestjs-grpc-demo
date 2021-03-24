import { Player, PlayerById } from './player.interface';
import { Observable } from 'rxjs';

export interface PlayersService {
  findOne(data: PlayerById): Observable<Player>;
}
