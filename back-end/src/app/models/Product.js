import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                description: Sequelize.STRING,
                price: Sequelize.NUMBER,
                user_id: Sequelize.NUMBER,
            },
            { sequelize }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        });
    }
}

export default Product;
