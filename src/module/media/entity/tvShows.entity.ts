import { Column, DataType, Model } from 'sequelize-typescript';
import { CustomTable } from 'src/utils/custom_validator/custom_table';

@CustomTable('tvShows')
export class TvShowsEntity extends Model<TvShowsEntity> {
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
    public title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public description: string;
}
