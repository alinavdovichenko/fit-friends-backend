import { Entity, Friend } from '@project/core';

export class FriendEntity implements Entity<FriendEntity>, Friend {
  public userFriendId: number;
  public userId: number;
  public friendId: number;
  public isConfirmed?: boolean;

  constructor(userFriend: Friend) {
    this.fillEntity(userFriend);
  }
  fillEntity(entity: Friend) {
    this.userId = entity.userId;
    this.friendId = entity.friendId;
    this.isConfirmed = entity.isConfirmed;
  }
  toObject(): FriendEntity {
    return { ...this };
  }
}
