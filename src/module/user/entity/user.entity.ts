import { Column, DataType, HasMany, Model } from 'sequelize-typescript';
import { MyListEntity } from 'src/module/myList/entity/myList.entity';
import { CustomTable } from 'src/utils/custom_validator/custom_table';

@CustomTable('users')
export class UserEntity extends Model<UserEntity> {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataType.UUIDV4,
    })
    public id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public userName: string;

    @HasMany(() => MyListEntity)
    myListEntity: MyListEntity;
}
