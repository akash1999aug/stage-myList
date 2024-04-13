import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
} from 'sequelize-typescript';
import { UserEntity } from 'src/module/user/entity/user.entity';
import { CustomTable } from 'src/utils/custom_validator/custom_table';

@CustomTable('myList')
export class MyListEntity extends Model<MyListEntity> {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataType.UUIDV4,
    })
    public id: string;

    @ForeignKey(() => UserEntity)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    public userId: string;

    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    public contentId: string;

    @BelongsTo(() => UserEntity)
    user: UserEntity;
}
